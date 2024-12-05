//TASK 1

function handleButton_task1(){
    const task1_input = document.getElementById("task1_input").value;
    if(task1_input === ""){
        console.log("Комірка пуста");
    } else {
        console.log(task1_input);
    }
}



//TASK 3

function handleButton_task2() {
    var inputField = document.getElementById("task2_input");
    var button = document.getElementById("task2_button");

    if (button.innerText === "Приховати") {
        inputField.type = "password";
        button.innerText = "Розкрити";
    } else {
        inputField.type = "text";
        button.innerText = "Приховати";
    }
}


//TASK 5

window.addEventListener('click', function(event) {

    if (event.target.id === "place") {
        console.log(true);
    } else if (event.target.id === "container") {
        console.log(false);
    }
});



//TASK 7

const categories = document.querySelectorAll('ul#categories .item');
console.log(`Кількість категорій: ${categories.length}`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const itemsInCategory = category.querySelectorAll('ul li').length;
    console.log(`${categoryTitle}: ${itemsInCategory} елементів`);
});


//TASK 8
const form = document.querySelector('.login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (!email || !password) {
        alert('Поля форми мають бути заповнені');
        return;
    }

    const formData = {
        email: email,
        password: password,
    };

    console.log(formData);

    form.reset();
});


//TASK 9
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    document.querySelector('.widget').style.backgroundColor = randomColor;

    colorSpan.textContent = randomColor;
});


//TASK 10

function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    const elements = [];

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = 30 + i * 10; // Визначаємо розміри елемента

        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.marginBottom = '10px';

        elements.push(div);
    }


    boxesContainer.innerHTML = '';
    boxesContainer.append(...elements);
}

function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
    const inputValue = document.querySelector('#controls input').value; // Використовуємо селектор за id контейнера
    const amount = Number(inputValue);

    if (amount >= 1 && amount <= 100 && !isNaN(amount)) {
        createBoxes(amount); // Створюємо елементи
        document.querySelector('input').value = '';
    } else {
        alert('Please enter a number between 1 and 100');
    }
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);