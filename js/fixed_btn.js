document.addEventListener('DOMContentLoaded', function () {
  // window.addEventListener('scroll', function () {
  //   if (document.documentElement.scrollTop > 150) {
  //     document.querySelector('.fixed-btn-box').classList.add('active');
  //   } else {
  //     document.querySelector('.fixed-btn-box').classList.remove('active');
  //   }
  // });
  function fixed_btn() {
    modalElement = document.createElement('div');
    modalElement.classList.add('fixed-btn-box');
    modalElement.innerHTML = `
            <ul class="fixed-btn__inner">
            <li>
                <a href="#none"><img src="../img/fixed_kakao.svg" alt="고정카카오버튼" /></a>
            </li>
            <li>
                <a href="#none"><img src="../img/fixed_wechat.svg" alt="고정위챗버튼" /></a>
            </li>
            <li>
                <a href="#none"><img src="../img/fixed_live.svg" alt="고정라이브버튼" /></a>
            </li>
            <li>
                <a href="javascript:void(0)" onclick="backToTop()"><img src="../img/top_arrow.svg" alt="탑버튼" /></a>
            </li>
            </ul>
        `;

    document.body.appendChild(modalElement);
  }
  fixed_btn();
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
