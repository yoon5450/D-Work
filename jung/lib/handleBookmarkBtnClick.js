import dummyJobPostings from '../data/dummyJobPostingsData.js';
import dummyUserData from '../data/dummyUserData.js';


//원본훼손문제
//유저 데이터 어케 가지고옴?


const data= dummyJobPostings()
const userData = dummyUserData()

function addBookmark(userIndex=0, id){
  userData[userIndex].bookmarklist.push(id)
  //userBoolmarkList가 훼손되는데... 근데 지금으로는 이렇게 안하면 추가가 안되요
  /*
  나중에 데이터에서 get/set한다면
  let copy=[...userData[userIndex].bookmarklist]
  set copy.push(id)
  */
  return userData[userIndex].bookmarklist
}

function removeBookmark(userIndex=0,id){
  /*
  const userBookmarkList=userData[userIndex].bookmarklist
  let updated= userBookmarkList.filter((num)=>num!==id);
  */
    //이것도 원본훼손
    const index = userData[userIndex].bookmarklist.indexOf(id);
    if (index !== -1) {
  userData[userIndex].bookmarklist.splice(index, 1); // index부터 1개 삭제
    }

  return userData[userIndex].bookmarklist
}


function getPostId(e){
  const target= e.target.closest('.main-table-bookmark-btn')
  return target.closest('tr').dataset.id;
}

export function handleBookmarkBtnClick(e){
  e.preventDefault();
  const id=+getPostId(e);
  let userIndex=0; //유저데이터 인덱스 어떻게 가져와요?
  let target=e.target.closest('.main-table-bookmark-btn')||e.target.closest('.main-table-bookmark-btn activate')
  
  if(!(userData[userIndex].bookmarklist.includes(id))){
    addBookmark(userIndex,id);
    target.classList.add('activate');
    target.textContent='내 관심 공고'
    
  }else if(userData[userIndex].bookmarklist.includes(id)){
    removeBookmark(userIndex,id);
    target.classList.remove('activate');
    target.textContent='관심목록 추가'
  }
}