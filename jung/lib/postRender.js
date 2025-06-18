import { 
    getNode, 
    postListTemplate, 
    insertLast,
    clearContents,
    
} from './index.js';


//공고 리스트 렌더
//postDataArrat=[{},{},...,{}]
export function postRender(postDataArray){
    //렌더할 노드 선택
    const tbody= getNode('tbody')

    // postDataArray를 템플릿에 맞춰 string으로 변환
    let postHtml='';
    postDataArray.forEach((e)=>postHtml +=postListTemplate(e))

    //관심공고나 필터링한 데이터 렌더를 위한 항목 비우기
    clearContents(tbody)

    //데이터 뿌리기
    insertLast(tbody,postHtml)
        
}

