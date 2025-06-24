// 현재  user 북마크 리스트의 회사명, 마감기한 리스트 가져오는 함수
export function getUserBookmarkList(currentUser, userbookmark, jobList){
  // user목록에서 uesr 찾기
    const user = userbookmark.find((user) => {
        return user.username === currentUser;
    })

    if (!user || !user.bookmarklist || user.bookmarklist.length === 0) {
      return [];
    }
    
    // 현재 user의 북마크 리스트
    const bookmarkList = user.bookmarklist;

    // 북마크 리스트에 있는 채용공고
    const bookmarkedJob = jobList.filter((job) => {
      return bookmarkList.includes(job.id);
    })

    // 채용공고의 회사명, 마감기한
    const bookmarkedInfo = bookmarkedJob.map((bookmarkedjob) => {
      return {
        company: bookmarkedjob.company,
        endDate: bookmarkedjob.endDate
      }
    })
    return bookmarkedInfo;
}