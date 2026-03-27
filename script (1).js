let currentPage = 1;
const totalPages = 6;
let musicStarted = false;

function nextPage() {
    const song = document.getElementById('bday-music');
    if (!musicStarted) {
        song.play().catch(e => console.log("Music blocked"));
        musicStarted = true;
    }
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
        createConfetti();
    }
}

function createConfetti() {
    for (let i = 0; i < 35; i++) {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.backgroundColor = ['#ff4757', '#ff6b81', '#ffffff'][Math.floor(Math.random() * 3)];
        c.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

function createHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    h.innerHTML = '❤️';
    h.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}
setInterval(createHeart, 800);

function resetApp() {
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage = 1;
    document.getElementById(`page1`).classList.add('active');
}

// Carousel Logic
const track = document.getElementById('carouselTrack');
const dotContainer = document.getElementById('dotContainer');
const totalSlides = 11;

for(let i=0; i<totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = i === 0 ? 'dot active' : 'dot';
    dot.onclick = () => { track.scrollLeft = i * track.clientWidth; };
    dotContainer.appendChild(dot);
}

track.onscroll = () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    const dots = document.querySelectorAll('.dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
};
