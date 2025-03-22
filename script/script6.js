const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0;
const colors = ['white', 'pink', 'rgb(240, 194, 125)', 'blueviolet'];

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => 
{
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})

function startGame() {
    timeEl.innerHTML = `00:${time}`
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    board.innerHTML = `<h1> Счёт: <span class="primary">${score}</span></h1>`
    timeEl.parentNode.classList.add('hide')
}

function createRandomCircle() {
    const {width, height} = board.getBoundingClientRect();
    const size = getRandomNumber(10, 60);
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const circle = document.createElement('span'); 
    circle.classList.add('circle'); 
    circle.innerHTML = '&#9733;'; 
    board.append(circle);
    circle.style.fontSize = `${size}px`; 
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    setColor(circle); 
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}