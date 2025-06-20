import { getUserBookmarkList } from "./userBookmark.js";
import { getCompanies } from "./renderCalendar.js";
import { _dummyJobPostings, bookmarkData, currentUser } from "./dummyData.js";

export function handleClickDay(e){
  const target = e.target.closest(".calendar-item");
  if (!target) return;
  
  const day = parseInt(target.getAttribute("data-vaule"));
  const userbookmarkedInfo = getUserBookmarkList(currentUser, bookmarkData, _dummyJobPostings);
  const companies = getCompanies(day, userbookmarkedInfo);

  if (companies.length > 1) {
    showCalendarModal(companies);
  }
}

export function showCalendarModal(companies) {
  const calendarModal = document.querySelector("#calendar-modal");
  const companyList = document.querySelector("#company-list");
  const closeBtn = document.querySelector("#modal-close-btn");

  // 기존 정보 지우기
  companyList.innerHTML = '';

  // 회사명 리스트 추가
  companies.forEach(company => {
    const li = document.createElement('li');
    li.textContent = company;
    companyList.appendChild(li);
  });
  
  calendarModal.classList.remove('hidden');

  // 닫기 버튼 클릭 이벤트
  closeBtn.onclick = () => {
    calendarModal.classList.add('hidden');
  };

  // 모달 바깥 클릭 닫기 이벤트
  calendarModal.onclick = (e) => {
    if (e.target === calendarModal) {
      calendarModal.classList.add('hidden');
    }
  };
}