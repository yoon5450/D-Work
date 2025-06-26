// import { renderJobs } from '../../renderTable/index.js';
import { postRender, setSessionStorage } from '../filterIndex.js';
import { filterState, applyAllFilters } from '../common/index.js';

export function initScoreFilter(jobData) {
  const toggleBtn = document.getElementById('score-filter-toggle');
  const popup = document.getElementById('score-popup');
  const minInput = document.getElementById('score-min');
  const maxInput = document.getElementById('score-max');
  const applyBtn = document.getElementById('score-apply');
  const resetBtn = document.getElementById('score-reset');

  // 토글
  toggleBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
  });

  // 적용 버튼 클릭
  applyBtn.addEventListener('click', () => {
    const minScore = parseFloat(minInput.value) || 0;
    const maxScore = parseFloat(maxInput.value) || 5;

    filterState.companyscore = [minScore, maxScore];
    postRender(applyAllFilters(jobData));
    setSessionStorage(filtered);
  });

  // 초기화 버튼 클릭
  resetBtn.addEventListener('click', () => {
    minInput.value = 0;
    maxInput.value = 5;
    filterState.companyscore = null; // 필터 초기화
    postRender(applyAllFilters(jobData));
    setSessionStorage(filtered);
  });

  // 외부 클릭 시 팝업 닫기
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !toggleBtn.contains(e.target)) {
      popup.classList.add('hidden');
    }
  });
}
