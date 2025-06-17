let loginBtn = document.querySelector("#login-btn");
let overlay = document.querySelector("#overlay");

const dummyJobPostings = [
  {
    id: 1,
    company: "카카오엔터프라이즈",
    position: "프론트엔드 개발자",
    stack: ["JavaScript", "React", "TypeScript"],
    experience: "신입~3년",
    location: "판교",
    type: "정규직",
  },
  {
    id: 2,
    company: "네이버",
    position: "백엔드 개발자",
    stack: ["Java", "Spring", "MySQL"],
    experience: "3년 이상",
    location: "분당",
    type: "정규직",
  },
  {
    id: 3,
    company: "배달의민족",
    position: "데이터 엔지니어",
    stack: ["Python", "Airflow", "SQL"],
    experience: "1~5년",
    location: "서울 송파",
    type: "정규직",
  },
  {
    id: 4,
    company: "당근마켓",
    position: "모바일 앱 개발자",
    stack: ["Kotlin", "Android", "MVVM"],
    experience: "2~6년",
    location: "서울 서초",
    type: "정규직",
  },
  {
    id: 5,
    company: "토스",
    position: "시니어 풀스택 엔지니어",
    stack: ["Node.js", "React", "GraphQL"],
    experience: "5년 이상",
    location: "서울 강남",
    type: "정규직",
  },
  {
    id: 6,
    company: "라인플러스",
    position: "DevOps 엔지니어",
    stack: ["AWS", "Terraform", "Docker"],
    experience: "3~7년",
    location: "성남",
    type: "정규직",
  },
  {
    id: 7,
    company: "무신사",
    position: "프론트엔드 개발자",
    stack: ["Vue.js", "TypeScript", "SCSS"],
    experience: "1~4년",
    location: "서울 성동",
    type: "정규직",
  },
  {
    id: 8,
    company: "야놀자",
    position: "AI 엔지니어",
    stack: ["Python", "PyTorch", "NLP"],
    experience: "석사 또는 3년 이상",
    location: "서울 강남",
    type: "정규직",
  },
  {
    id: 9,
    company: "NHN",
    position: "보안 엔지니어",
    stack: ["Linux", "Firewall", "SIEM"],
    experience: "2~5년",
    location: "성남",
    type: "계약직",
  },
  {
    id: 10,
    company: "우아한형제들",
    position: "테크 리드",
    stack: ["Java", "Kubernetes", "Spring Cloud"],
    experience: "7년 이상",
    location: "서울 송파",
    type: "정규직",
  },
  {
    id: 11,
    company: "리디북스",
    position: "웹 퍼블리셔",
    stack: ["HTML", "CSS", "JavaScript"],
    experience: "신입~2년",
    location: "서울 마포",
    type: "정규직",
  },
  {
    id: 12,
    company: "직방",
    position: "백엔드 개발자",
    stack: ["Node.js", "Express", "MongoDB"],
    experience: "2~5년",
    location: "서울 강남",
    type: "정규직",
  },
  {
    id: 13,
    company: "스노우",
    position: "영상 처리 엔지니어",
    stack: ["OpenCV", "C++", "Python"],
    experience: "3년 이상",
    location: "성남 분당",
    type: "정규직",
  },
  {
    id: 14,
    company: "왓챠",
    position: "데이터 분석가",
    stack: ["Python", "SQL", "Tableau"],
    experience: "1~4년",
    location: "서울 강남",
    type: "정규직",
  },
  {
    id: 15,
    company: "비바리퍼블리카",
    position: "보안 담당자",
    stack: ["Security", "SIEM", "Linux"],
    experience: "4년 이상",
    location: "서울 강남",
    type: "정규직",
  },
  {
    id: 16,
    company: "크몽",
    position: "프론트엔드 개발자",
    stack: ["React", "Next.js", "Redux"],
    experience: "2~6년",
    location: "서울 성수",
    type: "정규직",
  },
  {
    id: 17,
    company: "마켓컬리",
    position: "데이터 엔지니어",
    stack: ["Kafka", "Spark", "Python"],
    experience: "3~6년",
    location: "서울 성수",
    type: "정규직",
  },
  {
    id: 18,
    company: "KT",
    position: "클라우드 플랫폼 엔지니어",
    stack: ["GCP", "Kubernetes", "Go"],
    experience: "5년 이상",
    location: "서울 광화문",
    type: "정규직",
  },
  {
    id: 19,
    company: "LG CNS",
    position: "백엔드 개발자",
    stack: ["Java", "Spring Boot", "Oracle"],
    experience: "3년 이상",
    location: "서울 여의도",
    type: "정규직",
  },
  {
    id: 20,
    company: "쏘카",
    position: "모바일 앱 개발자",
    stack: ["Swift", "iOS", "MVVM"],
    experience: "1~3년",
    location: "서울 마포",
    type: "정규직",
  },
];

loginBtn.addEventListener("click", (e) => {
  overlay.classList.remove("hidden");
});

document.getElementById("overlay").addEventListener("click", (e) => {
  e.currentTarget.classList.add("hidden");
});

document.querySelector(".login-modal").addEventListener("click", (e) => {
  e.stopPropagation();
});

document.querySelector(".close-btn").addEventListener("click", (e) => {
  let overlay = document.querySelector("#overlay");
  overlay.classList.add("hidden");
});

document.querySelector('#search-btn').addEventListener("click", (e) =>{
    
})

function searchFunction(query = null, searchFilter = null){

}