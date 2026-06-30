const frogElement = document.querySelector('#frog')
const carOneElement = document.querySelector('.car')
const carTwoElement = document.querySelector('.car-2')
const carThreeElement = document.querySelector('.car-3')
const logOneElement = document.querySelector('.log-1')
const logTwoElement = document.querySelector('.log-2')
const lilyPadElements = document.querySelectorAll('.lilypad')



//Initial frog position
let frogTop = 580
let frogLeft = 260
frogElement.style.top = frogTop + "px"
frogElement.style.left = frogLeft + "px"

//Initial car position
let carOneLeft = 0
let carTwoLeft = 0
let carThreeLeft = 0

//Intial logs position
let logOnePosition = 0
let logTwoPosition = 250


//Intial number of lives
let lives = 3

// Intial state for the frog before riding the log
let isOnLogOne = false
let isOnLogTwo = false



carOneElement.style.left = carOneLeft + 'px'
carTwoElement.style.left = carTwoLeft + 'px'
carThreeElement.style.left = carThreeLeft + 'px'

logOneElement.style.left = logOnePosition + 'px'
logTwoElement.style.left = logTwoPosition + 'px'

function move(event) {

    if (event.key === 'ArrowUp') {
        if (frogTop > 0) {
            frogTop -= 60
            frogElement.style.top = frogTop + 'px'
        }
    }

    if (event.key === 'ArrowDown') {
        if (frogTop < 580) {
            frogTop += 60
            frogElement.style.top = frogTop + 'px'
        }
    }

    if (event.key === 'ArrowLeft') {
        if (frogLeft > 55) {
            frogLeft -= 60
            frogElement.style.left = frogLeft + 'px'
        }
    }

    if (event.key === 'ArrowRight') {
        if (frogLeft < 500) {
            frogLeft += 60
            frogElement.style.left = frogLeft + 'px'
        }
    }

    lilyPadElements.forEach((lily) => {
        // check if frog position overlaps this lilypad
        let lilypadRect = lily.getBoundingClientRect()
        let frogRect = frogElement.getBoundingClientRect()

        if (frogRect.left < lilypadRect.right &&
            frogRect.right > lilypadRect.left &&
            frogRect.top < lilypadRect.bottom &&
            frogRect.bottom > lilypadRect.top) {
            landOnLily(lily)
        }
    })

    rideLogOne()
    rideLogTwo()
}

function carOneMovement() {

    carOneLeft += 7
    if (carOneLeft > 510) {
        carOneLeft = 0
    }
    carOneElement.style.left = carOneLeft + 'px'

}

function carTwoMovement() {
    carTwoLeft += 30
    if (carTwoLeft > 510) {
        carTwoLeft = 0
    }
    carTwoElement.style.left = carTwoLeft + 'px'

}

function carThreeMovement() {
    carThreeLeft += 20
    if (carThreeLeft > 510) {
        carThreeLeft = 0
    }
    carThreeElement.style.left = carThreeLeft + 'px'
}

function logOneMovement() {
    logOnePosition += 20
    if (logOnePosition > 490) {
        logOnePosition = 0
    }
    logOneElement.style.left = logOnePosition + 'px'

    //to move the frog along with the code
    if (isOnLogOne) {
        frogLeft += 20
        frogElement.style.left = frogLeft + 'px'
    }
    rideLogOne()

}

function logTwoMovement() {
    logTwoPosition += 10
    if (logTwoPosition > 490) {
        logTwoPosition = 0
    }
    logTwoElement.style.left = logTwoPosition + 'px'

    if (isOnLogTwo) {
        frogLeft += 10
        frogElement.style.left = frogLeft + 'px'
    }
    rideLogTwo()
}

function rideLogOne() {
    let logOneLocation = logOneElement.getBoundingClientRect()
    let frogRect = frogElement.getBoundingClientRect()

    isOnLogOne = (frogRect.left < logOneLocation.right &&
        frogRect.right > logOneLocation.left &&
        frogRect.top < logOneLocation.bottom &&
        frogRect.bottom > logOneLocation.top)

}

function rideLogTwo() {
    let logTwoLocation = logTwoElement.getBoundingClientRect()
    let frogRect = frogElement.getBoundingClientRect()

    isOnLogTwo = (frogRect.left < logTwoLocation.right &&
        frogRect.right > logTwoLocation.left &&
        frogRect.top < logTwoLocation.bottom &&
        frogRect.bottom > logTwoLocation.top)
}

function checkCollision() {
    // if postion of the frog = position of the car you lose 
    decrementLives()
}

function decrementLives() {
    lives -= 1
    //reset the frog position again
    frogTop = 580
    frogLeft = 260
    carOneLeft = 0
    carTwoLeft = 0
    carThreeLeft = 0
    logOnePosition = 0
    logTwoPosition = 0
}

function landOnLily(lily) {
    lily.classList.add('visited')
    let allVisited = [...lilyPadElements].every(pad => pad.classList.contains('visited'))
    if (allVisited) {
        win()
    }
}

function win() {

}

// set interval for the cars to move
setInterval(carOneMovement, 100)
setInterval(carTwoMovement, 700)
setInterval(carThreeMovement, 1200)

//set interval for the logs to move
setInterval(logOneMovement, 500)
setInterval(logTwoMovement, 300)


// Event Listener
document.addEventListener('keydown', move)
