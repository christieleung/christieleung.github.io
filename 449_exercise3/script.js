const displayMsgName = document.querySelector('#displayName');
const displayMsgFood = document.querySelector('#displayFood');
const catimg = document.querySelector('#catimg');
const foodimg = document.querySelector('#foodimg');

const showPoints = document.querySelector('#showPoints');
let points = 0;


// name
function name() {
    const name = document.querySelector('#myName').value;
    console.log(name); 

    if (name) {
    displayMsgName.textContent = `${name} is cute :3`; }
}
document.querySelector('#myName').addEventListener('input', name);


// food
function food() {
    const food = document.querySelector('#myText').value;
    console.log(food); 

   if (food === 'fish') {
        displayMsgFood.textContent = `yum!`;
        catimg.src = 'images/happycat.png';
        foodimg.src = 'images/fish.png';
        points += 10;

    } else if (food === 'candy') {
        displayMsgFood.textContent = `bleh! try again...`;
        catimg.src = 'images/sickcat.png';
        foodimg.src = 'images/candy.png';
        points -= 5;

    } else {
        displayMsgFood.textContent = `hmmm...not an option!`;
        catimg.src = 'images/cat.png';
        foodimg.src = 'images/food.png';
        points = 0;
    }

    showPoints.textContent = `Points: ${points}`;
}
document.querySelector('#myText').addEventListener('input', food);

