import { getNode } from './getNode.js'
import { isString, isObject } from '../utils/type.js'

/**

 * @function DOM Element에 클래스를 추가하는 함수
 * @author 범쌤
 * @param {HTMLElement | string} node 
 * @param {string | string[] | object} className 
 * @return {void}
 */

export function addClass(node,className){
  
  if(isString(node)) node = getNode(node);


  if(className.includes(',')){
    className = className.replace(/\s*/g,'').split(',');
  }
  
  if(isObject(className)){
    className = Object.values(className)
  }
  
  if(Array.isArray(className)){

    className.forEach((c)=> node.classList.add(c))
  }
  else{
    node.classList.add(className);
  }
  
}


/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {void}
 */

export function removeClass(node,className){
  if(isString(node)) node = getNode(node);
  
  if(!className){
    node.className = '';
  }

  node.classList.remove(className);
}

/**
 * 
 * @param {HTMLElement | string} node 
 * @param {string} className 
 * @returns {boolean} - 추가 true, 제거 false
 */

export function toggleClass(node,className){
 if(isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}

