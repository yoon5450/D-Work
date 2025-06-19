import {
  renderJobs,
  initCareerFilter,
  dummyJobPostings,
  initJobTypeFilter,
  initPositionFilter,
  initStackFilter,
} from './sung/index.js';

let loginBtn = document.querySelector('#login-btn')
let overlay = document.querySelector('#overlay')

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
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


// 1. 초기 렌더링 함수 (앱이 시작될 때 실행됨)
function init() {
  renderJobs(dummyJobPostings);      
  initCareerFilter(dummyJobPostings);
  initJobTypeFilter(dummyJobPostings);
  initPositionFilter(dummyJobPostings);
  initStackFilter(dummyJobPostings);
}

init()