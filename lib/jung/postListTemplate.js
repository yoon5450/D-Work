import user from '../data/dummyUserData.js'
import { getMyBookmarks } from '../api/bookmark.js'
import { getUserSessionStorage } from '../storage/sessionStorage.js'
import { postRender } from './index.js'

// 공고 리스트 템플렛 생성
export async function postListTemplate(options, isBookmarked = false) {
  const { id, company, position, experience, location, type, stack, companyscore } = options
  let experienceText = `${experience[0]}~${experience[1]}년`
  if (experience[0] === 0) {
    experienceText = `신입~${experience[1]}년`
  }
  if (experience[1] === 100) {
    experienceText = `${experience[0]}년 이상`
  }

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
                  <button class="main-table-bookmark-btn ${isBookmarked ? 'activate' : ''}">${isBookmarked ? '내 관심 공고' : '관심목록 +'}</button>
                </div>
            	</td>
            </tr>
    `

  return template
}
