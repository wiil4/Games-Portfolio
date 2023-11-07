function makeNavBackgroundWhite() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 75) {
      nav.classList.add('nav-color-bg');
    } else {
      nav.classList.remove('nav-color-bg');
    }
  }

  window.addEventListener('scroll', makeNavBackgroundWhite);