import axios from "axios";

function Axios04() {
    const api = axios.create({
        baseURL: "http://localhost:8080",
    });

    
    const reqGetOnClick1 = () => {
        api.get("/req/data1?a=aaaaa&b=10");
    }
    
    const reqGetOnClick2 = () => {
        api.get("/req/data2",{
            params: {
                a: "abc",
                b: 10000,
            },
        });
    }

    const reqGetOnClick3 = () => {
        api.get("/req/data3", {
            params: {
                name: "문경구",
                age: 25,
            },
        })
    }

    const reqGetOnClick7 = () => {
        api.get("/req/abc/data7/20", {
            params: {
                name: "문경구",
                age: 25,
            },
        })
    }
    
    
    return <>
        <button onClick={reqGetOnClick1}>reqGet1</button>
        <button onClick={reqGetOnClick2}>reqGet2</button>
        <button onClick={reqGetOnClick3}>reqGet3</button>
        <button onClick={reqGetOnClick7}>reqGet7</button>
        <button>8</button>
        <button>9</button>
        <button>10</button>
    </>
}

export default Axios04;