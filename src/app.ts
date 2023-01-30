import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://images.unsplash.com/photo-1675055778682-996dfd5cde48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80');
    image.attachTo(appRoot, 'beforeend');
  }
}

// 특정한 요소를 가져옵니다.
new App(document.querySelector('.document')! as HTMLElement);
