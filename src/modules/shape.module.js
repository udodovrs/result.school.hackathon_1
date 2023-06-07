import {Module} from '../core/module'
import {random, randomColor, randomPlace} from '../utils'

export class ShapeModule extends Module {
    trigger(){     
        const shape = document.createElement('div');            
        const randomWidth = random(100, 400);
        const randomHight = random(100, 500);
        shape.style.width = `${randomWidth}px`;    
        shape.style.height = `${randomHight}px`;
        shape.style.backgroundColor = randomColor();
        shape.style.borderRadius = `${random(0, 50)}%`               
        shape.classList.add('shape');  
        shape.addEventListener('dblclick', () =>{
            shape.remove();
        })      
        const randomX = random (30, document.documentElement.clientWidth - 30);
        const randomY = random (30, document.documentElement.clientHeight - 30);
        randomPlace(shape, randomX, randomY, randomWidth, randomHight);
        document.body.append(shape);       
        
        const menu = document.querySelector('#menu');       
        menu.classList.remove('open');
    }
}