import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://images.unsplash.com/photo-1675055778682-996dfd5cde48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80');
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
