
let slideIndex = 0;
let isPlaying = true;
let audio = document.getElementById('audio');
let playPauseBtn = document.getElementById('playPauseBtn');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let slides = document.getElementsByClassName("mySlides");
let timeoutId;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  timeoutId = setTimeout(showSlides, 2000); // Altere o valor para ajustar a velocidade do slide
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    clearTimeout(timeoutId); // Pausa o timeout quando o áudio é pausado
  } else {
    audio.play();
    isPlaying = true;
    showSlides(); // Reinicia o slideshow quando o áudio é retomado
  }
}

function prevSlide() {
  clearTimeout(timeoutId); // Limpa o timeout atual para evitar conflitos
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

function nextSlide() {
  clearTimeout(timeoutId); // Limpa o timeout atual para evitar conflitos
  showSlides();
}

playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlides();