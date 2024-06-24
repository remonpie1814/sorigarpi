// api 설정 파일

let backendHost;
const hostName = window && window.location && window.location.hostname;

// 테스트 환경에서 요청할 때는 로컬호스트로
if (hostName === "localhost") {
  backendHost = "http://localhost:8080";
}
// 테스트 환경이 아닌 곳에서 쓸 경우 주소를 바꾸기
else if (hostName === "배포환경의 도메인 주소") {
  backendHost = "배포환경의 백엔드 주소";
}

// 다른 곳에서 쓸 수 있도록 export
export const API_BASE_API = `${backendHost}`;
