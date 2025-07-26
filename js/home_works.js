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


document.addEventListener('DOMContentLoaded', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../data/characters.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const characters = JSON.parse(xhr.responseText);
                const container = document.querySelector('.characters-list');

                characters.forEach(character => {
                    const card = document.createElement('div');
                    card.className = 'character-card';

                    card.innerHTML = `
            <img src="${character.person_photo}" alt="${character.name}">
            <div class="info">
              <h3 class="name">${character.name}</h3>
              <p class="age">Возраст: ${character.age}</p>
            </div>
          `;
                    container.appendChild(card);
                });
            } else {
                console.error('Ошибка загрузки JSON:', xhr.status);
            }
        }
    };

    xhr.send();
});

const xhr = new XMLHttpRequest();

xhr.open('GET', '../data/any.json', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Данные из JSON:', data);
        } else {
            console.error('Ошибка загрузки:', xhr.status);
        }
    }
};

xhr.send();


