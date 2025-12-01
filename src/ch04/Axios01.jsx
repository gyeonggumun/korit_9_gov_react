import axios from "axios";

function Axios01() {
   const response = axios.get("http://192.168.2.101:8080/users");
   response.then(response => {
    console.log(response.data);
   })
   
   
   return <>

    </>
}

export default Axios01;