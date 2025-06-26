import { setSessionStorage } from '../../../lib/storage/sessionStorage.js';
// import { renderJobs } from '../../renderTable/index.js';
import { postRender } from '../filterIndex.js';
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
  // document.addEventListener('click', (e) => {
  //   if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
  //     popup.classList.add('hidden');
  //   }
  // });
  
  // 외부 클릭 시 닫기 (입력창이나 폼 내부 클릭 시 제외)
  document.addEventListener('click', (e) => {
    const isInsidePopup = e.target.closest('#stack-popup');
    const isToggleBtn = toggleBtn.contains(e.target);
    if (!isInsidePopup && !isToggleBtn) {
      popup.classList.add('hidden');
    }
  });

  // 입력창/폼 클릭 시 팝업 닫힘 방지
  searchInput.addEventListener('click', e => e.stopPropagation());
  // e.stopPropagation() => toggleBtn, input, form 클릭 시 팝업 닫힘 방지
  searchForm.addEventListener('click', e => e.stopPropagation());

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

    postRender(applyAllFilters(jobData)); // 전체 필터 적용 후 렌더링
    setSessionStorage(jobData);
  });


  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
    filterState.stack = [];
    searchInput.value = '';
    postRender(applyAllFilters(jobData));
    setSessionStorage(filtered);
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
