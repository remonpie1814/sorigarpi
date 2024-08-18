// ApiService의 call을 활용한 함수들을 모아놓는 파일

import { call } from "./ApiService";

export function login(userDTO) {
  call("/member/login", "POST", userDTO).then((response) => {
    // 응답에서 토큰을 가져와 로컬 스토리지에 저장.
    if (response) {
      const accessToken = response.data.accessToken;
      localStorage.setItem("ACCESS_TOKEN", accessToken);
      const refreshToken = response.data.refreshToken;
      localStorage.setItem("REFRESH_TOKEN", refreshToken);
      alert("로그인 됨!");
    }
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
  call("/member/jwtTokenInfo", "GET", null, true).then((res) => {
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

// 사용자의 정보를 업데이트 하는 함수
export function updateMember(memberDTO) {
  return call("/member/info", "PUT", memberDTO, true)
    .then((response) => {
      alert("정보 수정 성공: " + response);
      window.location.href = "/profile";
    })
    .catch((error) => {
      alert("정보 수정 실패: " + error);
    });
}

// 사용자의 프로필을 가져오는 함수
export function getMemberInfo() {
  return call("/member/info", "GET", null, true);
}

// 내가 쓴 동화리스트 가져오기
// 아직 백 쪽에 api가 없음
export function listMyTale() {
  return call("/book/getAllBook", "GET", null, true);
}
