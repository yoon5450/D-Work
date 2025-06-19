import { addClass, removeClass } from './css.js';
import { getNode as $ } from './getNode.js';
import { isString } from '../utils/type.js';

export function showAlert({
  target: node,
  message = '오류 발생!',
  timeout = 1000,
  className = 'active',
}) {
  // if(isString(node)) node = $(node);

  addClass(node, className);
  $(node).textContent = message;

  setTimeout(() => {
    removeClass(node, className);
  }, timeout);
}
