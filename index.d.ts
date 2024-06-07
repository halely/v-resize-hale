import { App } from 'vue'
declare const useResizeHale:{
  (el: HTMLElement, callback: (contentRect: DOMRectReadOnly) => void):void
  install:(app: App) => void;
}
export default useResizeHale;