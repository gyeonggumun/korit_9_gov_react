import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";

const appObj = {
  //컴포넌트 렌더링
    ch01: <App01 />, 
    ch01: <App02 />, 

};
const root = document.getElementById("root"); //id 가 root 인 요소 dom 으로 가져옴 -> root 객체 생성
createRoot(root).render(appObj.ch02);

