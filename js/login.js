document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const headerMainContainer = document.querySelector('.header-main-container');
  if (currentPath === '/login/login.html') {
    console.log('로그인 페이지');
    headerMainContainer.style.setProperty('--before-content', '"로그인"');
  }

  if (currentPath === '/login/id_search.html') {
    // 여기에서 'id_search'로 수정
    console.log('아이디 찾기 페이지');
    headerMainContainer.style.setProperty('--before-content', '"아이디 찾기"');
  }

  if (currentPath === '/login/pw_search.html') {
    console.log('비밀번호 찾기 페이지');
    headerMainContainer.style.setProperty('--before-content', '"비밀번호 찾기"');
  }
});

// CSS 변수를 통해 ::before의 content 변경
