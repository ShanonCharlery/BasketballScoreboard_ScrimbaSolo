let scoreHome = 0

let scoreGuest = 0

let sumHome = document.getElementById("sum-home")

let sumGuest = document.getElementById("sum-guest")

function oneHome() {
    scoreHome += 1
    sumHome.textContent = scoreHome
    
}

function twoHome() {
    scoreHome += 2
    sumHome.textContent = scoreHome
}

function threeHome() {
    scoreHome += 3
    sumHome.textContent = scoreHome
}

function oneGuest() {
    scoreGuest += 1
    sumGuest.textContent = scoreGuest
}

function twoGuest() {
    scoreGuest += 2
    sumGuest.textContent = scoreGuest
}

function threeGuest() {
    scoreGuest += 3
    sumGuest.textContent = scoreGuest
}

function newGame() {
    scoreHome = 0
    scoreGuest = 0
    sumHome.textContent = scoreHome
    sumGuest.textContent = scoreGuest
}
