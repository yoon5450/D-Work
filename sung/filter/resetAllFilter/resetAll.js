import { renderJobs } from '../../renderTable/index.js';
import { filterState, applyAllFilters } from '../common/index.js';
import { resetCareerFilter } from '../career/index.js';

document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소들
    const resetAllBtn = document.getElementById('reset-all-filters');
    // console.log(resetAllBtn);

    // 필터 전체 초기화 핸들러
    resetAllBtn.addEventListener('click', () => {
        // 1. 상태 초기화
        filterState.position = [];
        filterState.career = [];
        filterState.jobType = [];
        filterState.stack = [];
        filterState.location = [];
        filterState.companyscore = [0, 5];

        // 2. 각 필터 UI 초기화 (커스텀된 것만 호출)
        resetCareerFilter(document.getElementById('career-popup'), document.getElementById('career-grid'));

        // jobType 체크박스 초기화
        document.querySelectorAll('#jobtype-popup input[type="checkbox"]').forEach(cb => cb.checked = false);

        // location 체크박스 초기화
        document.querySelectorAll('#location-popup input[type="checkbox"]').forEach(cb => cb.checked = false);

        // 검색창 초기화 (모집부문 & 스택)
        document.getElementById('position-search').value = '';
        document.getElementById('stack-search').value = '';

        // 회사평점 초기화
        document.getElementById('score-min').value = 0;
        document.getElementById('score-max').value = 5;

        // 3. 필터 다시 적용
        renderJobs(applyAllFilters(window.jobData));
    });
})
