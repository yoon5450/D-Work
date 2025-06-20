

export function showAlertWeed(message, warn = false) {
  const alertBox = document.querySelector('.alert-message')
  if (warn) {
    alertBox.style.backgroundColor = '#FFA726'
  } else {
    alertBox.style.backgroundColor = '#4CAF50'
  }
  
  alertBox.textContent = message
  alertBox.style.display = 'block'
  alertBox.style.opacity = '1'

  setTimeout(() => {
    alertBox.style.opacity = '0'
  }, 2000) // 2초 후 사라지기 시작

  setTimeout(() => {
    alertBox.style.display = 'none'
  }, 2500) // 사라지는 애니메이션 마무리 후 display 제거
}
