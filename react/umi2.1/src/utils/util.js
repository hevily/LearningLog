/**
 *  防止快速点击
 *
 * @param  {function} action   点击按钮处理逻辑的函数
 * @param  {number}   delay    延迟多长时间处理
 * @return {function}
 */
export function throttle(action, delay = 1000) {
  let timeout = null;
  let lastRun = 0;
  return function() {
    if (timeout) return;
    let elapsed = Date.now() - lastRun;
    let context = this;
    let args = arguments;
    let runCallback = function() {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}
