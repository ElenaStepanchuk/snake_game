let direction="right"
window.addEventListener('keydown', (e) => {
    if(e.keyCode === 37 && direction!= "right"){
        direction="left"
           }else if (e.keyCode === 38 && direction!= "down"){
        direction="up"
               }else if (e.keyCode === 39 && direction!= "left"){
            direction="right"
                        }else if (e.keyCode === 40 && direction!= "up"){
                direction="down"
                                }
    })

const move = ({ snakeBody, feed}) => {
    // console.log(feed);
        if (snakeBody && snakeBody[0]) {
        let snakeCoordinates = [snakeBody[0].getAttribute('posx'), snakeBody[0].getAttribute('posy')]
        if (snakeCoordinates[0] && snakeCoordinates[1]) {
            snakeBody[0].classList.remove('snakeHead');
            if (snakeBody[snakeBody.length - 1]) {
                snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
            }
            snakeBody.pop();

if(direction == 'right'){
    if (snakeCoordinates[0] < 10){
        snakeBody.unshift(document.querySelector(`[posx='${parseInt(snakeCoordinates[0]) + 1}'][posy='${snakeCoordinates[1]}']`));
    } else {
        snakeBody.unshift(document.querySelector(`[posx='1'][posy='${snakeCoordinates[1]}']`));
    }
} else if(direction == 'left'){
    if (snakeCoordinates[0] > 1){
        snakeBody.unshift(document.querySelector(`[posx='${parseInt(snakeCoordinates[0]) - 1}'][posy='${snakeCoordinates[1]}']`));
    } else {
        snakeBody.unshift(document.querySelector(`[posx='10'][posy='${snakeCoordinates[1]}']`));
    }
} else if (direction == 'up') {
    if (snakeCoordinates[1] > 1) {
        snakeBody.unshift(document.querySelector(`[posx='${snakeCoordinates[0]}'][posy='${parseInt(snakeCoordinates[1]) + 1}']`));
    } else {
        snakeBody.unshift(document.querySelector(`[posx='${snakeCoordinates[0]}'][posy='10']`));
    }
} else if(direction == 'down'){
    if (snakeCoordinates[1] > 1){
        snakeBody.unshift(document.querySelector(`[posx='${parseInt(snakeCoordinates[0])}'][posy='${snakeCoordinates[1] - 1}']`));
    } else {
        snakeBody.unshift(document.querySelector(`[posx='${parseInt(snakeCoordinates[0])}'][posy='10']`));
    }
}

if(snakeBody[0].getAttribute('posx') == feed[0] && snakeBody[0].getAttribute('posy') == feed[1]){
console.log("true");
}
            
            if (snakeBody[0]) {
                snakeBody[0].classList.add('snakeHead');
            }
            for (let i = 0; i < snakeBody.length; i++) {
                if (snakeBody[i]) {
                    snakeBody[i].classList.add('snakeBody');
                }
            }
            
        }
    }

}


export default move;