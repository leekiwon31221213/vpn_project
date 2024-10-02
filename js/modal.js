document.addEventListener('DOMContentLoaded', function () {
  let modalElement;

  /* 이용약관 */
  const termsBtn = document.querySelectorAll('.terms-btn');
  termsBtn.forEach((i) => {
    i.addEventListener('click', function () {
      terms_modal();
    });
  });

  function terms_modal() {
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.classList.add('modal-common');
      modalElement.innerHTML = `
        <div class="modal__inner">
          <h2>서비스 이용약관</h2>
          <img src="../img/close.svg" alt="닫기버튼" class="close-btn close">
          <p class='text-box'>
           이용자의 개인정보를 매우 중요시하며, ... [이하 생략]
          </p>
        </div>
      `;

      document.body.appendChild(modalElement);
      setTimeout(() => {
        modalElement.classList.add('active');
      }, 80);
      document.body.style.overflow = 'hidden';

      terms_modal_close();
    }
  }

  function terms_modal_close() {
    const close_btns = modalElement.querySelectorAll('.close');
    close_btns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
  }

  /* 개인정보 처리방침 */
  const privacyBtn = document.querySelectorAll('.privacy-btn');
  privacyBtn.forEach((i) => {
    i.addEventListener('click', function () {
      privacy_modal();
    });
  });

  function privacy_modal() {
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.classList.add('modal-common');
      modalElement.innerHTML = `
          <div class="modal__inner">
            <h2>개인정보 처리방침</h2>
            <img src="../img/close.svg" alt="닫기버튼" class="close-btn close">
            <p class='text-box'>
             이용자의 개인정보를 매우 중요시하며, ... [이하 생략]
            </p>
          </div>
        `;

      document.body.appendChild(modalElement);
      setTimeout(() => {
        modalElement.classList.add('active');
      }, 80);
      document.body.style.overflow = 'hidden';

      privacy_modal_close();
    }
  }

  function privacy_modal_close() {
    const close_btns = modalElement.querySelectorAll('.close');
    close_btns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
  }

  /* 회원가입 약관 */
  const join_terms_btn = document.querySelectorAll('.join-terms-btn');
  join_terms_btn.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      if (index === 0) {
        service_term_modal();
      } else if (index === 1) {
        finance_term_modal();
      } else if (index === 2) {
        join_privacy_term_modal();
      }
    });
  });

  /* 서비스 이용약관 */
  function service_term_modal() {
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.classList.add('modal-common');
      modalElement.innerHTML = `
            <div class="modal__inner">
              <h2>서비스 이용약관</h2>
              <img src="../img/close.svg" alt="닫기버튼" class="close-btn close">
              <p class='text-box'>
               이용자의 개인정보를 매우 중요시하며, ... [이하 생략]
              </p>
              <div class="join-btn-box">
                <button type='button' class="terms-ok">확인</button>
                <button type='button' class="close-btn close">취소</button>
              </div>
            </div>
          `;

      document.body.appendChild(modalElement);
      setTimeout(() => {
        modalElement.classList.add('active');
      }, 80);
      document.body.style.overflow = 'hidden';

      service_term_modal_close();
    }
  }

  function service_term_modal_close() {
    const termsOkButton = modalElement.querySelector('.terms-ok');
    const closeBtns = modalElement.querySelectorAll('.close');

    if (termsOkButton) {
      termsOkButton.addEventListener('click', () => {
        const service_terms_checkbox = document.querySelector('.agree-service');
        service_terms_checkbox.checked = true; // 체크박스를 체크
        closeModal();
        checkAllAgreements();
      });
    }

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
  }

  /* 전자금융거래 이용약관 */
  function finance_term_modal() {
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.classList.add('modal-common');
      modalElement.innerHTML = `
            <div class="modal__inner">
              <h2>전자금융거래 이용약관</h2>
              <img src="../img/close.svg" alt="닫기버튼" class="close-btn close">
              <p class='text-box'>
               이용자의 개인정보를 매우 중요시하며, ... [이하 생략]
              </p>
              <div class="join-btn-box">
                <button type='button' class="terms-ok">확인</button>
                <button type='button' class="close-btn close">취소</button>
              </div>
            </div>
          `;

      document.body.appendChild(modalElement);
      setTimeout(() => {
        modalElement.classList.add('active');
      }, 80);
      document.body.style.overflow = 'hidden';

      finance_term_modal_close();
    }
  }

  function finance_term_modal_close() {
    const termsOkButton = modalElement.querySelector('.terms-ok');
    const closeBtns = modalElement.querySelectorAll('.close');

    if (termsOkButton) {
      termsOkButton.addEventListener('click', () => {
        const finance_terms_checkbox = document.querySelector('.agree-finance');
        finance_terms_checkbox.checked = true; // 체크박스를 체크
        closeModal();
        checkAllAgreements();
      });
    }

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
  }

  /* 개인정보 처리방침 이용약관 */
  function join_privacy_term_modal() {
    if (!modalElement) {
      modalElement = document.createElement('div');
      modalElement.classList.add('modal-common');
      modalElement.innerHTML = `
            <div class="modal__inner">
              <h2>개인정보 처리방침</h2>
              <img src="../img/close.svg" alt="닫기버튼" class="close-btn close">
              <p class='text-box'>
               이용자의 개인정보를 매우 중요시하며, ... [이하 생략]
              </p>
              <div class="join-btn-box">
                <button type='button' class="terms-ok">확인</button>
                <button type='button' class="close-btn close">취소</button>
              </div>
            </div>
          `;

      document.body.appendChild(modalElement);
      setTimeout(() => {
        modalElement.classList.add('active');
      }, 80);
      document.body.style.overflow = 'hidden';

      join_privacy_term_modal_close();
    }
  }

  function join_privacy_term_modal_close() {
    const termsOkButton = modalElement.querySelector('.terms-ok');
    const closeBtns = modalElement.querySelectorAll('.close');

    if (termsOkButton) {
      termsOkButton.addEventListener('click', () => {
        const join_privacy_terms_checkbox = document.querySelector('.agree-privacy');
        join_privacy_terms_checkbox.checked = true; // 체크박스를 체크
        closeModal();
        checkAllAgreements();
      });
    }

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
  }

  function closeModal() {
    modalElement.classList.remove('active');
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      document.body.removeChild(modalElement);
      modalElement = null;
    }, 300);
  }

  function checkAllAgreements() {
    const serviceCheckbox = document.querySelector('.agree-service');
    const financeCheckbox = document.querySelector('.agree-finance');
    const privacyCheckbox = document.querySelector('.agree-privacy');
    const allAgreeCheckbox = document.querySelector('.agree-all'); // 전체 동의 체크박스

    if (serviceCheckbox.checked && financeCheckbox.checked && privacyCheckbox.checked) {
      allAgreeCheckbox.checked = true; // 전체 동의 체크박스 체크
    } else {
      allAgreeCheckbox.checked = false; // 전체 동의 체크박스 해제
    }
    toggleNextButton(); // 체크박스 상태 변경 시 버튼 상태 확인
  }

  // 체크박스 요소를 선택
  const service_terms_checkbox = document.querySelector('.agree-service');
  const finance_terms_checkbox = document.querySelector('.agree-finance');
  const privacy_terms_checkbox = document.querySelector('.agree-privacy');
  const checkBox = document.querySelector('.agree-all'); // 전체 동의 체크박스
  const next_btn = document.querySelectorAll('.next-btn'); // 다음 버튼들

  const toggleNextButton = () => {
    const allChecked = service_terms_checkbox.checked && finance_terms_checkbox.checked && privacy_terms_checkbox.checked;

    next_btn.forEach((btn) => {
      btn.disabled = !allChecked; // 모든 체크박스가 체크되면 버튼 활성화
      btn.classList.toggle('active', allChecked); // 활성화 상태 추가
    });
  };

  // 체크박스 이벤트 리스너 추가
  service_terms_checkbox.addEventListener('change', toggleNextButton);
  finance_terms_checkbox.addEventListener('change', toggleNextButton);
  privacy_terms_checkbox.addEventListener('change', toggleNextButton);
});
