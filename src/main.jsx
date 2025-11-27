import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";

const appObj = {
  //컴포넌트 렌더링
    ch01: <App01 />, 
    ch02: <App02 />, 
    counter: <Counter/>,
    ch02_2: <App02_2 />,
}

// render()안에 있는 항목을 렌더링시킴
createRoot(document.getElementById('root')).render(appObj.ch02_2);

