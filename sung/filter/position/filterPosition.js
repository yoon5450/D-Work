import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 모집부문 필터 초기화 함수
export function initPositionFilter(jobData) {
  const popup = document.getElementById('position-popup');             // 모집부문 필터 팝업
  const toggleBtn = document.getElementById('position-filter-toggle'); // 드롭다운 토글 버튼
  const resetBtn = document.getElementById('position-reset');          // 초기화 버튼
  const closeBtn = document.getElementById('position-close');          // 닫기 버튼
  const searchForm = document.getElementById('position-search-form');  // 검색 form
  const searchInput = document.getElementById('position-search');      // 검색 입력창
  const selectedTag = document.getElementById('position-selected-tag'); // 선택된 태그 보여줄 영역

  let selectedKeyword = null; // 선택된 검색어 하나만 유지

  // 드롭다운 클릭 → 토글
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

  // 검색 form submit 시 필터 적용 및 태그 생성
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

/*     selectedKeyword = query; // 검색어 저장
    renderSelectedTag(query); // 태그로 렌더링

    const matched = jobData.filter(job => job.position.some(pos => pos.includes(query)));
    renderJobs(matched); */

    filterState.position = query; // 상태에 저장
    /* renderSelectedTag(query); */

    const result = applyAllFilters(jobData);
    renderJobs(result);
  });
/* 
  // 태그로 선택된 키워드 보여주기
  function renderSelectedTag(keyword) {
    selectedTag.innerHTML = `
      <div class="selected-tag">
        <span class="tag-label">${keyword}</span>
        <button class="tag-remove" aria-label="삭제">×</button>
      </div>
    `;
  }

  // 태그 삭제 버튼 클릭 시 초기화
  selectedTag.addEventListener('click', (e) => {
    if (e.target.matches('.tag-remove')) {
      selectedKeyword = null;
      selectedTag.innerHTML = '';
      searchInput.value = '';
      renderJobs(jobData);
    }
  }); */

  // 초기화 버튼
  resetBtn.addEventListener('click', () => {
 /*    selectedKeyword = null;
    searchInput.value = '';
    selectedTag.innerHTML = '';
    renderJobs(jobData); */

    filterState.position = null;
    selectedTag.innerHTML = '';
    searchInput.value = '';
    renderJobs(applyAllFilters(jobData));
  });

  // 닫기 버튼
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}
