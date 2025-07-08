const modal = document.getElementById('imagemodal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

// Open image in modal
function openimage(src) {
    modalImage.src = src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    closeModal();
});
  
// Close modal when clicking outside the image (on the modal background)
document.body.addEventListener('click', (event) => {
   const menuToggle = document.querySelector('.nav-links.show');

 
    if (event.target === modal ) {
        closeModal();
    }
});

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
