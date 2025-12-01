import Swal from "sweetalert2";

function Promise01() {

    const axios = {
        get: (url) => {
            return new Promise((rs, rj) => {
                console.log(url + "로 요청");
                setTimeout(() => {
                    console.log("응답");
                    rs({
                        status: 200,
                        data: [10, 20, 30, 40],
                    });
                }, 2000);
            });
        }
    }

    axios.get("http://192.168.2.101:8080/nums")
    .then(r => {  // then 요청이 이루어지면서 위의 rs객체를 가지고 옴
        console.log(r);  // console에 찍어서 안에 뭐가 들어있는지 확인 후 다음 행위를 할 것
        console.log(r.status);
        console.log(r.data);
    
    })

    axios.get("http://192.168.2.101:8080/users")
    .then(r => {
        console.log(r);
        console.log(r.status);
        console.log(r.data);
    
    })

    const getRequest = async (url) => {
        const r = await axios.get(url);
        console.log(r);
        console.log(r.status);
        console.log(r.data);
        return r;   // 여러개의 주소를 변수에 담으려고 하면 return값을 주어야 한다
    }

    const requests = async () => {  // 여러개의 주소값 순서대로 호출
        const r1 = await getRequest("http://192.168.2.101:8080/nums");
        const r2 = await getRequest("http://192.168.2.101:8080/names");
        const r3 = await getRequest("http://192.168.2.101:8080/products");
    }

    // useEffect에는 async를 걸어줄 수 없음 then으로 처리
    // async를 사용하려면 함수를 정의 하여 사용해주어야함
    useEffect(() => {  
        const a = async () => {
            await getRequest();
        };
        a();
    }, []);

    const handleOnclick = async () => {
        // Swal.fire({
        //     title: "알림내용",
        //     showCancelButton: true,
        //     input: "text",
        // }).then((r) => {
        //     console.log(r);
        //     console.log("콘솔");
        // })
        // alert("알림 내용");

        const rs = await Swal.fire({title: "타이틀", input: "text"});
        console.log(rs);
    }


    return <>
        <button onClick={handleOnclick}>클릭</button>
    </>

}

export default Promise01;