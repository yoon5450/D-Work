// filterUtil.js

// 경력 조건에 따라 필터링
export function applyFilterByCareer(jobData, selectedCareer) {
  return jobData.filter(job => {
    const [min, max] = job.experience;
    return selectedCareer.some(year => year >= min && year <= max);
  });
}

// 경력 필터 UI 초기화
export function resetCareerFilter(popup, grid) {
  popup.querySelectorAll('input[type="checkbox"]').forEach(chk => (chk.checked = false));
  grid.querySelectorAll('button[data-value]').forEach(btn => btn.classList.remove('selected'));
}
