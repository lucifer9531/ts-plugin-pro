import { TYPE } from "./Tab";
import Base from "./Base";

class Slide extends Base {
    constructor(el: HTMLElement) {
        super(el, TYPE.SLIDE);
        this.getMethod(this.setPage);
    }

    private setPage(pageInner: HTMLElement, curIdx: number) {
        pageInner.style.transform = `translate3d(${-curIdx * 500}px, 0, 0)`;
    }
}

export default Slide;
