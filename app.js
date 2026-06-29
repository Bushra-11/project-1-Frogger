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
let carOneLeft = 0
let carTwoLeft = 0
let carThreeLeft = 0

//Intial number of lives
let lives = 3

carOneElement.style.left = carOneLeft + 'px'
carTwoElement.style.left = carTwoLeft + 'px'
carThreeElement.style.left = carThreeLeft + 'px'

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

    checkCollision()

}
function carOneMovement(){

    carOneLeft += 7    
    if(carOneLeft > 510){
        carOneLeft= 0
    }
        carOneElement.style.left = carOneLeft + 'px'
        checkCollision()

}

function carTwoMovement(){
    carTwoLeft += 30
    if(carTwoLeft > 510){
        carTwoLeft= 0
    }
        carTwoElement.style.left = carTwoLeft + 'px'
        checkCollision()

}

function carThreeMovement(){
    carThreeLeft += 20
    if(carThreeLeft > 510){
        carThreeLeft= 0
    }
        carThreeElement.style.left = carThreeLeft + 'px'
        checkCollision()

}

function checkCollision(){
    if(frogLeft === carOneLeft && frogTop === Math.abs(carOneLeft)){
        decrementLives()
    }
}

function decrementLives(){
    lives -= 1
    //reset the frog position again
    frogTop = 580
    frogLeft = 260
}


// set interval for the cars to move
setInterval(carOneMovement,100)
setInterval(carTwoMovement,700)
setInterval(carThreeMovement,1200)


// Event Listener
document.addEventListener('keydown',move)