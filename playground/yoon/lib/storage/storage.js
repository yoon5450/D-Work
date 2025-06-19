import { req } from '../util'

const DEFAULT_LINK = 'http://13.125.72.193:5000/postings'

export async function getPosting() {
  const response = await req(DEFAULT_LINK, {mehtod:'POST'})
  const data = await response.json()
  return data
}
