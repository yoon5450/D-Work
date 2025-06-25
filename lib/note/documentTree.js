import { getNode, getDoc ,getTargetDoc, setDoc, putDoc, deleteDoc } from "../index.js";

const docTree = getNode('.note-doc-list');
const docRootElem = getNode('#root-doc-elem');

let i = 1;

function renderTree(tree, container, depth = 0) {
  tree.forEach(node => {
    const li = document.createElement('li');
    li.className = 'note-doc-elem';
    li.style.marginLeft = `${depth * 20}px`; // 들여쓰기
    li.dataset.id = node.id;

    li.innerHTML = `
      <a>${node.title}</a>
      <button class="add-child">+</button>
    `;

		console.log('li : ', li);
    container.appendChild(li);

    if (node.children && node.children.length > 0) {
      renderTree(node.children, container, depth + 1);
    }
  });
}

export function initDocTree(){
	(async (params) => {
		// setDoc('Doc2', "HELLO? this is contents", 153958);
		// putDoc('Doc3', 'Hello? my name is');
		let currentList = await getDoc();
		console.log(currentList);
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
		//현재 클릭한 버튼의 doc 위치를 파악 후, setDoc을 사용해서 만들기.
		docTree.insertAdjacentHTML('beforeend', `<li class="note-doc-elem"><a>Doc${i++}</a><button>+</button></li>`);
	}
	else if (e.target.tagName === 'A')
	{
		//getTargetDoc으로 id의 문서 받아오기
		(async () => {
			const targetId = e.target.closest('li').dataset.id;
			console.log('target Object : ',getTargetDoc(targetId));
		})();
	}
});