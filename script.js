const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close-btn');

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'IMG') {
    const imgSrc = e.target.parentNode.getAttribute('href');
    lightboxImg.setAttribute('src', imgSrc);
    lightbox.style.display = 'flex';
  }
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
