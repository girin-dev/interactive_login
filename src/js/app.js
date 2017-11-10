(function () {
  let html;

  const renderId = function (e) {
    if (e) {
      html = '아이디가 유효합니다.';
    } else {
      html = '아이디가 유효하지 않습니다.';
    }
    document.getElementsByClassName('id-message')[0].innerHTML = html;
  };

  const renderPw = function (e) {
    if (!e) {
      html = '비밀번호는 8자 이상 입력해주세요.';
    } else {
      html = '안전한 비밀번호입니다.'
    }
    document.getElementsByClassName('pw-message')[0].innerHTML = html;
  }

  const checkPw = function (e) {
    if (e.target.value.length > 7) {
      renderPw(true);
    } else if (e.target.value.length < 8) {
      renderPw(false);
    }
  };

  const checkId = function (e) {
    if (e.target.value.length > 7) {
      renderId(true);
    } else if (e.target.value.length < 8) {
      renderId(false);
    }
  };

  document.getElementById('user-id').addEventListener('input', e => {
    checkId(e);
  });
  document.getElementById('user-pw').addEventListener('input', e => {
    checkPw(e);
  });
}());
