import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 스택 필터 초기화 함수
export function initStackFilter(jobData) {
  const toggleBtn = document.getElementById('stack-filter-toggle');
  const popup = document.getElementById('stack-popup');
  const searchForm = document.getElementById('stack-search-form');
  const searchInput = document.getElementById('stack-search');
  const selectedTag = document.getElementById('stack-selected-tag');
  const resetBtn = document.getElementById('stack-reset');
  const closeBtn = document.getElementById('stack-close');

  // 드롭다운 열기/닫기
  console.log(toggleBtn);
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });

  // 검색 이벤트 처리
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const keyword = searchInput.value.trim();
    if (!keyword) return;

    filterState.stack = keyword.toLowerCase(); // 상태 저장 (소문자 비교용)
    /* renderStackTag(keyword); // 태그로 렌더링 */
    renderJobs(applyAllFilters(jobData)); // 전체 필터 적용 후 렌더링
  });

/*   // 태그 렌더링 함수
  function renderStackTag(keyword) {
    selectedTag.innerHTML = `
      <div class="stack-tag">
        <span>${keyword}</span>
        <span class="remove">&times;</span>
      </div>
    `;
  }

  // 태그 제거
  selectedTag.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      filterState.stack = null;
      selectedTag.innerHTML = '';
      searchInput.value = '';
      renderJobs(applyAllFilters(jobData));
    }
  }); */

  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
    filterState.stack = null;
    searchInput.value = '';
    selectedTag.innerHTML = '';
    renderJobs(applyAllFilters(jobData));
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
