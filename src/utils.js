export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const randomColor = () =>{
return `rgb(
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)},
  ${Math.floor(Math.random() * 256)}
)`
}

export const randomPlace = (box, offsetX, offsetY, offsetWidth, offsetHeight) =>{
  const windowWidth = document.documentElement.clientWidth;
  const windowHight = document.documentElement.clientHeight; 

  const widthBox = offsetWidth;           
  const hightBox = offsetHeight; 
  
  if((offsetY + hightBox) > windowHight & (offsetX + widthBox) > windowWidth){
      box.style.left = `${offsetX - widthBox}px`;
      box.style.top = `${offsetY - hightBox}px`;
  } else if((offsetY + hightBox) > windowHight){
      box.style.left = `${offsetX}px`;
      box.style.top = `${offsetY - hightBox}px`;
  } else if((offsetX + widthBox) > windowWidth){
      box.style.left = `${offsetX - widthBox}px`;
      box.style.top = `${offsetY}px`;
  } else{
      box.style.left = `${offsetX}px`;
      box.style.top = `${offsetY}px`;
  } 
}