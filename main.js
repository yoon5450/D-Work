import { renderCalendar } from "./kim/lib/renderCalendar.js";
import {
  postRender,
  getNode,
  handleBookmarkBtnClick,
  handleSort,
}from './lib/index.js';
import dummyJobPostings from './lib/data/dummyJobPostingsData.js';

import dummyJobPostings from "./jung/data/dummyJobPostingsData.js";


let loginBtn = document.querySelector('#login-btn')
let overlay = document.querySelector('#overlay')
const jobPostingData= dummyJobPostings()

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
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

  //관심공고버튼 클릭 이벤트
getNode('tbody').addEventListener("click",handleBookmarkBtnClick)



//정렬버튼 클릭 이벤트
getNode("thead").addEventListener('click',handleSort);
