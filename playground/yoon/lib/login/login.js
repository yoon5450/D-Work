
let data = {id: 17,
company: "마켓컬리",
position: ["데이터 엔지니어"], 
stack: ["Kafka", "Spark", "Python"],
experience: [0, 0],
location: ["서울"],
type: "정규직",
companyscore: 4.5,
endDate: "2025-06-25",
}

data = JSON.stringify(data);
console.log(JSON.parse(data));
