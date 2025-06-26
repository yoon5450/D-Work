
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
  tree.forEach(node => {
    if (depth > 0)
      console.log('depth < 1 : ',node)
    const li = document.createElement('li');
    li.className = 'note-doc-elem';
    li.dataset.id = node.id;
    li.dataset.depth = depth;
    const prefix = '↳'.repeat(depth);

    li.innerHTML = `
      <a>${prefix}${node.title}</a>
      <button>+</button>
    `;

    if ((node.children && node.children.length > 0) || node.documents.length > 0) {
      const ul = document.createElement('ul');
      console.log('부모 : ', node);
      renderTree(node.documents, ul, depth + 1)
      li.appendChild(ul);
    }
    container.appendChild(li);
  })
}

export function initDocTree(){
  (async (params) => {
    let currentList = await getDoc();
    docTree.innerHTML = ''; //렌더링 시 기존 DOCTREE 내부 값 초기화
    // console.log(currentList);
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
  if (e.target.tagName === 'BUTTON') {
    const targetLi = e.target.closest('li');
    let newLi = document.createElement('li');

    newLi.className  = 'note-doc-elem';
    newLi.dataset.depth = String(+(targetLi.dataset.depth) + 1);
    const prefix = '↳'.repeat(newLi.dataset.depth);
    let defaultTitle = `${getUserSessionStorage()}의 노트`;
    newLi.innerHTML = `
      <a>${prefix}${defaultTitle}</a>
      <button>+</button>
    `;

    (async () => {
      let response = await setDoc(defaultTitle, targetLi.dataset.id);
      // console.log('response : ',response);
      if(response.status >= 200 && response.status < 400){
        // console.log('getDoc Result : ',getDoc());
        initDocTree();
      }else{
        console.error('새로운 문서 추가 실패!');
        return ;
      }
    })();

    // console.log('newLi : ',newLi);
    // targetLi.insertAdjacentElement('beforeend', newLi);
    targetLi.appendChild(newLi);
  }
  else if (e.target.tagName === 'A') {
    //getTargetDoc으로 id의 문서 받아오기
    const targetId = e.target.closest('li').dataset.id;
    noteLoadHandler(targetId)
  }
});

