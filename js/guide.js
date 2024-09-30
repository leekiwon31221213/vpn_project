document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const headerMainContainer = document.querySelector('.header-main-container');
  if (currentPath === '/guide/guide.html') {
    headerMainContainer.style.setProperty('--before-content', '"VPN 사용방법"');
  }

  if (currentPath === '/guide/guide_detail.html') {
    headerMainContainer.style.setProperty('--before-content', '"안드로이드"');
  }
});
