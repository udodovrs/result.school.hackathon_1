import {Menu} from './core/menu';
import {Module} from './core/module';
import {BackgroundModule} from './modules/background.module';
import {ShapeModule} from './modules/shape.module';
import {CrossCircule} from './modules/crossAndcircule.module';
import {randomPlace} from './utils'


export class ContextMenu extends Menu {     
    add (){  
        const instanc = moduleToMenu => moduleToMenu instanceof Module;          
        
        const backGround = new BackgroundModule('chengBackground', 'Изменить цвет'); 
        const shape = new ShapeModule('shape', 'Создать фигуру');   
        const cross = new CrossCircule('crossCircule', 'Крестики нолики');         
            
        instanc(backGround) ? this.el.insertAdjacentHTML('beforeend', backGround.toHTML()) : '';    
        instanc(shape) ? this.el.insertAdjacentHTML('beforeend', shape.toHTML()) : '';          
        instanc(cross) ? this.el.insertAdjacentHTML('beforeend', cross.toHTML()) : '';             
    }

    open() {
        document.body.addEventListener('contextmenu', event =>{
            //event.preventDefault();           
            this.el.classList.add('open');
            randomPlace(this.el, event.pageX, event.pageY, this.el.offsetWidth, this.el.offsetHight);                   
        })
    }

    close() {
        this.el.classList.remove('open');
    }
}

const context = new ContextMenu('#menu');
context.open();
context.close();
context.add()

