import { filterState } from './filterState.js';

// 모든 조건을 AND로 필터링하는 함수
export function applyAllFilters(data) {
  return data.filter(job => {
    // 모집부문 필터
    if (filterState.position) {
      const query = filterState.position.toLowerCase();
      const matched = job.position.some(pos => pos.toLowerCase().includes(query));
      if (!matched) return false;
    }

    // 경력 필터
    if (filterState.career.length > 0) {
      const [min, max] = job.experience;
      const isMatched = filterState.career.some(val => val >= min && val <= max);
      if (!isMatched) return false;
    }

    // 근무형태 필터
    if (filterState.jobType.length > 0) {
      const isMatched = filterState.jobType.includes(job.type);
      if (!isMatched) return false;
    }

    // 기술스택 필터
    if (filterState.stack) {
      const stackQuery = filterState.stack.toLowerCase();
      const isMatched = job.stack.some(s => s.toLowerCase().includes(stackQuery));
      if (!isMatched) return false;
    }

    return true;
  });
}