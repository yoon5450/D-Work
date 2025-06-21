import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';

export function initPositionFilter(jobData) {
  const popup = document.getElementById('position-popup');
  const toggleBtn = document.getElementById('position-filter-toggle');
  const resetBtn = document.getElementById('position-reset');
  const closeBtn = document.getElementById('position-close');
  const searchForm = document.getElementById('position-search-form');
  const searchInput = document.getElementById('position-search');

  // 상태 배열로 초기화
  if (!Array.isArray(filterState.position)) {
    filterState.position = [];
  }

  // 드롭다운 토글
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
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
    renderJobs(result);
  });

  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
    filterState.position = [];
    searchInput.value = '';
    renderJobs(applyAllFilters(jobData));
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
