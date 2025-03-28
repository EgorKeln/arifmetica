function assembling() {
    hideIntro(() => {
        window.location.href = 'assembling.html'; // Перенаправление на assembling.html
    });
}

function production() {
    hideIntro(() => {
        window.location.href = 'production.html'; // Перенаправление на production.html
    });
}

function main() {
    console.log("Функция main() вызвана"); // Сообщение для отладки
    hideIntro(() => {
        console.log("Перенаправление на index.html"); // Сообщение перед редиректом
        window.location.href = 'index.html'; // Перенаправление на index.html
    });
}

function hideIntro(callback) {
    const intro = document.getElementById('intro');
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = 'none';
        if (callback) callback(); // Выполнение колбэка после скрытия
    }, 500); // 1 секунда на исчезновение
}