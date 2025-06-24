import { setSessionStorage } from '../../../lib/storage/sessionStorage.js';
import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 스택 필터 초기화 함수
export function initStackFilter(jobData) {
  const toggleBtn = document.getElementById('stack-filter-toggle');
  const popup = document.getElementById('stack-popup');
  const searchForm = document.getElementById('stack-search-form');
  const searchInput = document.getElementById('stack-search');
  const resetBtn = document.getElementById('stack-reset');
  const closeBtn = document.getElementById('stack-close');

  // 배열로 초기화
  if (!Array.isArray(filterState.stack)) {
    filterState.stack = [];
  }

  // 드롭다운 열기/닫기
  // console.log(toggleBtn);
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
    const keyword = searchInput.value.trim().toLowerCase();
    if (!keyword) return;

    // 중복 방지 후 배열에 추가
    if (!filterState.stack.includes(keyword)) {
      filterState.stack.push(keyword);
    }

    searchInput.value = ''; // 입력창 초기화

    renderJobs(applyAllFilters(jobData)); // 전체 필터 적용 후 렌더링
    setSessionStorage(jobData);
  });


  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
    filterState.stack = [];
    searchInput.value = '';
    renderJobs(applyAllFilters(jobData));
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
