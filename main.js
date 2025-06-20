import {
  postRender,
  getNode,
  handleBookmarkBtnClick,
  handleSort,
}from './lib/index.js';
import dummyJobPostings from './lib/data/dummyJobPostingsData.js';

import { renderCalendar, handleClickDay, loginExecute } from './lib/index.js'
import {
  renderJobs,
  initCareerFilter,
  dummyJobPostings,
  initJobTypeFilter,
  initPositionFilter,
  initStackFilter,
} from './sung/index.js'

let loginBtn = document.querySelector('#login-btn')
let overlayLoginBtn = document.querySelector('.overlay-btn-login')
let overlay = document.querySelector('#overlay')
const jobPostingData= dummyJobPostings()
let calendarContainer = document.querySelector('.calendar-container')
let overlaySignInBtnTo = document.querySelector('.overlay-btn-sign-in-to')

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
  postRender(jobPostingData)
  init()
})

loginBtn.addEventListener('click', (e) =>{
  overlay.classList.remove('hidden')
})

overlaySignInBtnTo.addEventListener('click', (e) => {
  e.preventDefault()
  const siginInLayout = document.querySelector('.overlay-form-wrapper-signin')
  siginInLayout.style.top = '50%'
})

overlayLoginBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loginExecute()
  overlay.classList.add('hidden')
})

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
  renderCalendar();
})

  //관심공고버튼 클릭 이벤트
getNode('tbody').addEventListener("click",handleBookmarkBtnClick)



//정렬버튼 클릭 이벤트
getNode("thead").addEventListener('click',handleSort);

  renderCalendar()
})

calendarContainer.addEventListener('click', handleClickDay)

function init() {
  renderJobs(dummyJobPostings)
  initCareerFilter(dummyJobPostings)
  initJobTypeFilter(dummyJobPostings)
  initPositionFilter(dummyJobPostings)
  initStackFilter(dummyJobPostings)
}
