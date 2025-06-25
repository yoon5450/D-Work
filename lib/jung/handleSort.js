import { toDownSortArray, toUpSortArray, postRender, getSessionStorage } from '../index.js'

let current = 0
export function handleSort(e) {
  e.preventDefault()
  const target = e.target.closest('th')
  let standard = target.id
  if (!standard) return
  if (standard.split('-')[0] === 'score') standard = 'companyscore'
  //SessionKey='D_WORK_SESSION_STORAGE_KEY'
  const data = getSessionStorage()

  const toggleFns = [
    () => {
      target.style.color = 'red'
      return toUpSortArray(data, standard)
    },
    () => {
      target.style.color = 'blue'
      return toDownSortArray(data, standard)
    },
    () => {
      target.style.color = 'black'
      return data
    },
  ]

  const sortedData = toggleFns[current]()
  current = (current + 1) % toggleFns.length

  postRender(sortedData)
}
