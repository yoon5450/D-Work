import { END_POINT, req } from '../index.js';

/**
 * @description 전체 북마크를 불러오는 함수
 * @param {string} username
 * @returns Promise data(JSON)
 */
export async function getMyBookmarks(username){
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 보내는 데이터 타입
        },
        body: JSON.stringify({ username, postingid }),
      }
    
      return await req(`${END_POINT}/mybookmarks`, options)
}

/**
 * @description 유저 데이터에 북마크를 추가하는 함수
 * @param {string} username
 * @param {number} postingid
 * @returns Promise data(JSON)
 */
export async function addBookmark(username, postingid){
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 보내는 데이터 타입
        },
        body: JSON.stringify({ username, postingid }),
      }
    
      return await req(`${END_POINT}/addbookmark`, options)
}

/**
 * @description 유저 데이터의 북마크를 삭제하는 함수
 * @param {string} username
 * @param {number} postingid
 * @returns Promise data(JSON)
 */
export async function deleteBookmark(username, postingid){
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 보내는 데이터 타입
        },
        body: JSON.stringify({ username, postingid }),
      }
    
      return await req(`${END_POINT}/removebookmark`, options)
}
