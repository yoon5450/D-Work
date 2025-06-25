const editor = document.querySelector('#editor-container');

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

editor.addEventListener('keydown', handleChangeMarkdown);

function handleBackspace(e, currentBlock, preText){
}