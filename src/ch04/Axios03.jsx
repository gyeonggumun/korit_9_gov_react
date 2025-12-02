import axios from "axios";
import { useRef, useState } from "react";

function Axios03() {
    // 리액트는 가상돔을 이용하여 수정해야하기 때문에 직접 간섭하여 수정하지않고 ref를 이용하여 수정해주어야함
    // useRef를 여러개 생성해야 하기 때문에 객체로 생성
    // focus이동을 유연하게하기위해 useRef생성
    const registerInputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef(),
        email: useRef(),
        role1: useRef(),
        role2: useRef(),
    }
    // 엔터를 눌러 다음 input창으로 넘어가도록 설계하기위해 여러 input의 순서대로 넘어가게하기위해 배열을 사용
    // 순서나 묶음을 나타내면 배열을 떠올릴 것
    const [ registerInputValue, setRegisterInputValue ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
        role1: "",
        role2: "",
    });

    const [ inputValue, setInputValue ] = useState({
        username: "",
    });
    const [ users, setUsers ] = useState([]);
    // params: {백엔드 키값: 프론트에서 받은데이터가 들어있는 곳} 으로 구성
    const getUsersApi = async () => {
        const response = await axios.get("http://192.168.2.101:8080/users", {
            params: {
                username: inputValue.username,
            }
        })
        setUsers(response.data);
    }

    const handleRegisterInputOnChange = (e) => {
        const { name, value } = e.target;
        setRegisterInputValue({
            ...registerInputValue,
            [name]: value,
        });
    }

    const handleRegisterInputNextFocusOnKeyDown = (e, nextRef) => {
        if (e.key === 'Enter') {
            nextRef.current.focus();
        }
    }

    const handleRegisterInputSubmitOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(registerInputValue);
            // const data = { // 데이터를 스웨거의 형식과 같도록 형식을 변환해줌
            //     username: registerInputValue.username,
            //     password: registerInputValue.password,
            //     name: registerInputValue.name,
            //     email: registerInputValue.email,
            //     roles : [registerInputValue.role1, registerInputValue.role2],
            // }
            const {role1, role2, ...data} = registerInputValue; // 위 코드를 레스트 문법으로 경량화
            data["roles"] = [role1, role2];                     // 레스트 문법으로 role1, role2를 빼고 만든 객체에 배열 roles키 값을 추가해줌
            axios.post("http://192.168.2.101:8080/users", data);
        }
    }

    const handleInputOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleInputOnKeyDown = (e) => {
        console.log(e)
        if (e.key === 'Enter') {
            getUsersApi();
        }
    }

    const handleSearchOnClick = () => {
        getUsersApi();
    }

    return <>
        <div>
            <div>
                <input type="text" 
                    ref={registerInputRef.username} 
                    placeholder="username" 
                    name="username" 
                    value={registerInputValue.username} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e) => handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.password)} />
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.password} 
                    placeholder="password" 
                    name="password" 
                    value={registerInputValue.password} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e) => handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.name)} />
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.name}  
                    placeholder="name" 
                    name="name" 
                    value={registerInputValue.name} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e) => handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.email)} />
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.email} 
                    placeholder="email" 
                    name="email" 
                    value={registerInputValue.email} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e) => handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role1)} />
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.role1}  
                    placeholder="role1" 
                    name="role1" 
                    value={registerInputValue.role1} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={(e) => handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role2)} />
            </div>
            <div>
                <input type="text" 
                    ref={registerInputRef.role2}  
                    placeholder="role2" 
                    name="role2" 
                    value={registerInputValue.role2} 
                    onChange={handleRegisterInputOnChange} 
                    onKeyDown={handleRegisterInputSubmitOnKeyDown}/>
            </div>
            <button>등록</button>
        </div>
        <input type="text" 
            name="username" 
            value={inputValue.username} 
            onChange={handleInputOnChange}
            onKeyDown={handleInputOnKeyDown} />
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
                        <td>{u.roles && u.roles[0]}</td>
                        <td>{u.roles && u.roles[1]}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Axios03;