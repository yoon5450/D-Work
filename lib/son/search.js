import { getNode, isString } from '../index.js'
import { dummyJobPostings } from './dummyData.js';
import { dataProcessing } from './dataProcess.js';

const searchForm = getNode('.search-form');
const searchText = getNode('#search-text');
console.log(searchForm);

let searchWord;
let data = [];

window.addEventListener('load', () => {
	data = dataProcessing(dummyJobPostings); //처음 페이지 로딩될 때 실행하기
})

function isEmpty(input){
	if (input == '' || input.replaceAll(' ', '') === '')
		return true;
	else
		return false;
}

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	if (isEmpty(searchText.value))
		return ;

	searchWord = searchText.value.toLowerCase().split(' ');
	console.log('검색어 : ');
	console.log(searchWord);
	findKeyWord(data, searchWord);
})



function findKeyWord(dataArr, targetArr){
	let searchResult = [];
	
	for (const object of dataArr) {
		const isMatch = (targetArr.every(element => {
			return	object['objectKeywords'].some(objKeyWord => 
				objKeyWord.includes(element));
		}));
		
		if (isMatch)
			searchResult.push(object);
	}

	console.log('검색 결과 : ');
	console.log(searchResult);
}

/*
	검색 알고리즘

	검색 대상 프로퍼티
	- company
	- position
	- stack
	- location
	- type
	여러 객체의 대상 프로퍼티 값을 순회하면서 검색 대상과 일치하는 지 확인한다.
	Q. 검색어가 여러 개일 경우에는 어떻게 할까? 
 */

