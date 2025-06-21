import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 근무지(Location) 필터 초기화 함수
export function initLocationFilter(jobData) {
  const popup = document.getElementById('location-popup');
  const toggleBtn = document.getElementById('location-filter-toggle');
  const resetBtn = document.getElementById('location-reset');
  const closeBtn = document.getElementById('location-close');

  const checkboxes = popup.querySelectorAll('input[type="checkbox"]');

  // 드롭다운 버튼 클릭 시 팝업 열기/닫기
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  // 외부 클릭 시 팝업 닫기 처리
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });

  // 체크박스 상태 변경 이벤트 등록
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      filterState.location = getSelectedLocations(checkboxes);
      renderJobs(applyAllFilters(jobData));
    });
  });

  // 초기화 버튼 클릭 시 체크 해제 및 전체 렌더링
  resetBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => (cb.checked = false));
    filterState.location = [];
    renderJobs(applyAllFilters(jobData));
  });

  // 닫기 버튼 클릭 시 팝업 닫기
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

// 현재 체크된 근무지 리스트 반환 함수
function getSelectedLocations(checkboxes) {
  return Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}
