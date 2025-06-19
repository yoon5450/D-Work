import { isString } from "../utils/type.js";
import { addClass, getNode, removeClass } from "./index.js";

export function showAlert({ target, message, timeout = 1000, className }) {
  let targetNode = getNode(target);

  addClass(target, className);
  targetNode.textContent = message;

  setTimeout(() => {
    removeClass(target, className);
  }, timeout);
}
