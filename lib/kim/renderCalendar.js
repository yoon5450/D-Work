import { getUserBookmarkList } from "./userBookmark.js";
import { getCompanies, getDays } from "./getInfo.js";
import { getCurrentUser } from "../data/currentUser.js";
import dummyUsers from "../data/dummyUserData.js";
import { getPosting } from "../storage/storage.js";

export let currentYear = new Date().getFullYear();
export let currentMonth = new Date().getMonth() + 1;

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
async function renderDay(currentYear, currentMonth){
    let postingResponse = await getPosting();
    let postings = postingResponse.postings;
    const calendarContainer = document.querySelector(".calendar-container");
    calendarContainer.innerHTML = '';

    const days = getDays(currentYear, currentMonth);
  
    // 유저 북마크 리스트의 회사명, 마감기한 전체
    const userbookmarkedInfo = getUserBookmarkList(getCurrentUser(), dummyUsers(), postings);

    for(let day = 1; day <= days; day++){
        // 날짜 별 유저 북마크 회사명
        const companies = getCompanies(day, userbookmarkedInfo);
        calendarContainer.insertAdjacentHTML('beforeend', createDay(day, companies));
    }
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