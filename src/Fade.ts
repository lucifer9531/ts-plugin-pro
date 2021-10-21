import Base from "./Base";
import { TYPE } from "./Tab";

class Fade extends Base {
    constructor(el: HTMLElement) {
        super(el, TYPE.FADE);
        this.getMethod(this.setPage);
    }

    private setPage(pageItems: HTMLCollection, curIdx: number) {
        // @ts-ignore
        [...pageItems].map((item: HTMLElement) => {
            item.className = 'page-item';
        });
        pageItems[curIdx].className += ' active';
    }
}

export default Fade;
