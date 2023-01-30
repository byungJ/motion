import { BaseComponent } from './../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
    
    // private element: HTMLElement;

    constructor(title: string, url: string) {
        // const template = document.createElement('template');

        // 사용자한테 입력 받은 데이터를 직접적으로 innerHTML에 ${title}이런식으로 적용하면 위험합니다.
        // template.innerHTML = `<section class="image">
        //         <div class="image__holder">
        //             <img class="image__thumbnail">
        //         </div>
        //         <p class="image__title"></p>
        //     </section>`;
        super(`<section class="image">
        <div class="image__holder">
            <img class="image__thumbnail">
        </div>
        <h2 class="image__title"></h2>
    </section>`)

        // this.element = template.content.firstElementChild! as HTMLElement;

        const imageElement = this.element.querySelector('.image__thumbnail')! as HTMLImageElement;
        imageElement.src = url;
        imageElement.alt = title;

        const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
        titleElement.textContent = title;
    }

    // attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    //     parent.insertAdjacentElement(position, this.element);
    // }
}