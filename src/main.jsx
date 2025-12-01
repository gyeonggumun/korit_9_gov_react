import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";
import App02_4 from "./ch02/App02_4";
import App02_5 from "./ch02/App02_5";
import Inputs from "./ch02/Inputs";
import SearchName from "./ch02/SearchName";
import SearchNamev2 from "./ch02/SearchNamev2";
import UseEffect01 from "./ch03/UseEffect01";
import UseEffect03 from "./ch03/UseEffect03";
import UseEffect04 from "./ch03/UseEffect04";
import Axios01 from "./ch04/Axios01";
import Promise01 from "./ch04/Promise01";
import Axios02 from "./ch04/Axios02";

const appObj = {
  //컴포넌트 렌더링
    ch01: <App01 />, 
    ch02: <App02 />, 
    counter: <Counter/>,
    ch02_2: <App02_2 />,
    ch02_3: <App02_3 />,
    ch02_4: <App02_4 />,
    ch02_5: <App02_5 />,
    inputs: <Inputs />,
    searchName: <SearchName />,
    searchNamev2: <SearchNamev2 />,
    useEffect01: <UseEffect01 />,
    useEffect03: <UseEffect03 />,
    useEffect04: <UseEffect04 />,
    axios01: <Axios01 />,
    axios02: <Axios02 />,
    promise01: <Promise01 />,
}

// render()안에 있는 항목을 렌더링시킴
createRoot(document.getElementById('root')).render(appObj.axios02);

