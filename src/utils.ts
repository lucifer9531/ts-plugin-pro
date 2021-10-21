import {TYPE} from "./Tab";

function setEl(el: string | undefined, type: TYPE): HTMLElement {
    if (!el) {
        throw new Error('el must be exist');
    }
    const isMark: boolean = /^(\.|\#)/.test(el);
    let _el: HTMLElement | null;

    if (!isMark) {
        _el = document.querySelector(`.${el}`) || document.querySelector(`#${el}`);
    } else {
        _el = document.querySelector(el);
    }

    if (!_el) {
        throw new Error('This element with the class or Id name is not exist');
    }

    _el.className = `tab ${type}`;

    return _el;
}

function setType(type: TYPE | string | undefined): TYPE {
    if (!type) {
        return TYPE.FADE;
    }

    for (let k in TYPE) {
        if (TYPE[k] === type) {
            return type as TYPE;
        }
    }

    return TYPE.FADE;
}

export {
    setEl,
    setType
}
