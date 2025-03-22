const board = document.querySelector('#board');
const SQUARES_NUMBER = 1000;
const colors = ['white', 'pink', 'skyblue', 'rgb(240, 194, 125)', 'blueviolet'];

for (let i = 0; i < SQUARES_NUMBER; i++) 
{
const square = document.createElement('div');
square.classList.add('square');
board.append(square);
square.addEventListener('mouseover', () => setColor(square));
square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) 
{
const color = getRandomColor();
element.style.backgroundColor = color;
element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) 
{
element.style.backgroundColor = 'black';
element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() 
{
const index = Math.floor(Math.random() * colors.length);
return colors[index];
}

clearButton.addEventListener('click', clearBoard);

function clearBoard() 
{
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.style.backgroundColor = 'rgb(102, 37, 98)');
}
