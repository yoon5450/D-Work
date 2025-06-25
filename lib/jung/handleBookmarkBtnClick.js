import { getCurrentUser } from '../data/currentUser.js'
import { getMyBookmarks, addBookmark, deleteBookmark } from '../api/index.js'
import { getAttr } from '../dom/attr.js'

function getPostId(e) {
  if (e.target.tagName === 'BUTTON') {
    const target = e.target.closest('.main-table-bookmark-btn')
    const id = getAttr(target.closest('tr'), 'data-id')
    return +id
  }
}

export function handleBookmarkBtnClick(e) {
  e.preventDefault()
  const id = getPostId(e)
  console.log(id)
  if (!id) return
  //getCurrentUser() -> get session user name()??으로 교체 필요
  let currentUser = getCurrentUser()
  let target = e.target.closest('.main-table-bookmark-btn')

  //username이 developer일때, username='yoon'으로 두기
  if (currentUser === 'developer') currentUser = 'yoon'

  getMyBookmarks(currentUser)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      if (!data.bookmarklist.includes(id)) {
        addBookmark(currentUser, id)
        target.classList.add('activate')
        target.textContent = '내 관심 공고'
      } else if (data.bookmarklist.includes(id)) {
        deleteBookmark(currentUser, id)
        target.classList.remove('activate')
        target.textContent = '관심목록 추가'
      }
    })
}
