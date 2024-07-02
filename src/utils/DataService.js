// ApiService의 call을 활용한 함수들을 모아놓는 파일

import { call } from "./ApiService";

export function login(userDTO) {
  return call("/login", "POST", userDTO).then((response) => {
    // 응답에서 토큰을 가져와 로컬 스토리지에 저장.
    // note: 백엔드에서 로그인의 응답을 어떻게 주는지 확인해야 함. 지금 swagger에 적혀 있지 않음.
    if (response.token) {
      localStorage.setItem("ACCESS_TOKEN", response.token);
    }
  });
}

export function logout() {
  localStorage.setItem("ACCESS_TOKEN", null);
}

export function signUp(userDTO) {
  return call("/member/signUp", "POST", userDTO);
}
