import { renderCalendar, handleClickDay } from "./lib/index.js";
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
let calendarContainer = document.querySelector('.calendar-container');

window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
init()

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

function init() {
  renderJobs(dummyJobPostings);
  initCareerFilter(dummyJobPostings);
  initJobTypeFilter(dummyJobPostings);
  initPositionFilter(dummyJobPostings);
  initStackFilter(dummyJobPostings);
}
