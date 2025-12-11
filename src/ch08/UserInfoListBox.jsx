import { useUserInfoList } from "./store/zustandStore";

function UserInfoListBox() {
    const {userInfoList} = useUserInfoList();
    
        return <ul>
            {
                userInfoList.map(user =><><li>사용자명:{user.username} 이메일: {user.email} 연락처: {user.phone}</li></>)
            }
        </ul>
    }
    

export default UserInfoListBox;