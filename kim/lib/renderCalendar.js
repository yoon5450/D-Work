let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;

const prevMonthBtn = document.querySelector("#prev-month-btn");
const nextMonthBtn = document.querySelector("#next-month-btn");

// 캘린더 전체 렌더링
export function renderCalendar(){
    renderHeader();
    renderDay(currentYear, currentMonth);
}

// 캘린더 헤더 렌더링
function renderHeader(){
    const calendarHeader = document.querySelector(".calendar-header");
    const monthText = calendarHeader.querySelector("span");

    monthText.textContent = `${currentMonth}월, ${currentYear}`;
}

// 캘린더 왼쪽 버튼 클릭 이벤트
prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if(currentMonth < 1){
        currentYear--;
        currentMonth = 12;
    } 
    renderCalendar();
});

// 캘린더 오른쪽 버튼 클릭 이벤트
nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if(currentMonth > 12){
        currentYear++;
        currentMonth = 1;
    }
    renderCalendar();
});

// 캘린더 날짜 렌더링
function renderDay(currentYear, currentMonth){
    const calendarContainer = document.querySelector(".calendar-container");
    calendarContainer.innerHTML = '';

    const days = getDays(currentYear, currentMonth);

    for(let day = 1; day <= days; day++){
        calendarContainer.insertAdjacentHTML('beforeend', createDay(day));
    }
}

// 그 달의 날짜 가져오는 함수
function getDays(currentYear, currentMonth){
    const days = new Date(currentYear, currentMonth, 0).getDate();
    return days;
}

// 날짜 요소 만드는 함수
function createDay(day){
  return `
    <div class="calender-item">
      ${day}
    </div>
  `;
}