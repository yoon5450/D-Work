/*
usage:
ground.addEventListener("mousemove", throttle(handleMove, 1000));
*/


export function throttle(f, limit = 200) {
  let wait = false;

  return (...args) => {
    if (!wait) {
      f.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}