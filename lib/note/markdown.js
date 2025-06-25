const editor = document.querySelector('#editor-container');

// 마크다운 -> HTML로 변경하는 함수
function handleChangeMarkdown(e){
    const currentBlock = document.activeElement;
    const preText = currentBlock.innerText;

  if (e.key === 'Backspace') {
    handleBackspace(e, currentBlock, preText);
  }

  if (e.key === 'Enter') {
    handleEnter(e, currentBlock, preText)
  }
}

// enter키 눌렀을 때 함수
function handleEnter(e, currentBlock, preText){
    e.preventDefault();
    
    if (preText === '') return;

    if (preText.startsWith('# ')) {
      currentBlock.innerHTML = `<h1>${preText.slice(2)}</h1>`;  
    } else if (preText.startsWith('## ')) {
      currentBlock.innerHTML = `<h2>${preText.slice(3)}</h2>`;
    } else if (preText.startsWith('### ')) {
      currentBlock.innerHTML = `<h3>${preText.slice(4)}</h3>`;
    } else if (preText.startsWith('- ')) {
      currentBlock.innerHTML = `<li>${preText.slice(2)}</li>`;
    } else if (preText === '---') {
      currentBlock.innerHTML = `<hr>`;
    } else {
      currentBlock.innerHTML = `<p>${preText}</p>`;
    }

    // 블록 추가
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    newBlock.contentEditable = true;
    newBlock.dataset.type = 'text';
    editor.appendChild(newBlock);
    newBlock.focus();
}

// 백스페이스키 눌렀을 때 함수
function handleBackspace(e, currentBlock, preText){
    if (preText === '') {
      e.preventDefault();

      const preBlock = currentBlock.previousElementSibling;
      if (preBlock) {
        currentBlock.remove();
        focusEnd(preBlock);
      }
    }
}

// 현재 줄 지울 때 이전 줄의 마지막에 focus하는 함수
function focusEnd(preBlock) {
  preBlock.focus();
  const range = document.createRange();
  range.selectNodeContents(preBlock);
  range.collapse(false);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

// 편집기에서 enter, backspace 누르는 이벤트
editor.addEventListener('keydown', handleChangeMarkdown);