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
    
    const reqPostOnClick1= () => {
        const data = {
            name: "test",
            age: 32,
            address: "test address",
        }

        // Object -> JSON
        const jsonData = JSON.stringify(data);
        // JSON -> Object
        const obj = JSON.parse(jsonData);

        // axios는 자동으로 JSON 변환
        api.post("/req/data1", data);
    }

    const reqPostOnClick2 = () => {
        api.post("/req/data2", {
            name: "문경구",
            age: 25,
        });
    }

    // 파일만 보내기
    const reqPostOnClick3 = () => {  
        // <input type="file"> 과 동일
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        
        inputElement.onchange = (e) => {
            const {files} = e.target;
            const [file] = files;

            const formData = new FormData();
            formData.append("file", file);
            api.post("/req/data3", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        }
        inputElement.click();

    }

    // file 데이터와 다른 정보들을 함께 보내기
    const reqPostOnClick4 = () => {  
        // <input type="file"> 과 동일
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        
        inputElement.onchange = (e) => {
            const {files} = e.target;
            const [file] = files;

            const formData = new FormData();
            formData.append("file", file);
            formData.append("name", "문경구");
            formData.append("age", 25);

            api.post("/req/data4", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
        }
        inputElement.click();
    }

    // 여러개의 파일을 한번에 보내기
    const reqPostOnClick5 = () => {
        const inputElement = document.createElement("input");
        inputElement.setAttribute("type", "file");
        inputElement.setAttribute("multiple", true);

        inputElement.onchange = (e) => {
            const {files} = e.target;
            const fileList = Array.from(files);

            const formData = new FormData();
            fileList.forEach(file => formData.append("files", file));
        

            api.post("/req/data5", formData);
        }
        
        inputElement.click();
    }
    
    const reqPutOnClick = () => {
        api.put("/req/data1/30", {
            name: "김준이",
            age: 33,
        });
    }

    const reqPatchOnClick = () => {
        api.patch("/req/data1/30", {
            name: "김준이",
        });
    }

    // 일반적으로 delete는 정보를 하나만 보냄
    const reqDeleteOnClick = () => {
        api.delete("/req/data1/20", {
            data: {
                name: "문경구",
            }
        });
    }

    
    return <>
        <button onClick={reqGetOnClick1}>reqGet1</button>
        <button onClick={reqGetOnClick2}>reqGet2</button>
        <button onClick={reqGetOnClick3}>reqGet3</button>
        <button onClick={reqGetOnClick7}>reqGet7</button>
        <button onClick={reqPostOnClick1}>reqPost1</button>
        <button onClick={reqPostOnClick2}>reqPost2</button>
        <button onClick={reqPostOnClick3}>reqPost3</button>
        <button onClick={reqPostOnClick4}>reqPost4</button>
        <button onClick={reqPostOnClick5}>reqPost5</button>
        <button onClick={reqPutOnClick}>reqPut</button>
        <button onClick={reqPatchOnClick}>reqPatch</button>
        <button onClick={reqDeleteOnClick}>reqDelete</button>
        
    </>
}

export default Axios04;