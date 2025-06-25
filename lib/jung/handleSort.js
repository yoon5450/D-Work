// import dummyJobPostings from '../data/dummyJobPostingsData.js';
import { toDownSortArray, toUpSortArray, postRender } from '../index.js'
import { getSessionStorage } from '../storage/index.js'

let current = 0
export function handleSort(e) {
  e.preventDefault()
  const target = e.target.closest('th')
  let standard = target.id.split('-')[0]
  if (!standard) return
  //SessionKey='D_WORK_SESSION_STORAGE_KEY'
  const data = getSessionStorage()

  const toggleFns = [
    () => toUpSortArray(data, standard),
    () => toDownSortArray(data, standard),
    () => data,
  ]

  const sortedData = toggleFns[current]()
  current = (current + 1) % toggleFns.length

  postRender(sortedData)
}
