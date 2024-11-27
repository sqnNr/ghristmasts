// Таймер обратного отсчета
function startCountdown() {
    const newYear = new Date("Jan 1, 2025 00:00:00").getTime();
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = newYear - now;
        
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "Счастливого Нового Года!";
        }
    }, 1000);
}

startCountdown();

// Включение и выключение музыки
const musicToggleButton = document.querySelector('.music-toggle');
const music = document.getElementById("background-music");

musicToggleButton.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        musicToggleButton.textContent = 'Выключить музыку';
    } else {
        music.pause();
        musicToggleButton.textContent = 'Включить музыку';
    }
});

// Анимация для элементов
const secretButton = document.querySelector('.secret-button');
const secretMessage = document.querySelector('.secret-message');
const secretBlock = document.querySelector('.secret-block');

secretButton.addEventListener('click', function() {
    secretBlock.style.display = 'block';
});

// Подсказка для пользовательского сообщения
const submitMessageButton = document.querySelector('.submit-message');
const userMessageTextArea = document.querySelector('.user-message');

submitMessageButton.addEventListener('click', function() {
    const userMessage = userMessageTextArea.value;
    alert('Ваше сообщение: ' + userMessage);
    userMessageTextArea.value = '';  // Очищаем поле после отправки
});
