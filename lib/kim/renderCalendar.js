import { getUserBookmarkList } from "./userBookmark.js";
import { currentUser } from "../data/currentUser.js";
import dummyUsers from "../data/dummyUserData.js";
import dummyJobPostings from "../data/dummyJobPostingsData.js";

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
    
    const userbookmarkedInfo = getUserBookmarkList(currentUser, dummyUsers(), dummyJobPostings());

    for(let day = 1; day <= days; day++){
        const companies = getCompanies(day, userbookmarkedInfo);
        calendarContainer.insertAdjacentHTML('beforeend', createDay(day, companies));
    }
}

// 유저, 날짜별 채용 공고 정보 가져오는 함수
export function getCompanies(day ,info){
    const companies = [];
    for(const job of info){
        const endDate = new Date(job.endDate);

        if (
        endDate.getFullYear() === currentYear &&
        endDate.getMonth() + 1 === currentMonth &&
        endDate.getDate() === day
        ) {
        companies.push(job.company);
      }
    }
    return companies;
}

// 그 달의 날짜 가져오는 함수
export function getDays(currentYear, currentMonth){
    const days = new Date(currentYear, currentMonth, 0).getDate();
    return days;
}

// 날짜 요소 만드는 함수
export function createDay(day, companies){
    let companyList = companies
      ? companies.map(c => `<div class="date-info" >${c}</div>`).join('')
      : '';
    if(companies.length > 1){
        companyList = `<div class="date-info">${companies[0]}<div class="date-info-add">+${companies.length - 1}</div></div>`;
    }
    return `
        <div class="calendar-item" data-value="${day}">
          ${day}
          ${companyList}
        </div>
    `;
}
