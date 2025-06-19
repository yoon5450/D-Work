import { req } from '../utils/index.js'

const DEFAULT_LINK = 'http://13.125.72.193:5000/postings'

/**
 *
 * @returns Promise data
 */
export async function getPosting() {
  const response = await req(DEFAULT_LINK, { mehtod: 'POST' })
  const data = await response.json()
  return data
}


/**
 * 
 * @param {string} username 
 * @returns Promise data
 */
export async function getUserBookmarks(username) {
  const response = await req(DEFAULT_LINK, { mehtod: 'POST' , body:JSON.stringify({username})})
  const data = await response.json()
  return data
}
