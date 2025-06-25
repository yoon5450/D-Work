import { req } from '../utils/index.js'

const END_POINT = 'http://13.125.72.193:5000'

/**
 * @description 전체 공고를 불러오는 함수
 * @param {void}
 * @returns Promise data(JSON)
 */
export async function getPosting() {
  const response = await req(`${END_POINT}/postings`, { mehtod: 'POST' })
  const data = await response.json()
  return data
}

  /* 
     req(requestPromise.js)는 fetch를 이용해 서버에 요청
     해당 서버에서 응답은 JSON 데이터 반환
     {
      "result": "success",
      "postings": [
        {
          "id": 1,
          "company": "카카오엔터프라이즈",
          "position": ["백엔드 개발자"],
          "stack": ["Java", "Spring", "MySQL"],
          "experience": [0, 2],
          "type": "정규직",
          "location": ["판교"],
          ...
        },
        ...
      ]
    }
    거기서 return data.postings; 는 해당 JOSN 데이터에 postings의 안에 있는
    20개의 채용 공고 객체가 있는 배열 반환
    [
      { id: 1, company: '카카오', ... },
      { id: 2, company: '네이버', ... },
      ...
      { id: 20, company: '쏘카', ... }
    ]
  */

export async function getPostingsOnly() {
  const response = await req(`${END_POINT}/postings`, { method: 'GET' });
  const data = await response.json();
  console.log('원본 서버 응답:', data);
  console.log('data.postings:', data.postings);

  return data.postings;
}

/**
 * @description 유저 아이디로 유저 북마크를 불러오는 함수
 * @param {string} username
 * @returns Promise data(JSON)
 */
export async function getUserBookmarks(username) {
  const response = await req(`${END_POINT}/mybookmarks`, { mehtod: 'POST', body: JSON.stringify({ username }) })
  const data = await response.json()
  return data
}

/**
 * @description 유저 아이디로 유저 메모를 불러오는 함수
 * @param {string} username
 * @returns Promise data(JSON)
 */
export async function getUserMemo(username) {
  const response = await req(`${END_POINT}/memos`, { method: 'GET', body: JSON.stringify({ username }) })
  const data = await response.json()
  return data
}

getPosting()
.then((data) =>{
  console.log(data);
})

