
import dummyUserData from '../data/dummyUserData.js';
import { getStorage, setStorage } from '../utils/storage.js';


//원본훼손문제
//유저 데이터 어케 가지고옴?

const userData = dummyUserData()
setStorage(userData)


function addBookmark(userIndex=0, id){
  // userData[userIndex].bookmarklist.push(id)
  //userBoolmarkList가 훼손되는데... 근데 지금으로는 이렇게 안하면 추가가 안되요
  const data = getStorage();
  let userBookmarklist = data[userIndex].bookmarklist;
  if (!userBookmarklist.includes(id)) {
    userBookmarklist.push(id);
  }
  setStorage(data);
}

function removeBookmark(userIndex=0,id){
  
  const data = getStorage();
  let userBookmarklist = data[userIndex].bookmarklist;

  data[userIndex].bookmarklist = userBookmarklist.filter((num) => num !== id);

  setStorage(data);
}


function getPostId(e){
  const target= e.target.closest('.main-table-bookmark-btn')
  return target.closest('tr').dataset.id;
}

export function handleBookmarkBtnClick(e){
  e.preventDefault();
  const id=+getPostId(e);
  let userIndex=0; //유저데이터 인덱스 어떻게 가져와요?
  let target=e.target.closest('.main-table-bookmark-btn')
  
  const currentData = getStorage();
  console.log(currentData);
  
  if(!(currentData[userIndex].bookmarklist.includes(id))){
    addBookmark(userIndex,id);
    target.classList.add('activate');
    target.textContent='내 관심 공고'
    
  }else if(currentData[userIndex].bookmarklist.includes(id)){
    removeBookmark(userIndex,id);
    target.classList.remove('activate');
    target.textContent='관심목록 추가'
  }
}