import dummyJobPostings from '../data/dummyJobPostingsData.js';
import { toDownSortArray, toUpSortArray, postRender, applyAllFilters, filterState } from '../index.js'



let current=0;
export function handleSort(e){
  e.preventDefault();
  const target = e.target.closest("th");
  let standard=target.id
  if(!standard) return;
  
  // const data=dummyJobPostings()
  const filtered = applyAllFilters(dummyJobPostings());
    // 필터링된 데이터를 기준으로 정렬을 위해 추가 (성창식)


  const toggleFns = [
    ()=>toUpSortArray(filtered,standard),
    ()=>toDownSortArray(filtered,standard),
    ()=> filtered
]

    const sortedData = toggleFns[current]();
    current = (current + 1) % toggleFns.length;

    postRender(sortedData);
    

}
