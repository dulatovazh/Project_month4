// задание 1 с почтой

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('gmail_input');
    const button = document.getElementById('gmail_button');
    const resultSpan = document.getElementById('gmail_result');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    button.addEventListener('click', () => {
    const email = input.value.trim();

    if (emailRegex.test(email)) {
    resultSpan.style.color = 'green';
    resultSpan.textContent = 'Почта корректна!';
} else {
    resultSpan.style.color = 'red';
    resultSpan.textContent = 'Некорректный формат почты.';
}
});
});

//задание 2 с красным квадратом

document.addEventListener('DOMContentLoaded', () => {
    const smallBlock = document.querySelector('.child_block');
    const parentBlock = document.querySelector('.parent_block');

    parentBlock.style.position = 'relative';
    smallBlock.style.position = 'absolute';
    smallBlock.style.left = '0px';
    smallBlock.style.top = '0px';

    const step = 1;
    const maxX = parentBlock.clientWidth - smallBlock.offsetWidth;
    const maxY = parentBlock.clientHeight - smallBlock.offsetHeight;

    let direction = 'right';
    let positionX = 0;
    let positionY = 0;

    function move() {
        if (direction === 'right') {
            if (positionX < maxX) {
                positionX += step;
            } else {
                direction = 'down';
            }
        } else if (direction === 'down') {
            if (positionY < maxY) {
                positionY += step;
            } else {
                direction = 'left';
            }
        } else if (direction === 'left') {
            if (positionX > 0) {
                positionX -= step;
            } else {
                direction = 'up';
            }
        } else if (direction === 'up') {
            if (positionY > 0) {
                positionY -= step;
            } else {
                direction = 'right';
            }
        }

        smallBlock.style.left = positionX + 'px';
        smallBlock.style.top = positionY + 'px';

        requestAnimationFrame(move);
    }

    move();
});

// задание 3 с отсчетом

document.addEventListener('DOMContentLoaded', () => {
    const secondsEl = document.getElementById('seconds');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');
    let count = 0;
    let intervalId = null;
    startBtn.addEventListener('click', () => {
        if (intervalId === null) {
            intervalId = setInterval(() => {
                count++;
                secondsEl.textContent = count;
            }, 1000);
        }
    });

    stopBtn.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    resetBtn.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        count = 0;
        secondsEl.textContent = count;
    });
});
