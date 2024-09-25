$(document).ready(function () {
  const menuModal = $('.modal-content');
  const overlay = $('.overlay');

  $('.trigger').on('click', function () {
    if (menuModal.hasClass('active')) {
      menuModal.removeClass('active');
      overlay.removeClass('active');
      setTimeout(function () {
        menuModal.css('display', 'none');
        overlay.css('display', 'none');
      }, 300);
      $('body').css('overflow', 'auto');
    } else {
      menuModal.css('display', 'block');
      overlay.css('display', 'block');
      setTimeout(function () {
        menuModal.addClass('active');
        overlay.addClass('active');
        $('.header-main-container header .mo-menu nav').css('padding', 'unset unset unset');
      }, 0);
      $('body').css('overflow', 'hidden');
    }

    $(this).toggleClass('active');
  });

  overlay.on('click', function () {
    menuModal.removeClass('active');
    overlay.removeClass('active');
    setTimeout(function () {
      menuModal.css('display', 'none');
      overlay.css('display', 'none');
    }, 300);
    $('body').css('overflow', 'auto');
    $('.trigger').removeClass('active');
  });
});
