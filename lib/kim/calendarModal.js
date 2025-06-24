import { getUserBookmarkList } from "./userBookmark.js";
import { getCompanies } from "./getInfo.js";
import { getCurrentUser } from "../data/currentUser.js";
import dummyUsers from "../data/dummyUserData.js";
import { getPosting } from "../storage/storage.js";

const calendarModal = document.querySelector("#calendar-modal");
const closeBtn = document.querySelector("#modal-close-btn");

// 날짜 클릭 시 모달 함수
export async function handleClickDay(e){
  let postingResponse = await getPosting();
  let postings = postingResponse.postings;

  const target = e.target.closest(".calendar-item");
  if (!target) return;
  
  const day = parseInt(target.dataset.value);
  const userbookmarkedInfo = getUserBookmarkList(getCurrentUser(), dummyUsers(), postings);
  const companies = getCompanies(day, userbookmarkedInfo);

  showCalendarModal(companies);
}

// 모달 보이기 함수
export function showCalendarModal(companies) {
  const companyList = document.querySelector("#company-list");

  // 기존 정보 지우기
  companyList.innerHTML = '';

  // 회사명 리스트 추가
  companies.forEach(company => {
    const li = document.createElement('li');
    li.textContent = company;
    companyList.appendChild(li);
  });
  
  calendarModal.classList.remove('hidden');
}

// 닫기 버튼 클릭 함수
function handleCloseButton(){
  calendarModal.classList.add('hidden');
}

// 모달 바깥 클릭 닫기 함수
function handleCloseOutside(e){
  if (e.target === calendarModal) {
    calendarModal.classList.add('hidden');
  }
}

// 닫기 버튼 클릭 이벤트
closeBtn.addEventListener('click', handleCloseButton);

// 모달 바깥 클릭 닫기 이벤트
calendarModal.addEventListener('click', handleCloseOutside);