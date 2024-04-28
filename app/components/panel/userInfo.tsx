import { useAppSelector } from "../../hooks"
import useAuth from "../../hooks/useAuth"
import { selectUser } from "../../store/auth"

const UserInfo = () => {
    //const { user } = useAuth();
    
    //uer reducer
    const user = useAppSelector(selectUser); 

    return (
        <>
            <span>userName : </span>
            <h2>{user?.name}</h2>
        </>
    )
}

export default UserInfo