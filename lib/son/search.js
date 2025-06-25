import { getNode, dataProcessing, getPosting, getSessionStorage, setSessionStorage, postRender } from '../index.js'

const searchForm = getNode('.search-form');
const searchText = getNode('#search-text');
const mainLogo = getNode('.main-header-title');

let searchWord;

window.addEventListener('load', () => {
	(async () => {
		const response = await getPosting();	
		if (response.result === 'success'){
			
			setSessionStorage(dataProcessing(response.postings));
		}
		else
			console.error('Posting download error!');
	})();
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
	// postRender(findKeyWord(data, searchWord));
	postRender(findKeyWord(getSessionStorage(), searchWord));
})

mainLogo.addEventListener('click', () => {
	searchText.value = '';
	postRender(getSessionStorage());
})


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
	return (searchResult);
}
