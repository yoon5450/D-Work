// filterCareer.js
// 경력 필터 관련 유틸 함수와 테이블 렌더링 함수 import
import { renderJobs } from '../../renderTable/index.js';
import { resetCareerFilter } from './filterUtil.js';
import { filterState, applyAllFilters } from '../common/index.js';

// 경력 필터 초기화 및 전체 이벤트 등록 함수 (앱 시작 시 실행됨)
export function initCareerFilter(jobData) {
  // HTML 요소들 가져오기: 버튼, 팝업, 체크박스, 버튼 그리드 등
  const toggleBtn = document.getElementById('career-filter-toggle'); // 필터 열기 버튼
  const popup = document.getElementById('career-popup');             // 팝업 전체 영역
  const resetBtn = document.getElementById('career-reset');          // 선택 초기화 버튼
  const closeBtn = document.getElementById('career-close');          // 닫기 버튼
  const careerGrid = document.getElementById('career-grid');         // 연차 버튼 모음 영역
  const checkboxNewbie = document.getElementById('career-newbie');   // 신입 체크박스
  const checkboxExperienced = document.getElementById('career-experienced'); // 경력 체크박스
  const checkboxAny = document.getElementById('career-any');         // 경력무관 체크박스

  let selectedCareer = [];  // 사용자가 클릭한 연차 범위 목록
  let rangeStart = null;    // 연차 범위의 시작 값 저장 (2개 클릭해서 범위 생성)

  //  필터 토글 열기/닫기 버튼
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  //  외부 영역 클릭 시 팝업 닫기
  document.addEventListener('click', (e) => {
    // 팝업과 버튼을 제외한 외부 클릭 시 닫기 처리
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });

  //  연차 버튼 클릭 시 범위 선택 처리
  careerGrid.addEventListener('click', (e) => {
    const targetButton = e.target.closest('button[data-value]');
    if (!targetButton) return;
    
    const val = Number(targetButton.dataset.value); // 클릭한 버튼의 data-value
    if (isNaN(val)) return; // 유효한 숫자가 아닐 경우 종료

    // 첫 번째 클릭이면 시작 값 저장
    if (rangeStart === null) {
      selectedCareer = [val];
      rangeStart = val;
    } else {
      // 두 번째 클릭이면 범위로 선택
      const [min, max] = [rangeStart, val].sort((a, b) => a - b); // 작은값~큰값 정렬
      selectedCareer = Array.from({ length: max - min + 1 }, (_, i) => min + i); // 범위 배열 생성
      rangeStart = null; // 다음 클릭을 위해 초기화
    }

    filterState.career = selectedCareer; // 필터 상태 갱신
    highlightButtons(careerGrid, selectedCareer);
  
    const filtered = applyAllFilters(jobData); // 모든 조건 반영된 필터 실행
    renderJobs(filtered);
  });

  //  체크박스 필터 처리 (신입, 경력, 무관)
  const handleCheckboxFilter = () => {
    const isNewbie = checkboxNewbie.checked;
    const isExperienced = checkboxExperienced.checked;
    const isAny = checkboxAny.checked;

    const updatedCareer = [];

    if (isNewbie || isAny) updatedCareer.push(0);
    if (isExperienced) {
      for (let i = 1; i <= 30; i++) updatedCareer.push(i);
    }

    filterState.career = updatedCareer; // 전역 상태 업데이트


    // 전체 필터 적용 → 필터링 결과 확인
    const filtered = applyAllFilters(jobData); // 전체 필터로 렌더링

    renderJobs(filtered); // 결과 반영
  };

  // 체크박스 변경 이벤트 바인딩
  [checkboxNewbie, checkboxExperienced, checkboxAny].forEach(box => {
    box.addEventListener('change', handleCheckboxFilter);
  });

  //  초기화 버튼 클릭 시 필터 리셋 처리
  resetBtn.addEventListener('click', () => {
    selectedCareer = [];        // 선택된 연차 초기화
    rangeStart = null;
    filterState.career = []; // 전역 상태 초기화

    resetCareerFilter(popup, careerGrid);
    renderJobs(applyAllFilters(jobData));

    /* resetCareerFilter(popup, careerGrid); // UI 상태 초기화
    renderJobs(jobData);        // 전체 공고 다시 렌더링 */

  });

  //  닫기 버튼 클릭 시 팝업 숨김
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

//  선택된 연차에 따라 버튼 UI 강조 처리 함수
function highlightButtons(container, selectedList) {
  const buttons = container.querySelectorAll('button[data-value]');
  buttons.forEach(btn => {
    const value = Number(btn.dataset.value);
    btn.classList.toggle('selected', selectedList.includes(value));
  });
}


