function start() {
    hideIntro();
    // Здесь можно добавить логику для перехода на другую страницу или выполнения действий
}

function learnMore() {
    // Логика для перехода на страницу с подробной информацией
    hideIntro();
    // alert("Переход на страницу с подробной информацией...");
}

function hideIntro() {
    const intro = document.getElementById('intro');
    intro.style.opacity = 0;
    setTimeout(() => {
        intro.style.display = 'none';
    }, 1000); // 1 секунда на исчезновение
}

// Время срабатывания - через 10 секунд после появления заставки
// setTimeout(hideIntro, 10000);
