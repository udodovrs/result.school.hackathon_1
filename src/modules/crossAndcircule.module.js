import {Module} from '../core/module';

export class CrossCircule extends Module {
    trigger(){ 
        const iswrap = document.body.querySelector('.wrap');             
        if (iswrap) {
            iswrap.remove();
        }
       const wrap = document.createElement('div');
       wrap.classList.add('wrap');
       wrap.style.zIndex = 10;
       document.body.append(wrap)
       document.body.style.background = 'linear-gradient(125.2deg, #626262 14.86%, #DA4A4A 100.57%)';
       const playBoard = document.createElement('div');
       playBoard.classList.add('playBoard')
       const informWhowin = document.createElement('div');
       informWhowin.classList.add('informWhowin');
       const btnClose = document.createElement('button');
       btnClose.classList.add('btnClose');      
       btnClose.textContent = 'Закрыть игру';     
       
       wrap.append(playBoard);
       wrap.append(btnClose);
       wrap.insertAdjacentHTML('beforeend', `<button class = "btnRepet">Повторить игру</button>`)

       let playArr = [0,0,0,0,0,0,0,0,0]
       playArr.forEach((item,index) =>{
        const boxOnPlayboard = document.createElement('div');
        boxOnPlayboard.classList.add('boxOnPlayboard');
        boxOnPlayboard.id = `ID${index}`;
        boxOnPlayboard.dataset.number = index;
        playBoard.append(boxOnPlayboard);
       })

       
       let cross = true;
       let sumCross = 0;
       let sumNull = 0;
       document.body.addEventListener('click', event =>{

        const num = event.target.dataset.number;   
        if(num){
            const box = document.body.querySelector(`#${event.target.id}`);  
            if (box.textContent === 'X' || box.textContent === 'O'){
                return
            }          
            if (cross){
                box.textContent = 'X';
                cross = false;
                playArr[num] = 1;
            } else{
                box.textContent = 'O';
                cross = true;
                playArr[num] = -1;
            }   
            const setWin = [
                playArr[0] + playArr[1] + playArr[2],
                playArr[3] + playArr[4] + playArr[5],
                playArr[6] + playArr[7] + playArr[8],
                playArr[0] + playArr[3] + playArr[6],
                playArr[1] + playArr[4] + playArr[7],
                playArr[2] + playArr[5] + playArr[8],
                playArr[0] + playArr[4] + playArr[8],
                playArr[2] + playArr[4] + playArr[6]
            ]           
    
            setWin.forEach(item => {
                if (item === 3){
                    sumCross +=1;                    
                    playBoard.style.zIndex = -1;                                   
                    const htmlToinformWhowin = `<p><span>Крестики победили</span></p>
                                                <p>Победы крестиков: ${sumCross}</p>
                                                <p>Победы ноликов: ${sumNull}</p>`;
                    informWhowin.insertAdjacentHTML('beforeend', htmlToinformWhowin);                    
                    document.body.querySelector('.wrap').append(informWhowin);                                
                    playArr = [0,0,0,0,0,0,0,0,0];                    
                }
                if (item === -3){
                    sumNull +=1;                   
                    playBoard.style.zIndex = -1;                    
                    const htmlToinformWhowin = `<p><span>Нолики победили</span></p>
                                              <p>Победы крестиков: ${sumCross}</p>
                                              <p>Победы ноликов: ${sumNull}</p>`;
                    informWhowin.insertAdjacentHTML('beforeend', htmlToinformWhowin); 
                    document.body.querySelector('.wrap').append(informWhowin);                              
                    playArr = [0,0,0,0,0,0,0,0,0];
                }
            })
        }

        const isBtnClose = event.target.classList.contains('btnClose');
        if(isBtnClose){
            wrap.remove();   
            informWhowin.innerHTML = '';       
            playArr = [0,0,0,0,0,0,0,0,0];
            cross = true;
            sumNull = 0;
            sumCross = 0;
        }

        const isBtnRepet = event.target.classList.contains('btnRepet');
        if(isBtnRepet){
            informWhowin.remove();
            informWhowin.innerHTML = '';
            const boxes = playBoard.querySelectorAll('.boxOnPlayboard');
            boxes.forEach(item => item.textContent = '');
            playArr = [0,0,0,0,0,0,0,0,0];
            playBoard.style.zIndex = 0;
            cross = true;
        }        
       })  

       const menu = document.querySelector('#menu');       
       menu.classList.remove('open');       
    }    
}
