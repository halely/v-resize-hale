declare const useResizeHale: (el: HTMLElement, callback: (contentRect: DOMRectReadOnly) => void) =>{
    install:(app: App) => void
}

export default useResizeHale