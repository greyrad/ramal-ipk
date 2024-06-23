// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

document.getElementById('namaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    if (nama.trim() === '') {
        alert('Silakan masukkan nama Anda');
        return;
    }

    const ipk = (Math.random() * 4).toFixed(2); // Generate random IPK between 0 and 4 with 2 decimal places
    let message = '';
    let videoSrc = '';

    // Define arrays of videos for each condition
    const videosTolol = ['videos/1.mp4', 'videos/2.mp4', 'videos/3.mp4'];
    const videosAverage = ['videos/2.mp4', 'videos/3.mp4', 'videos/4.mp4'];
    const videosBagus = ['videos/1.mp4', 'videos/5.mp4', 'videos/3.mp4'];
    const videosNiceJob = ['videos/5.mp4', 'videos/7.mp4', 'videos/8.mp4'];
    const videosGOAT = ['videos/8.mp4', 'videos/6.mp4', 'videos/1.mp4'];

    // Function to get a random video from an array
    function getRandomVideo(videos) {
        return videos[Math.floor(Math.random() * videos.length)];
    }

    if (ipk < 1) {
        message = `IPK kamu ${ipk}: Kamu tolol`;
        videoSrc = getRandomVideo(videosTolol);
    } else if (ipk < 2) {
        message = `IPK kamu ${ipk}: Just average`;
        videoSrc = getRandomVideo(videosAverage);
    } else if (ipk < 3) {
        message = `IPK kamu ${ipk}: Bagus`;
        videoSrc = getRandomVideo(videosBagus);
    } else if (ipk < 4) {
        message = `IPK kamu ${ipk}: Nice job, kids. Your parents must be proud.`;
        videoSrc = getRandomVideo(videosNiceJob);
    } else {
        message = `IPK kamu ${ipk}: GOAT`;
        videoSrc = getRandomVideo(videosGOAT);
    }

    // Tampilkan pesan
    document.getElementById('message').textContent = message;

    // Set video source dan tampilkan video
    const videoElement = document.getElementById('video');
    videoElement.src = videoSrc;
    videoElement.load(); // Load video baru
    videoElement.play(); // Play video baru

    // Pindah ke slide berikutnya
    swiper.slideNext();
});

document.getElementById('backButton').addEventListener('click', function() {
    swiper.slidePrev();
});
