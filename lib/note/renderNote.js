import {
  debounce,
  getDoc,
  getTargetDoc,
  putDoc,
  throttle,
  initDocTree,
  getUserSessionStorage,
} from '../index.js'

const noteSection = document.querySelector('#note-section')
const noteBtn = document.querySelector('#note-btn')
const backCalendarBtn = document.querySelector('#back-to-calendar')
const editorContainer = document.querySelector('#editor-container')
const edittorHeader = document.querySelector('#note-header')

let currentPostingId = 153942
let currentHandler = debounce(() => {
  noteSectionSaveCallback(currentPostingId)
}, 1000)

// 노트 페이지 화면 전환 함수
export function renderNote(path) {
  if (path === '/note') {
    noteSection.style.display = 'flex'

    noteSectionLoad(currentPostingId)
  } else {
    noteSection.style.display = 'none'
  }
}

// note 버튼 선택 이벤트
noteBtn.addEventListener('click', () => {
  history.pushState({}, '', '/note')
  renderNote('/note')
  initDocTree()
})

// 돌아가기 버튼 선택 이벤트
backCalendarBtn.addEventListener('click', () => {
  history.pushState({}, '', '/')
  renderNote('/')
})

// 브라우저 앞/뒤 이벤트
window.addEventListener('popstate', () => {
  renderNote(location.pathname)
})

export function noteLoadHandler(postingId) {
  setPostingId(postingId)

  // 이벤트리스너 관리
  noteSection.removeEventListener('keydown', currentHandler)

  currentHandler = debounce(() => {
    noteSectionSaveCallback(currentPostingId)
  }, 1000)

  noteSection.addEventListener('keydown', debounce(currentHandler, 1000))

  console.log(postingId)
  noteSectionLoad(postingId)
}

function setPostingId(postingId) {
  currentPostingId = postingId
}

async function noteSectionSaveCallback(postingid) {
  try {
    const titleBlock = document.querySelector('#title-block p')
    await putDoc(titleBlock.textContent, editorContainer.innerHTML, postingid)
    console.log('저장됨')
  } catch (error) {console.err('noteSectionSaveCallback API 오류')}
}

async function noteSectionLoad(postingid) {
  try {
    let res = await getTargetDoc(postingid)
    let content = res.content
    let title = res.title
    edittorHeader.textContent = `${getUserSessionStorage()}의 노트`

    const containerContent = content ?? `<div class="block" contenteditable="true" data-type="text"></div>`
    const hasTitleBlock = containerContent.includes('<div id="title-block"')

    editorContainer.innerHTML = hasTitleBlock
      ? containerContent
      : `<div id="title-block" class="block" contenteditable="true" data-type="text"><p></p></div>${containerContent}`

    const titleBlock = document.querySelector('#title-block p')
    if (titleBlock) {
      titleBlock.textContent = title ?? ''
    }
  } catch (err) {
    console.err(err)
  }
}
