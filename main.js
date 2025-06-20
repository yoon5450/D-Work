import { 
  closeBtn,
  calendarModal,
  calendarModalClose,
  calendarModalCloseAuto,
  renderCalendar, 
  handleClickDay } from "./lib/index.js";
import {
  renderJobs,
  initCareerFilter,
  //dummyJobPostings,
  initJobTypeFilter,
  initPositionFilter,
  initStackFilter,
} from './sung/index.js';
import {
  postRender,
  getNode,
  handleBookmarkBtnClick,
  handleSort,
}from './lib/index.js';
import dummyJobPostings from './lib/data/dummyJobPostingsData.js';


let loginBtn = document.querySelector('#login-btn')
let overlay = document.querySelector('#overlay')
let calendarContainer = document.querySelector('.calendar-container');
const jobPostingData= dummyJobPostings()

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
  init()

  postRender(jobPostingData)
})

loginBtn.addEventListener('click', (e) => {
  overlay.classList.remove('hidden')
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

calendarContainer.addEventListener("click", handleClickDay);
closeBtn.addEventListener("click", calendarModalClose);
calendarModal.addEventListener("click", calendarModalCloseAuto);

function init() {
  renderJobs(dummyJobPostings);
  initCareerFilter(dummyJobPostings);
  initJobTypeFilter(dummyJobPostings);
  initPositionFilter(dummyJobPostings);
  initStackFilter(dummyJobPostings);
}


  //관심공고버튼 클릭 이벤트
getNode('tbody').addEventListener("click",handleBookmarkBtnClick)



//정렬버튼 클릭 이벤트
getNode("thead").addEventListener('click',handleSort);
