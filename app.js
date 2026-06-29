const frogElement = document.querySelector('#frog')
const carOneElement = document.querySelector('.car')


//Initial frog position
let frogTop = 580
let frogLeft = 260
frogElement.style.top = frogTop + "px"
frogElement.style.left = frogLeft + "px"

//Initial car position
let carLeft = 0
carOneElement.style.left = carLeft + 'px'

function move(event){
    if(event.key === 'ArrowUp'){
        if(frogTop > 0){
        frogTop -= 60
        frogElement.style.top = frogTop + 'px'
        }
    }

    if(event.key === 'ArrowDown'){
        if(frogTop < 580){
        frogTop += 60
        frogElement.style.top = frogTop +'px'
        }
    }

    if(event.key === 'ArrowLeft'){
        if(frogLeft > 55){
        frogLeft -= 60
        frogElement.style.left = frogLeft + 'px'
        }
    }

    if(event.key === 'ArrowRight'){
        if(frogLeft < 500){
        frogLeft += 60
        frogElement.style.left = frogLeft + 'px'
        }
    }
}

function carMovement(){
    carLeft += 10
    if(carLeft > 510){
        carLeft= 0
    }
        carOneElement.style.left = carLeft + 'px'
}


// set interval for the red car to move
//setInterval(carMovement,80)


// Event Listener
document.addEventListener('keydown',move)