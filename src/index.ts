//interSectionObserver 主要监听元素是否在视口范围内
//MutationObserver 主要监听子集的变化和属性的变化以及增删改查
//ResizeObserver 主要监听元素的尺寸变化以及增删改查
import { App } from "vue";
/**
 * 监听元素的尺寸变化并回调
 * @param {HTMLElement} el - 要监听的元素
 * @param {Function} callback - 回调函数，参数为 contentRect 对象
 */
function useResizeHale(
  el: HTMLElement,
  callback: (contentRect: DOMRectReadOnly) => void
): void {
  // 创建一个 ResizeObserver 实例
  let resize = new ResizeObserver((entries) => {
    // 监听到元素尺寸变化时，回调传入的函数，并传入 contentRect 对象
    callback(entries[0].contentRect);
  });
  // 开始监听指定元素的尺寸变化
  resize.observe(el);
}
// 指令的定义
const install = (app: App) => {
  app.directive("resize-hale", {
    mounted: (el: HTMLElement, binding: any) => {
      useResizeHale(el, binding.value);
    },
  });
};

useResizeHale.install = install;
export default useResizeHale;