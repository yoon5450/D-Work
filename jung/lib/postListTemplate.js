

// 공고 리스트 템플렛 생성
export function postListTemplate(options){
    const {
        company,
        position,
        experience,
        location,
        type,
        stack,
        companyscore
    }=options
    return `
    <tr data-id="${id}">
              <td>${company}</td>
              <td>${position}</td>
              <td>${experience}</td>
              <td>${location}</td>
              <td>${type}</td>
              <td>${stack}</td>
              <td>${companyscore}</td>
              <td>
								<div class="main-table-btn-wrapper">
                  <button class="main-table-apply-btn">지원하기</button>
                  <button class="main-table-bookmark-btn">관심목록 추가</button>
                </div>
            	</td>
            </tr>
    `
}

