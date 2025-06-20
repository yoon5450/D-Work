import dummyJobPostingsData from './lib/data/dummyJobPostingsData.js'
import {
  getNode,
  handleBookmarkBtnClick,
  handleSort,
  postRender,
  signInExecute,
} from './lib/index.js'

import { handleClickDay, loginExecute, renderCalendar } from './lib/index.js'

import {
  dummyJobPostings,
  initCareerFilter,
  initJobTypeFilter,
  initPositionFilter,
  initStackFilter,
  renderJobs,
} from './sung/index.js'

let loginBtn = document.querySelector('#login-btn')
let overlayLoginBtn = document.querySelector('.overlay-btn-login')
const jobPostingData = dummyJobPostingsData()
let calendarContainer = document.querySelector('.calendar-container')
let overlaySignInBtnTo = document.querySelector('.overlay-btn-sign-in-to')
let overlyaSingInBtnSubmit = document.querySelector('.overlay-btn-sign-in-submit')
let overlay = document.querySelector('#overlay')
let overlayForm = document.querySelector('.overlay-form')

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
  postRender(jobPostingData)
  init()
})

overlayForm.addEventListener('submit', (e) =>{
  e.preventDefault();
})

loginBtn.addEventListener('click', (e) => {
  overlay.classList.remove('hidden')
})

overlaySignInBtnTo.addEventListener('click', (e) => {
  e.preventDefault()
  const siginInLayout = document.querySelector('.overlay-form-wrapper-signin')
  siginInLayout.style.top = '50%'
})

overlayLoginBtn.addEventListener('click', loginExecute)

overlyaSingInBtnSubmit.addEventListener('click', signInExecute)

document.getElementById('overlay').addEventListener('click', (e) => {
  e.currentTarget.classList.add('hidden')
})

document.querySelector('.login-modal').addEventListener('click', (e) => {
  e.stopPropagation()
})

document.querySelector('.close-btn').addEventListener('click', (e) => {
  let overlay = document.querySelector('#overlay')
  overlay.classList.add('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar()
})

//관심공고버튼 클릭 이벤트
getNode('tbody').addEventListener('click', handleBookmarkBtnClick)

//정렬버튼 클릭 이벤트
getNode('thead').addEventListener('click', handleSort)

renderCalendar()

calendarContainer.addEventListener('click', handleClickDay)

function init() {
  renderJobs(dummyJobPostings)
  initCareerFilter(dummyJobPostings)
  initJobTypeFilter(dummyJobPostings)
  initPositionFilter(dummyJobPostings)
  initStackFilter(dummyJobPostings)
}
