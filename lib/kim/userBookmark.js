export function getUserBookmarkList(currentUser, userbookmark, jobList){
    const user = userbookmark.find((user) => {
        return user.username === currentUser;
    })

    const bookmarkList = user.bookmarklist;

    const bookmarkedJob = jobList.filter((job) => {
      return bookmarkList.includes(job.id);
    })

    const bookmarkedInfo = bookmarkedJob.map((bookmarkedjob) => {
      return {
        company: bookmarkedjob.company,
        endDate: bookmarkedjob.endDate
      }
    })
    return bookmarkedInfo;
}