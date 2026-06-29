const frogElement = document.querySelector('#frog')
const carOneElement = document.querySelector('.car')
const carTwoElement = document.querySelector('.car-2')
const carThreeElement = document.querySelector('.car-3')


//Initial frog position
let frogTop = 580
let frogLeft = 260
frogElement.style.top = frogTop + "px"
frogElement.style.left = frogLeft + "px"

//Initial car position
let carLeft = 0
carOneElement.style.left = carLeft + 'px'
carTwoElement.style.left = carLeft + 'px'
carThreeElement.style.left = carLeft + 'px'

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

function carOneMovement(){
    carLeft += 7
    if(carLeft > 510){
        carLeft= 0
    }
        carOneElement.style.left = carLeft + 'px'
}

function carTwoMovement(){
    carLeft += 30
    if(carLeft > 510){
        carLeft= 0
    }
        carTwoElement.style.left = carLeft + 'px'
}

function carThreeMovement(){
    carLeft += 20
    if(carLeft > 510){
        carLeft= 0
    }
        carThreeElement.style.left = carLeft + 'px'
}

// set interval for the cars to move
setInterval(carOneMovement,100)
setInterval(carTwoMovement,700)
setInterval(carThreeMovement,1200)


// Event Listener
document.addEventListener('keydown',move)