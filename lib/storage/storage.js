import { req } from '../utils/index.js'

const END_POINT = 'http://13.125.72.193:5000/postings'

/**
 * @description 전체 공고를 불러오는 함수
 * @param {void}
 * @returns Promise data(JSON)
 */
export async function getPosting() {
  const response = await req(END_POINT, { mehtod: 'POST' })
  const data = await response.json()
  return data
}

/**
 * @description 유저 아이디로 유저 북마크를 불러오는 함수
 * @param {string} username
 * @returns Promise data(JSON)
 */
export async function getUserBookmarks(username) {
  const response = await req(END_POINT, { mehtod: 'POST', body: JSON.stringify({ username }) })
  const data = await response.json()
  return data
}

// (TODO) : 북마크 불러오기, 유저 메모 불러오기

/**
 * @description 유저 아이디로 유저 메모를 불러오는 함수
 * @param {string} username
 * @returns Promise data(JSON)
 */
export async function getUserMemo(username) {
  const response = await req(END_POINT, { method: 'GET', body: JSON.stringify({ username }) })
  const data = await response.json()
  return data
}

