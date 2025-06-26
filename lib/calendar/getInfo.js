import { currentYear, currentMonth } from "./renderCalendar.js";

// 유저, 날짜별 채용 공고 회사 정보 가져오는 함수
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