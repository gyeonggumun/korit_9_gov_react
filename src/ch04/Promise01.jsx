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


    return <></>

}

export default Promise01;