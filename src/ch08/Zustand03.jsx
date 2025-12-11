import { useState } from "react";
import UserInfoBox from "./UserInfoBox";
import { useUserInfoList } from "./store/zustandStore";
import UserInfoListBox from "./UserInfoListBox";

function Zustand03() {
    const [ user, setUser ] = useState({
        username: "",
        email: "",
        phone: "",
    });
   
    const {setUserInfoList} = useUserInfoList();

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnClick = () => {
        setUserInfoList(user);
    }


    
    return <div>
        <div>
            <input type="text" name="username" value={user.username} placeholder="사용자이름" onChange={handleOnChange}/>
            <input type="text" name="email" value={user.email} placeholder="이메일" onChange={handleOnChange}/>
            <input type="text" name="phone" value={user.phone} placeholder="연락처" onChange={handleOnChange}/>
            <button onClick={handleOnClick}>추가</button>
        </div>
        <UserInfoListBox />
    </div>
}

export default Zustand03;