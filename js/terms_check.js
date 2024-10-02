document.addEventListener('DOMContentLoaded', function () {
  let next_btn = document.querySelectorAll('.next-btn');

  /* 약관 동의 */
  const checkBox = document.querySelector('.agree-all');
  const service_terms_checkbox = document.querySelector('.agree-service');
  const finance_terms_checkbox = document.querySelector('.agree-finance');
  const privacy_terms_checkbox = document.querySelector('.agree-privacy');

  function updateAgreeAllCheckbox() {
    checkBox.checked = service_terms_checkbox.checked && finance_terms_checkbox.checked && privacy_terms_checkbox.checked;
    toggleNextButton();
  }

  function toggleNextButton() {
    const allChecked = service_terms_checkbox.checked && finance_terms_checkbox.checked && privacy_terms_checkbox.checked;
    next_btn.forEach((btn) => {
      btn.disabled = !allChecked;
      btn.addEventListener('click', function () {
        location.href = '../join/user_info_input.html';
      });
    });
  }

  function is_checked() {
    const checked = checkBox.checked;

    service_terms_checkbox.checked = checked;
    finance_terms_checkbox.checked = checked;
    privacy_terms_checkbox.checked = checked;

    toggleNextButton();
  }

  // 초기 체크 상태 확인
  is_checked();

  checkBox.addEventListener('change', is_checked);
  service_terms_checkbox.addEventListener('change', updateAgreeAllCheckbox);
  finance_terms_checkbox.addEventListener('change', updateAgreeAllCheckbox);
  privacy_terms_checkbox.addEventListener('change', updateAgreeAllCheckbox);
});
