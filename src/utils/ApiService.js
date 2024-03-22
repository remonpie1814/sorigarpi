import { API_BASE_API } from "config/api-config";

export function call(api, method, request, credential) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  // 로컬 스토리지에서 jwt 토큰을 가져오기 시도
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options = {
    headers: headers,
    url: API_BASE_API + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      // 인증오류의 경우 로그인 페이지로 리다이렉트
      else if (response.status === 403) {
        window.location.href = "/login";
      }
      // 다른 오류의 경우 모두 예외 처리
      else {
        Promise.reject(response);
        throw Error(response);
      }
    })
    .catch((error) => {
      console.log("http error");
      console.log(error);
    });
}
