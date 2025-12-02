import axios from "axios"
import { useRef, useState } from "react";

function Axios03() {
    const registerUsernameInputRef = useRef();  // focus이동을 유연하게하기위해 useRef생성
    const registerPasswordInputRef = useRef();  
    // 엔터를 눌러 다음 input창으로 넘어가도록 설계하기위해 여러 input의 순서대로 넘어가게하기위해 배열을 사용
    // 순서나 묶음을 나타내면 배열을 떠올릴 것
    const [registerInputValue, setRegisterInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        role1: "",
        role2: "", 
    });
    const [inputValue, setInputValue] = useState({
        username: "",
    });

    const [users, setUsers] = useState([]);
    // params: {백엔드 키값: 프론트에서 받은데이터가 들어있는 곳} 으로 구성
    const getUsersApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users", {
            params: {
                aaa: inputValue.username,
            }
        });
        setUsers(response.data)
    }
    
    const handleRegisterInputOnChange = (e) => {
        const [name, value] = e.target
        setRegisterInputValue({
            ...registerInputValue,
            [name]: value
        })
    }

    const handleRegisterInputOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            // e.target.nextSibling.focus(); // 엔터 눌렀을 대 다음 input으로 이동
            console.log(registerUsernameInputRef);
            console.log(registerPasswordInputRef);
            registerPasswordInputRef.current.focus();
        }
    }

    const handleInputOnChange = (e) => {
        const {name, value} = e.target; 
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }
    
    const handleInputOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            getUsersApi();
        }
    }

    const handleSearchOnClick = () => {
        getUsersApi();
    }

    return <>
        <div>
            <input type="text" ref={registerUsernameInputRef} placeholder="username" name="username" value={registerInputValue.username} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown} onFocus={(e) => {console.log(e)}}/>
            <input type="text" ref={registerPasswordInputRef} placeholder="password" name="password" value={registerInputValue.password} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown} />
            <input type="text" placeholder="name" name="name" value={registerInputValue.name} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown} />
            <input type="text" placeholder="email" name="email" value={registerInputValue.email} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown} />
            <input type="text" placeholder="role1" name="role1" value={registerInputValue.role1} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown}/>
            <input type="text" placeholder="role2" name="role2" value={registerInputValue.role2} onChange={handleRegisterInputOnChange} onKeyDown={handleRegisterInputOnKeyDown}/>
            <button >등록</button>
        </div>
        <input type="text" 
            name="username" 
            value={inputValue.username}  
            onChange={handleInputOnChange}
            onKeyDown={handleInputOnKeyDown}/>
        <button onClick={handleSearchOnClick}>검색</button>
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

export default Axios03;