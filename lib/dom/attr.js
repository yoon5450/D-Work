
import { getNode } from './getNode.js'
import { isString, isUndefined, isNull } from '../utils/type.js'

export function getAttr(node,prop){
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw new TypeError('getAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.')
  return node.getAttribute(prop)
}


export function setAttr(node,prop,value){
  if(isString(node)) node = getNode(node);
  if(!isString(prop)) throw new TypeError('setAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.')
  
  if(value === '') {
    node.removeAttribute(prop);
    return;
  }
  
  if(isUndefined(value) || isNull(value)) throw new Error('...');

  node.setAttribute(prop,value);
}



export function attr(node,prop,value){

  if(isUndefined(value)){
    return getAttr(node,prop)
  }
  setAttr(node,prop,value)
}


export const _attr = (node,prop,value) => isUndefined(value) ? getAttr(node,prop) : setAttr(node,prop,value);









