let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// JavaScript
function showAuthModal(type) {
    const modal = document.getElementById('authModal');
    const signupFields = document.getElementById('signupFields');
    const modalTitle = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('submitBtn');

    if(type === 'signup') {
        signupFields.style.display = 'block';
        modalTitle.textContent = 'Sign Up';
        submitBtn.textContent = 'Create Account';
    } else {
        signupFields.style.display = 'none';
        modalTitle.textContent = 'Login';
        submitBtn.textContent = 'Login';
    }
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Form submission handling
document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    // Add your authentication logic here
    
    // Visual feedback
    submitBtn.classList.add('clicked');
    setTimeout(() => {
        submitBtn.classList.remove('clicked');
        closeModal();
    }, 1000);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('authModal');
    if(event.target == modal) {
        closeModal();
    }
}