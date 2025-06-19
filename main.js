import { renderCalendar, handleClickDay } from "./lib/index.js";

let loginBtn = document.querySelector('#login-btn')
let overlay = document.querySelector('#overlay')
let calendarContainer = document.querySelector('.calendar-container');

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

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
})

calendarContainer.addEventListener("click", handleClickDay);