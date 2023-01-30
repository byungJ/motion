export class PageComponent {

    // HTML의 카드들의 목록을 담고 있습니다.
    private element: HTMLUListElement;
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'This is PageComponent';
    }

    //외부에서 페이지 컴포넌트를 만들어서 필요한 곳에다가 추가.
    // app.js로 부터 doucument를 받아서 그 안에다가 ul element를 추가 합니다.
    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}