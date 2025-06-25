const noteSection = document.querySelector('#note-section');
const noteBtn = document.querySelector('#note-btn');
const backCalendarBtn = document.querySelector('#back-to-calendar');

// 노트 페이지 화면 전환 함수
export function renderNote(path) {
  if (path === '/note') {
    noteSection.style.display = 'block';
  } else {
    noteSection.style.display = 'none';
  }
}

// note 버튼 선택 이벤트
noteBtn.addEventListener('click', () => {
  history.pushState({}, '', '/note');
  renderNote('/note');
});

// 돌아가기 버튼 선택 이벤트
backCalendarBtn.addEventListener('click', () => {
  history.pushState({}, '', '/');
  renderNote('/');
});

// 브라우저 앞/뒤 이벤트
window.addEventListener('popstate', () => {
  renderNote(location.pathname);
});