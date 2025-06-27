/*
	id: 17,
*	company: "마켓컬리",
*	position: ["데이터 엔지니어"], 
*	stack: ["Kafka", "Spark", "Python"],
	experience: [0, 0] : 신입 [1, 3] : 1년차 ~ 3년차 [3, 100] : 3년 이상 
*	location: ["서울"],
*	type: "정규직",
	companyscore: 4.5,
	endDate: "2025-06-25",
*/

import { isString } from "../index.js";

// 데이터에서 검색 대상 배열을 뽑아내 프로퍼티로 추가한다. 복사 배열을 만드는 것이라 기존 배열에 영향 x
export function dataProcessing(dummyDataArr){
	let newArr = [];

	for (const object of dummyDataArr) {
		let objectKeywords = [];
		for (const key in object) {
			if (!(key == 'company' || key == 'stack'
				|| key == 'position' || key == 'location' || key == 'type'))
				continue ;
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				const element = object[key];
				if (isString(element))
				{
					objectKeywords.push(element.toLowerCase());
				}
				else
				{
					let newElement = [];

					for (const target of element) {
						newElement.push(target.toLowerCase());
					}
					objectKeywords = [...objectKeywords, ...newElement];
				}
			}
		}
		newArr.push({...object, objectKeywords});
	}
	//console.log(newArr);

	return newArr;
}
