import { debounce, getDoc, getTargetDoc, putDoc, throttle } from '../index.js'

const noteSection = document.querySelector('#note-section')
const noteBtn = document.querySelector('#note-btn')
const backCalendarBtn = document.querySelector('#back-to-calendar')
const editorContainer = document.querySelector('#editor-container')
const edittorHeader = document.querySelector('#note-header')

// 노트 페이지 화면 전환 함수
export function renderNote(path) {
  if (path === '/note') {
    noteSection.style.display = 'block'

    noteSectionLoad(153942)
  } else {
    noteSection.style.display = 'none'
  }
}

// note 버튼 선택 이벤트
noteBtn.addEventListener('click', () => {
  history.pushState({}, '', '/note')
  renderNote('/note')
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

async function noteSectionSaveCallback(postingid) {
  await putDoc('타이틀입니다.', editorContainer.innerHTML, postingid)
  let res = await getTargetDoc(postingid)
  console.log(res)

}

async function noteSectionLoad(postingid) {
  let res = await getTargetDoc(postingid)
  let content = res.content
  let title = res.title

  if(content.includes('<div id="title-block"') || false) editorContainer.innerHTML = content
  else editorContainer.innerHTML = `<div id="title-block" class="block" contenteditable="true" data-type="text"></div> + ${content}`

  if(title) edittorHeader.textContent = title;
  else edittorHeader.textContent = '';
}

function createDebouncedCallback(postingid){
  return debounce(() => noteSectionSaveCallback(postingid), 1000)
}

let currentHandler = createDebouncedCallback(153943)

noteSection.addEventListener(
  'keydown',
  debounce(() => currentHandler, 1000)
)