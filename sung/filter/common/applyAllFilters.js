import { filterState } from './filterState.js';

export function applyAllFilters(data) {
  return data.filter(job => {
    // 모집부문 필터 (position은 다중 키워드 배열)
    if (Array.isArray(filterState.position) && filterState.position.length > 0) {
      const matched = filterState.position.some(keyword => {
        if (Array.isArray(job.position)) {
          return job.position.some(pos => pos.toLowerCase().includes(keyword.toLowerCase()));
        } else {
          return job.position.toLowerCase().includes(keyword.toLowerCase());
        }
      });
      if (!matched) return false;
    }

    // 경력 필터 (career: [0,1,2] 처럼 다중값, job.experience는 [최소, 최대])
    if (Array.isArray(filterState.career) && filterState.career.length > 0) {
      const [jobMin, jobMax] = job.experience;

      // 사용자가 선택한 career 값들 중 하나라도 이 공고의 범위(jobMin ~ jobMax)에 포함되는지
      const isMatched = filterState.career.some(val => val >= jobMin && val <= jobMax);
    
      if (!isMatched) return false;
    }

    // 근무형태 필터 (정규직, 계약직 등)
    if (Array.isArray(filterState.jobType) && filterState.jobType.length > 0) {
      if (!filterState.jobType.includes(job.type)) return false;
    }

    // 기술스택 필터 (stack은 배열로 비교)
    // 예외 처리: job.stack이 없거나 배열이 아닐 경우
    if (Array.isArray(filterState.stack) && filterState.stack.length > 0) {
      if (!Array.isArray(job.stack)) {
        console.warn('job.stack이 배열이 아닙니다:', job.stack);
        return false;
      }

      // 대소문자 무시하고 모든 키워드가 job.stack 중 하나 이상과 매칭되는지 확인 (AND 조건)
      const matched = filterState.stack.every(keyword =>
        job.stack.some(s => s.toLowerCase().includes(keyword.toLowerCase()))
      );

      if (!matched) {
        // console.log('기술스택 불일치:', {
        //   stackFilter: filterState.stack,
        //   jobStack: job.stack
        // });
        return false;
      }
    }

    // 근무지 필터
    if (Array.isArray(filterState.location) && filterState.location.length > 0) {
      if (!Array.isArray(job.location)) return false;

      const matched = filterState.location.some(loc =>
        job.location.some(jobLoc =>
          jobLoc.toLowerCase().includes(loc.toLowerCase())
        )
      );
      if (!matched) return false;
    }

    // 회사 평점 필터
    if (filterState.companyscore) {
      const [minRaw, maxRaw] = filterState.companyscore;
      const min = parseFloat(parseFloat(minRaw).toFixed(2));
      const max = parseFloat(parseFloat(maxRaw).toFixed(2));
      const score = parseFloat(parseFloat(job.companyscore).toFixed(2));
      // console.log(`회사명: ${job.company}, 평점: ${score}, 범위: ${min} ~ ${max}`);
    
      if (score < min || score > max) {
        // console.log(`→ 제외됨: ${score} < ${min} 또는 ${score} > ${max}`);
        return false;
      }
    }
    return true; // 모든 조건 통과
  });
}
