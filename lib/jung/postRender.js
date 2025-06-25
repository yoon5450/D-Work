import {
  getNode,
  postListTemplate,
  insertLast,
  clearContents,
  getUserSessionStorage,
  getMyBookmarks,
} from '../index.js'

//공고 리스트 렌더
//postDataArray=[{},{},...,{}]
export async function postRender(postDataArray, username = getUserSessionStorage()) {
  const response = await getMyBookmarks(username)
  const bookmarkData = await response.json()
  const myBookmarklist = bookmarkData.bookmarklist
  console.log(' ')
  console.log(myBookmarklist)

  //렌더할 노드 선택
  const tbody = getNode('tbody')

  let postHtml = await Promise.all(
    postDataArray.map((e) => {
      const isBookmarked = myBookmarklist.includes(e.id)
      return postListTemplate(e, isBookmarked)
    })
  )

  //관심공고나 필터링한 데이터 렌더를 위한 항목 비우기
  clearContents(tbody)

  //데이터 뿌리기
  insertLast(tbody, postHtml.join(''))
}
