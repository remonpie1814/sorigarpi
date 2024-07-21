import { API_BASE_API } from "config/api-config";

export function call(api, method, request, credential = false) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  if (credential) {
    // 로컬 스토리지에서 jwt 토큰을 가져오기 시도
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && accessToken !== null) {
      headers.append("Authorization", "Bearer " + accessToken);
    }
  }

  let options = {
    headers: headers,
    url: API_BASE_API + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }

  return new Promise((resolve, reject) => {
    fetch(options.url, options)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          // HTTP 상태 코드가 200이 아닌 경우
          if (response.status === 403) {
            window.location.href = "/login";
          } else {
            throw new Error(`HTTP error status: ${response.status}`);
          }
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        reject(error);
      });
  });
}
