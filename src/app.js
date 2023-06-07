import './styles.css'
import {ContextMenu} from './menu.js'
import {BackgroundModule} from './modules/background.module'
import {ShapeModule} from './modules/shape.module'
import {CrossCircule} from './modules/crossAndcircule.module'

document.body.addEventListener('click', event => {
    const datAtribute = event.target.dataset.type;   
    if(!datAtribute){
        return
    }  

    if(datAtribute === 'chengBackground'){
        const backGround = new BackgroundModule('chengBackground', 'Изменить цвет');
        backGround.trigger();      
    } 
    if(datAtribute === 'shape'){
        const shape = new ShapeModule('shape', 'Создать фигуру');
        shape.trigger();      
    }
    if(datAtribute === 'crossCircule'){
        const cross = new CrossCircule('crossCircule', 'Крестики нолики');
        cross.trigger();      
    }
        
  })





