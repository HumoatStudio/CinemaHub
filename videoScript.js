// Данные видео
const videoData = [
    { id: 1, title: "Как создать игру на телефоне {Разбор UI (Часть 1)}", views: "1.5M просмотров", description: `23 просмотра  2 нояб. 2024 г.<br>
Всем привет, сегодня я расскажу про одну программу,<br>для создания игры на твоём мобильном устройстве! В видео ролике,<br>я разбираю только интерфейс программы.
Так как в этом ролике я не создаю проект<br>
<a href="https://play.google.com/store/apps/details?id=org.catrobat.catroid&pli=1">https://play.google.com/store/apps/details?id=org.catrobat.catroid&pli=1</a><br>
Скачайте покачто эту версию покет кода!` },
    { id: 2, title: "Пример Видео 2", views: "900K просмотров", description: "Описание второго видео." },
    { id: 3, title: "Пример Видео 3", views: "500K просмотров", description: "Описание третьего видео." }
];

// Получение ID видео из URL
const urlParams = new URLSearchParams(window.location.search);
const videoId = parseInt(urlParams.get('id'));

// Поиск видео по ID
const video = videoData.find(v => v.id === videoId);

// Если видео найдено, обновляем контент на странице
if (video) {
    document.getElementById('video-title').innerHTML = video.title;
    document.getElementById('video-views').innerHTML = video.views;
    document.getElementById('video-description').innerHTML = video.description;
} else {
    document.getElementById('video-title').innerHTML = "Видео не найдено";
    document.getElementById('video-views').innerHTML = "";
    document.getElementById('video-description').innerHTML = "Извините, видео не существует или было удалено.";
}
