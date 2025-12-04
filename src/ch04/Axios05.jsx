import axios from "axios";
import { useState } from "react";

function Axios05() {
    
    const api = axios.create({
        baseURL: "http://localhost:8080",
    });

    
    const [resp1Data, setResp1Data] = useState("");
    const resp1OnClick = () => {
        api.get("/resp/data")
            .then((axiosResponse) => {
                console.log(axiosResponse);
                setResp1Data(axiosResponse.data);
            })
   }

   const [resp2Data, setResp2Data] = useState({});
   const resp2OnClick = () => {
        api.get("/resp/data2")
          .then((axiosResponse) => {
                console.log(axiosResponse);
                setResp2Data(axiosResponse.data);
            })
   }

   const [resp3Data, setResp3Data] = useState([]);
   const resp3OnClick = () => {
        api.get("/resp/data3")
          .then((axiosResponse) => {
                console.log(axiosResponse);
                setResp3Data(axiosResponse.data);
            })
   }

   const [resp4Data, setResp4Data] = useState({});
   const resp4OnClick = () => {
        api.get("/resp/data4")
          .then((axiosResponse) => {
                console.log(axiosResponse);
                setResp4Data(axiosResponse.data);
            })
   }

   
   
    return <>
        <div>
            <button onClick={resp1OnClick}>resp1</button>
            <span>{resp1Data}</span>
        </div>
        <div>
            <button onClick={resp2OnClick}>resp2</button>
            <span>key1: {resp2Data.key1}, key2: {resp2Data.key2}</span>
            <span>
                {Object.entries(resp2Data).map(([key, value])=> {
                    return`${key}:${value}`;
                })}
            </span>
        </div>
        <div>
            <button onClick={resp3OnClick}>resp3</button>
            <span>{resp3Data.map((r) => 10 * r + " ")}</span>
            {
                resp3Data.map(data => <span>{data * 10} </span>)
            }
        </div>
        <div>
            <button onClick={resp4OnClick}>resp4</button>
            <ul>
                <li>이름 : {resp4Data.name}</li>
                <li>이메일 : {resp4Data.email}</li>
                <li>str : {resp4Data.strs || "빈 문자열"}</li>
                <li>address1 : {resp4Data.reqJsonDto2?.address1 ?? "주소없음"}</li>  {/* ?? 는 null값을 대체 한다는 뜻 널이 아니면 || 사용*/}
                <li>address2 : {resp4Data.reqJsonDto2?.address2 ?? "주소없음"}</li>  {/* 객체가 비어있을 때 출력 방법 or 상태를 정의 할 때 빈 값을 미리 정의*/}
                
            </ul>
            <ul>
                {Object.entries(resp4Data).map(([key, value]) => {
                    if (key === "reqJsonDto2") {
    
                        return <>
                            {
                                Object.entries(value).map(([key2, value2]) => {
                                    return <li>{key2}: {value2}</li>
                                })
                            }
                        </>
                    }
                    return <li>{key}: {value}</li>
                })}
            </ul>
        </div>
        <div>
            <a href="http://localhost:8080/resp/data5?filename=download_test.txt">download_test.txt</a>
        </div>
        <div>
            <a href="http://localhost:8080/resp/data5?filename=테스트.txt">테스트.txt</a>
        </div>
    </>
}

export default Axios05;