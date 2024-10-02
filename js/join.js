/* 정보입력 */
//인풋 변수
let emailInput = document.querySelector('.email-input');
let passwordInput = document.querySelector('.pass-word-input');
let confirmPasswordInput = document.querySelector('.pass-word-check');
let nick_name_input = document.querySelector('.nick-name-input');
let phone_num_input = document.querySelector('.phone-number-input');
let certification_input = document.querySelector('.certification-num-input');

//이메일 체크
function idCheck() {
  emailInput.addEventListener('input', function () {
    if (emailInput.value != '') {
      // 값이 있을때
      passwordInput.disabled = false;
      confirmPasswordInput.disabled = false;
    } else {
      // 값이 없을때
      passwordInput.disabled = true;
      confirmPasswordInput.disabled = true;
    }
  });
}
idCheck();
//패스워드 체크
function pwCheck() {
  const matchText = document.querySelector('.pass-word-match-text');

  confirmPasswordInput.addEventListener('input', function () {
    if (passwordInput.value === confirmPasswordInput.value) {
      matchText.innerText = '* 비밀번호가 일치 합니다.';
      matchText.style.display = 'block';
      matchText.style.color = 'rgba(55, 83, 225, 1)';
      nick_name_input.disabled = false;
    } else {
      matchText.innerText = '* 비밀번호가 일치하지 않습니다.';
      matchText.style.display = 'block';
      matchText.style.color = 'red';
      nick_name_input.disabled = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  pwCheck();
});

//닉네임
function nickName() {
  nick_name_input.addEventListener('input', function () {
    if (nick_name_input.value != '') {
      // 값이 있을때
      // console.log('값이 있음');
      phone_num_input.disabled = false;
    } else {
      // 값이 없을때
      phone_num_input.disabled = true;
    }
  });
}
nickName();

//휴대폰 번호
function phone_num() {
  const send_btn = document.querySelector('.certification-num-send');
  const certification_btn = document.querySelector('.certification-number-box');
  const certification_btn_check = document.querySelector('.certification-num-check');
  const join_btn = document.querySelector('.join-btn');
  // autoHyphen 함수 정의
  const autoHyphen = (target) => {
    // 값이 있을 때만 하이픈 추가
    if (target.value) {
      target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        .replace(/(\-{1,2})$/g, '');

      /*인증코드 클릭 했을때 */
      if (target.value.length === 13) {
        send_btn.disabled = false;

        send_btn.addEventListener('click', function () {
          certification_btn.style.display = 'flex';
          certification_input.disabled = false;
        });
      }
    }
  };

  if (phone_num_input.value) {
    autoHyphen(phone_num_input);
  }

  phone_num_input.addEventListener('input', function (e) {
    autoHyphen(e.target);
  });

  certification_input.addEventListener('input', function () {
    if (certification_input.value.length === 6) {
      certification_btn_check.disabled = false;
    } else {
      certification_btn_check.disabled = true;
    }
  });

  /* 값이 일치 할때 확인 버튼 클릭시 회원가입 버튼 활성화 */
  // 실제 로직으로 변경해야함
  certification_btn_check.addEventListener('click', function () {
    if (certification_input.value === '000000') {
      join_btn.disabled = false;
    } else {
      join_btn.disabled = true;
      alert('인증번호가 틀립니다.');
      certification_input.focus();
    }
  });

  /* 로그인 성공했을때 */
  join_btn.addEventListener('click', function () {
    location.href = '../join/join_complete.html';
  });
}

document.addEventListener('DOMContentLoaded', phone_num);
