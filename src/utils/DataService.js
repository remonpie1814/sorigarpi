// ApiService의 call을 활용한 함수들을 모아놓는 파일

import { call } from "./ApiService";

export function login(userDTO) {
  localStorage.setItem("ACCESS_TOKEN", null);
  console.log(localStorage.getItem("ACCESS_TOKEN"));
  call("/member/login", "POST", userDTO)
    .then((response) => {
      // 응답에서 토큰을 가져와 로컬 스토리지에 저장.
      // note: 백엔드에서 로그인의 응답을 어떻게 주는지 확인해야 함. 지금 swagger에 적혀 있지 않음.
      if (response) {
        const token = response.replace("로그인하였습니다. ", "");
        localStorage.setItem("ACCESS_TOKEN", token);
        console.log(localStorage.getItem("ACCESS_TOKEN"));
        alert("로그인 됨!");
        window.history.back(); // 이전 페이지로 이동
      }
    })
    .catch((error) => {
      alert("로그인 실패! \n" + error);
      logout();
    });
}

export function logout() {
  localStorage.setItem("ACCESS_TOKEN", null);
}

export function signUp(userDTO) {
  return call("/member/signUp", "POST", userDTO);
}

// jwtTokenInfo로 연결해보는 함수. 디버그용.
export function confirmJwt() {
  call("/member/jwtTokenInfo").then((res) => {
    alert(res);
  });
}

// 책 생성
export function createBook(bookDTO) {
  return call("/book/createBook", "POST", bookDTO, true)
    .then((response) => {
      alert("책 생성 성공: " + response);
    })
    .catch((error) => {
      alert("책 생성 실패: " + error);
    });
}
