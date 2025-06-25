import { END_POINT, req } from '../index.js'

/**
 * @description 전체 북마크를 불러오는 함수
 * @param {string} username
 * @returns Promise response
 */
export async function getMyBookmarks(username) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    }

    return await req(`${END_POINT}/mybookmarks`, options)
  } catch (err) {
    console.error(`getMyBookmarks API 호출 실패: ${err.message}`)
    throw err
  }
}

/**
 * @description 유저 데이터에 북마크를 추가하는 함수
 * @param {string} username
 * @param {number} postingid
 * @returns Promise response
 */
export async function addBookmark(username, postingid) {
  try {
    if (!username || !postingid) throw new Error('username과 postingid는 필수 입력값입니다.')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, postingid }),
    }

    return await req(`${END_POINT}/addbookmark`, options)
  } catch (err) {
    console.error(`addBookmark API 호출 실패: ${err.message}`)
    throw err
  }
}

/**
 * @description 유저 데이터의 북마크를 삭제하는 함수
 * @param {string} username
 * @param {number} postingid
 * @returns Promise data(JSON)
 */
export async function deleteBookmark(username, postingid) {
  try {
    if (!username || !postingid) throw new Error('username과 postingid는 필수 입력값입니다..')

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, postingid }),
    }

    return await req(`${END_POINT}/removebookmark`, options)
  } catch (err) {
    console.error(`deleteBookmark API 호출 실패: ${err.message}`)
    throw err
  }
}
