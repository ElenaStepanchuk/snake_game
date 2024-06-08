const move = ({ snakeBody }) => {
        if (snakeBody && snakeBody[0]) {
        let snakeCoordinates = [snakeBody[0].getAttribute('posx'), snakeBody[0].getAttribute('posy')]
        if (snakeCoordinates[0] && snakeCoordinates[1]) {
            snakeBody[0].classList.remove('snakeHead');
            if (snakeBody[snakeBody.length - 1]) {
                snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
            }
            snakeBody.pop();

            if (snakeCoordinates[0] < 10){
            snakeBody.unshift(document.querySelector(`[posx='${parseInt(snakeCoordinates[0]) + 1}'][posy='${snakeCoordinates[1]}']`));
        } else {
            snakeBody.unshift(document.querySelector(`[posx='1'][posy='${snakeCoordinates[1]}']`));
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