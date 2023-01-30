export interface Component {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {

    // 한번 요소를 만들면 요소 안의 상태는 변경이 가능 하지만 요소 자체는 변경이 불가하도록 만들었습니다.
    protected readonly element: T;
    constructor(htmlString: string) {
        const template = document.createElement('template');

        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
        console.log(this.element);
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}