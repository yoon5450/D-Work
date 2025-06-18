
import { isArray, isString } from "./index.js";

/*정렬기준: 
companyscore:number, 
experience=[number,number], 
endDate:string, 
company:string*/

// toUpSortArray(data,"company")

//오름차순
export function toUpSortArray(data,standard){

     let newArray = data.sort((a,b)=>{
      if(isString(a.standard)){
        a=a[standard].toUpperCase()
        b=b[standard].toUpperCase()
      }
      if(isArray(a.standard)){
        a=a.standard[0]
        b=b.standard[0]
      }

      if(a[standard]>b[standard]) return 1;
      if(a[standard]<b[standard]) return -1;
      return 0;
    })
    return newArray;
}
//연차별 확인할때 최소 최대값 봐야함


//내림차순
export function toDownSortArray(data,standard){
  let newArray = data.sort((a,b)=>{
      if(isString(a.standard)){
        a=a[standard].toUpperCase()
        b=b[standard].toUpperCase()
      }
      if(isArray(a.standard)){
        a=a.standard[0]
        b=b.standard[0]
      }

      if(a[standard]<b[standard]) return 1;
      if(a[standard]>b[standard]) return -1;
      return 0;
    })
    return newArray;
}
