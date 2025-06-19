import {
  postRender,
  getNode,
  handleBookmarkBtnClick,
  handleSort,
  
} from './lib/index.js';

import dummyJobPostings from './lib/data/dummyJobPostingsData.js';

/*
1. 데이터 가져와서 데이터 선언하기
2. 템플렛({company,position,stack,experience,location,type})
3. render(){postListTemplate()}
4. 오름차순 내림차순 정렬
    - makeSortList(정렬기준){}
    - data.entries [id: value],[정렬기준:value]
    - 새로운 데이터 배열 만들기 id value 에 정렬기준 value
    - 새로운 데이터 배열 오름차순 내림차순 생성
    - 해당 배열들을 이용해서 render
5. 관심공고 버튼 클릭 이벤트
6. 정렬기준 선택 클릭 이벤트

페이지 전환
    -SPA
*/


const data= dummyJobPostings()
// console.log(data);

//관심공고버튼 클릭 이벤트
getNode('tbody').addEventListener("click",handleBookmarkBtnClick)

//첫화면
window.addEventListener('load',postRender(data));



//정렬버튼 클릭 이벤트
getNode("thead").addEventListener('click',handleSort);