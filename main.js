import { renderCalendar } from "./kim/lib/renderCalendar.js";
import { reqLogin, reqSignIn } from "./lib/index.js";

let loginBtn = document.querySelector('#login-btn')
let overlayLoginBtn = document.querySelector('.overlay-btn-login')
let overlayUsernameInput = document.querySelector('#overlay-username');
let overlayUserpassInput = document.querySelector('#overlay-userpass');
let overlay = document.querySelector('#overlay')


window.addEventListener('load', (e) => {
  overlay.classList.add('hidden')
})

loginBtn.addEventListener('click', (e) =>{
  overlay.classList.remove('hidden')
})

overlayLoginBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const username = overlayUsernameInput;
  const pass = overlayUserpassInput;
  let response = await reqLogin(username, pass)
  console.log(response.msg)
  
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