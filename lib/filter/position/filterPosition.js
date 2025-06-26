// import { renderJobs } from '../../renderTable/index.js';
import { postRender, setSessionStorage } from '../filterIndex.js';
import { filterState, applyAllFilters } from '../common/index.js';

export function initPositionFilter(jobData) {
  const popup = document.getElementById('position-popup');
  const toggleBtn = document.getElementById('position-filter-toggle');
  const resetBtn = document.getElementById('position-reset');
  const closeBtn = document.getElementById('position-close');
  const searchForm = document.getElementById('position-search-form');
  const searchInput = document.getElementById('position-search');


  console.log(searchForm, searchInput);

  // 상태 배열로 초기화
  if (!Array.isArray(filterState.position)) {
    filterState.position = [];
  }

  // 드롭다운 토글
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  /* 
  검색 안된 이유
    검색 입력창을 클릭하거나 검색 버튼을 눌렀을 때, 팝업이 즉시 닫혀버려서
    input에 포커스를 줄 수가 없음
    submit 이벤트 실행 전에 popup이 닫혀 버림
   */
  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    const isPopupChild = e.target.closest('#position-popup');
    const isToggleBtn = toggleBtn.contains(e.target);
    if (!isPopupChild && !isToggleBtn) {
      popup.classList.add('hidden');
    }
    searchInput.addEventListener('click', e => e.stopPropagation());
    searchForm.addEventListener('click', e => e.stopPropagation());
  });

  // 검색 form 제출 시 필터 적용
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    // 중복 키워드 방지
    if (!filterState.position.includes(query)) {
      filterState.position.push(query);
    }

    searchInput.value = ''; // 입력창 초기화

    const result = applyAllFilters(jobData);
    postRender(result);
    setSessionStorage(filtered);
  });

  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
    filterState.position = [];
    searchInput.value = '';
    postRender(applyAllFilters(jobData));
    setSessionStorage(filtered);
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
