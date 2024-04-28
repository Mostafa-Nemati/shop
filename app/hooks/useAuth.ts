import useSWR from "swr"
import callApi from "../../pages/api/callApi"
import Cookies from "universal-cookie"
import { useAppDispatch } from "."
import { updateUser } from "../store/auth"

const useAuth = () => {
    const dispatch = useAppDispatch();
    const cookies = new Cookies();

    const { data, error } = useSWR('user_me', () => {
        return callApi().get('/user')
    })

    dispatch(updateUser(data?.data?.user))

    return { user: data?.data?.user, error, loading: !data && !error };
}
export default useAuth