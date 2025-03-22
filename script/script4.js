const board = document.querySelector('#board');
const clearButton = document.querySelector('#clearButton');
const colorButtons = document.querySelectorAll('.colorButton');
const SQUARES_NUMBER = 4000;
let currentColor = 'rgb(240, 194, 125)';

for (let i = 0; i < SQUARES_NUMBER; i++) 
{
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', () => setColor(square));
}

clearButton.addEventListener('click', clearBoard);

colorButtons.forEach(button => {
    button.addEventListener('click', () => 
    {
        currentColor = button.dataset.color;
    });
});

function setColor(element) 
{
    element.style.backgroundColor = currentColor;
    element.style.boxShadow = `0 0 2px ${currentColor}, 0 0 10px ${currentColor}`;
}

function clearBoard() 
{
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'rgb(102, 37, 98)';
        square.style.boxShadow = '0 0 2px #000';
    });
}
