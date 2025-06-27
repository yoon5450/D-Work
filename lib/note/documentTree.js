import {
  getNode,
  getDoc,
  getTargetDoc,
  setDoc,
  putDoc,
  deleteDoc,
  noteLoadHandler,
  getUserSessionStorage,
} from '../index.js'

const docTree = getNode('.note-doc-list')
const docRootElem = getNode('#root-doc-elem')

let i = 1

function renderTree(tree, container, depth = 0) {
  tree.forEach((node) => {
    const li = document.createElement('li')
    li.className = 'note-doc-elem'
    li.dataset.id = node.id
    li.dataset.depth = depth

    li.innerHTML = `
      <button class="add">✚</button>
      <a>${node.title}</a>
      <button class="delete">❌</button>
    `

    li.style.setProperty('--depth', li.dataset.depth)
    if ((node.children && node.children.length > 0) || node.documents.length > 0) {
      const ul = document.createElement('ul')
      renderTree(node.documents, ul, depth + 1)
      li.appendChild(ul)
    }
    container.appendChild(li)
  })
}

export function initDocTree(){
  (async (params) => {
    let currentList = await getDoc();

    // NOTE : 첫 로그인 수정 완료
    if (currentList.length === 0) {
      await setDoc(`${getUserSessionStorage()}의 노트`)
      currentList = await getDoc()
    }
    
    docTree.innerHTML = ''; //렌더링 시 기존 DOCTREE 내부 값 초기화
    renderTree(currentList, docTree);
  })();
}

/*
documents: []
id: 153948
title: "test"
*/

//NOTE: 트리 받은 것 버튼 눌렀을 때 표시해줄것
docTree.addEventListener('click', (e) => {
  if (e.target.className === 'add') {
    const targetLi = e.target.closest('li')
    let newLi = document.createElement('li')

    newLi.className = 'note-doc-elem'
    newLi.dataset.depth = String(+targetLi.dataset.depth + 1)
    let defaultTitle = `${getUserSessionStorage()}의 노트`
    newLi.innerHTML = `
      <a>${defaultTitle}</a>
      <button class="add">+</button>
			<button class="delete">❌</button>
    `

    newLi.style.setProperty('--depth', newLi.dataset.depth)
    ;(async () => {
      let response = await setDoc(defaultTitle, targetLi.dataset.id)
      if (response.status >= 200 && response.status < 400) {
        initDocTree()
      } else {
        console.error('새로운 문서 추가 실패!')
        return
      }
    })();
    targetLi.appendChild(newLi);
  }
	else if (e.target.className === 'delete'){
		(async () => {
			if (getDoc().length == 1)
			{
				alert('마지막 문서는 삭제할 수 없습니다!');
			}
		})();
		if (!confirm('문서가 삭제됩니다. 계속하시겠습니까?'))
			return ;
		const targetLi = e.target.closest('li');
		(async () => {
			let response = await deleteDoc(targetLi.dataset.id);
			if (response.status >= 200 && response.status < 400){
				//console.log(`<${targetLi.dataset.id}> 문서 삭제됨`);
				initDocTree();
			}
			else{
				console.error('문서 삭제 에러!');
			}
		})();
	}
  else if (e.target.tagName === 'A') {
    const targetId = e.target.closest('li').dataset.id;
    noteLoadHandler(targetId)
  }
})
