const videoData = [
    { id: 1, title: "Как создать игру на телефоне {Разбор UI (Часть 1)}", thumbnail: "Как создать игру на телефоне {Разбор UI (Часть 1)}.jpg", views: "1.2M просмотров" },
    { id: 2, title: "Пример Видео 2", thumbnail: "thumbnail2.jpg", views: "900K просмотров" },
    { id: 3, title: "Пример Видео 3", thumbnail: "thumbnail3.jpg", views: "500K просмотров" }
];

function displayVideos() {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = ''; // Очищаем сетку
    videoData.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-thumbnail';
        videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.views}</p>
        `;
        videoElement.addEventListener('click', () => openVideo(video.id));
        videoGrid.appendChild(videoElement);
    });
}
displayVideos();

function openVideo(id) {
    window.location.href = `video.html?id=${id}`;
}

function openSection(section) {
    alert(`Открыт раздел: ${section}`);
}
