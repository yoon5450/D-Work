import { isString } from "../utils";
import { getNode } from "./index.js";

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  node.scrollTop = node.scrollHeight;
}
