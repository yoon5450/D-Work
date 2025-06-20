import dummyJobPostings from '../data/dummyJobPostingsData.js';
import { toDownSortArray, toUpSortArray, postRender } from '../index.js'



let current=0;
export function handleSort(e){
  e.preventDefault();
  const target = e.target.closest("th");
  let standard=target.id
  if(!standard) return;
  const data=dummyJobPostings()

  
  const toggleFns = [
    ()=>toUpSortArray(data,standard),
    ()=>toDownSortArray(data,standard),
    ()=> data
]

    const sortedData = toggleFns[current]();
    current = (current + 1) % toggleFns.length;

    postRender(sortedData);
    

}
