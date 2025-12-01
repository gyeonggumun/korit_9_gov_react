import axios from "axios";
import { useState } from "react";
import "./style.css";

function Axios01() {
   const [users, setUsers] = useState([]);
   const [refetch, setRefetch] = useState(true);

    if(refetch) {
        axios.get("http://192.168.2.101:8080/users")
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
            setRefetch(false);
   })
    }

   
   
   
   return <>
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role1</th>
                    <th>role2</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(u => <tr>
                        <td>{u.username}</td>
                        <td>{u.password}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.roles[0]}</td>
                        <td>{u.roles[1]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Axios01;