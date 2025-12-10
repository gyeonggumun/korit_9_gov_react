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
import Test01 from "./ch04/Test01";
import Axios03 from "./ch04/Axios03";
import Axios04 from "./ch04/Axios04";
import Axios05 from "./ch04/Axios05";
import Auth01 from "./ch05/Auth01";
import Auth02 from "./ch05/Auth02";
import Router01 from "./ch06/Router01";
import Router02 from "./ch06/Router02";
import Router03 from "./ch06/Router03";
import Router04 from "./ch06/Router04";
import Router05 from "./ch06/Router05";

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
    axios03: <Axios03 />,
    axios04: <Axios04 />,
    axios05: <Axios05 />,
    promise01: <Promise01 />,
    test01: <Test01 />,
    auth01: <Auth01 />,
    auth02: <Auth02 />,
    router01: <Router01 />,
    router02: <Router02 />,
    router03: <Router03 />,
    router04: <Router04 />,
    router05: <Router05 />,
}

// render()안에 있는 항목을 렌더링시킴
createRoot(document.getElementById('root')).render(appObj.router05);

