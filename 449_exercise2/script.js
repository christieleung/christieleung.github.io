const lb = document.querySelector('#bounce')
const text = document.querySelector('#change')

const originalText = 'click the ladybug!';

lb.addEventListener ('click', bounce);

function bounce() {
    lb.classList.add('start-bouncing');
    text.classList.add('change-color');
    text.textContent = 'weeeeee!';
};

lb.addEventListener('animationend', function() {
    lb.classList.remove('start-bouncing');
    text.classList.remove('change-color');
    text.textContent = originalText;
});

// text change code edited from chatgpt

