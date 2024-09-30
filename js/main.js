document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const main = document.querySelector('.header-main-container').clientHeight;
    const section1_height = document.querySelector('.section1').clientHeight;
    const section2_active = document.querySelector('.section2__inner');
    const section2_li_active = document.querySelectorAll('.section2-contents > li');

    if (window.scrollY >= main + section1_height / 2) {
      if (!section2_active.classList.contains('active')) {
        section2_active.classList.add('active');

        section2_li_active.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('active');
          }, index * 850);
        });
      }
    }
  });
});

function backToTop() {
  const position = document.documentElement.scrollTop || document.body.scrollTop;
  if (position) {
    window.requestAnimationFrame(() => {
      window.scrollTo(0, position - position / 10);
      backToTop();
    });
  }
}
