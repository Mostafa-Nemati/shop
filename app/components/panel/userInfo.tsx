import { useRouter } from "next/router";
import { useAppSelector } from "../../hooks"
import { removeLoginToken } from "../../hooks/auth";
import useAuth from "../../hooks/useAuth"
import { selectUser } from "../../store/auth"

const UserInfo = () => {
    const router = useRouter();

    //const { user } = useAuth();
    const user = useAppSelector(selectUser);

    const logOutHandler = async () => {
        await removeLoginToken();
        await router.push('/')
    }

    return (
        <>
            <span>userName : </span>
            <h2>{user?.name}</h2>

            <button onClick={logOutHandler}>logOut</button>
        </>
    )
}

export default UserInfo