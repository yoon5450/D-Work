
// 채용 공고를 테이블에 렌더링하는 함수 
export function renderJobs(jobs) {
    const tbody = document.querySelector('.main-result-table tbody');
    tbody.innerHTML = '';
  
    if (jobs.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8">조건에 맞는 채용 공고가 없습니다.</td></tr>';
      return;
    }
  
    jobs.forEach(job => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${job.company}</td>
        <td>${job.position.join(', ')}</td>
        <td>${job.experience[0]}년 ~ ${job.experience[1]}년</td>
        <td>${job.location.join(', ')}</td>
        <td>${job.type}</td>
        <td>${job.stack.join(', ')}</td>
        <td>${job.companyscore}</td>
        <td>
          <div class="main-table-btn-wrapper">
            <button class="main-table-apply-btn">지원하기</button>
            <button class="main-table-bookmark-btn">관심목록 +</button>
          </div>
        </td>
      `;
      tbody.appendChild(row);
    });
  }