// import { renderJobs } from '../../renderTable/index.js';
import { postRender } from '../filterIndex.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 근무형태 필터 초기화 함수
export function initJobTypeFilter(jobData) {
  // console.log("근무형태 필터에 전달된 데이터:", jobData);
  const checkboxes = {
    fulltime: document.getElementById('jobtype-fulltime'),
    contract: document.getElementById('jobtype-contract'),
    intern: document.getElementById('jobtype-intern'),
    freelance: document.getElementById('jobtype-freelance'),
  };

  const popup = document.getElementById('jobtype-popup');            // 팝업 영역
  const toggleBtn = document.getElementById('jobtype-filter-toggle'); // 드롭다운 토글 버튼
  const resetBtn = document.getElementById('jobtype-reset');         // 선택 초기화 버튼
  const closeBtn = document.getElementById('jobtype-close');         // 닫기 버튼

  // 드롭다운 버튼 클릭 시 팝업 열기/닫기
  toggleBtn.addEventListener('click', (e) => {
    popup.classList.toggle('hidden');
    e.stopPropagation();
  });

  // 외부 클릭 시 팝업 닫기 처리
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });

  // 체크박스 상태 변경 이벤트 등록
  Object.values(checkboxes).forEach(checkbox => {

    checkbox.addEventListener('click', (e) => {
      e.stopPropagation(); // 팝업 닫힘 방지!
    });

    checkbox.addEventListener('change', () => {

      filterState.jobType = getSelectedTypes(checkboxes); // 상태 저장
      postRender(applyAllFilters(jobData));               // 전체 필터 적용
    });
  });

  // 초기화 버튼 클릭 시 모든 체크 해제 및 전체 렌더링
  resetBtn.addEventListener('click', () => {
    Object.values(checkboxes).forEach(checkbox => (checkbox.checked = false));
    // renderJobs(jobData);
    filterState.jobType = []; // 상태 초기화
    postRender(applyAllFilters(jobData)); // 전체 필터 적용
  });

  // 닫기 버튼 클릭 시 팝업 닫기
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

// 현재 체크된 근무형태 리스트 반환 함수
function getSelectedTypes(checkboxes) {
  const types = [];

  if (checkboxes.fulltime.checked) types.push('정규직');
  if (checkboxes.contract.checked) types.push('계약직');
  if (checkboxes.intern.checked) types.push('인턴');
  if (checkboxes.freelance.checked) types.push('프리랜서');

  return types;
}

// 실제 데이터에서 근무형태로 필터링하는 함수
function filterByJobType(jobData, selectedTypes) {
  if (selectedTypes.length === 0) return jobData; // 아무것도 선택 안 했으면 전체 반환

  return jobData.filter(job => selectedTypes.includes(job.type));
}