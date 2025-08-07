import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 앱을 시작하기 위한 마운트 함수
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// 개발 환경이며 독립적으로 실행 중인 경우,
// 즉시 mount 함수를 호출함
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// 컨테이너를 통해 실행 중인 경우
// mount 함수를 export 해야 함
export { mount };
