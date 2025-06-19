import user from "../data/dummyUserData.js";

// 공고 리스트 템플렛 생성
export function postListTemplate(options,userIndex=0){
    const {
        id,
        company,
        position,
        experience,
        location,
        type,
        stack,
        companyscore
    }=options
    let experienceText=`${experience[0]}~${experience[1]}년`
    if(experience[0]===0){
        experienceText=`신입~${experience[1]}년`
    }
    if(experience[1]===100){
        experienceText=`${experience[0]}년 이상`
    }
    
    let bookmarkBtn='<button class="main-table-bookmark-btn">관심목록 추가</button>'
    if(user()[userIndex].bookmarklist.includes(id)){
        bookmarkBtn=`<button class="main-table-bookmark-btn activate">내 관심 공고</button>`
    }
    
    return `
    <tr data-id="${id}">
              <td>${company}</td>
              <td>${position}</td>
              <td>${experienceText}</td>
              <td>${location}</td>
              <td>${type}</td>
              <td>${stack}</td>
              <td>${companyscore}</td>
              <td>
								<div class="main-table-btn-wrapper">
                  <button class="main-table-apply-btn">지원하기</button>
                  ${bookmarkBtn}
                </div>
            	</td>
            </tr>
    `
}

