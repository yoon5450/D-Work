import user from '../data/dummyUserData.js'
import { getMyBookmarks } from '../api/bookmark.js'
import { getUserSessionStorage } from '../storage/sessionStorage.js'
import { postRender } from './index.js'

// 공고 리스트 템플렛 생성
export async function postListTemplate(options, username = getUserSessionStorage()) {
  const { id, company, position, experience, location, type, stack, companyscore } = options
  let experienceText = `${experience[0]}~${experience[1]}년`
  if (experience[0] === 0) {
    experienceText = `신입~${experience[1]}년`
  }
  if (experience[1] === 100) {
    experienceText = `${experience[0]}년 이상`
  }

  async function myBookmark(username) {
    const response = await getMyBookmarks(username)
    const data = await response.json()
    let bookmarkBtn = ''
    if (data.bookmarklist.includes(id)) {
      bookmarkBtn = `<button class="main-table-bookmark-btn activate">내 관심 공고</button>`
    }
    if (!data.bookmarklist.includes(id)) {
      bookmarkBtn = '<button class="main-table-bookmark-btn">관심목록 +</button>'
    }
    return bookmarkBtn
  }
  let _bookmark = await myBookmark(username)
  console.log(typeof _bookmark)

  //   if (myBookmark.bookmarklist.includes(id)) {
  //     bookmarkBtn = `<button class="main-table-bookmark-btn activate">내 관심 공고</button>`
  //   }
  //   if (!myBookmark.bookmarklist.includes(id)) {
  //     bookmarkBtn = '<button class="main-table-bookmark-btn">관심목록 +</button>'
  //   }

  let template = `
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
                  ${_bookmark}
                </div>
            	</td>
            </tr>
    `

  return template
}

/*
function postListTemplate(){
    
    return 
}*/
