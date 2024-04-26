import useSWR from "swr"
import callApi from "../../pages/api/callApi"
import Cookies from "universal-cookie"

const useAuth = () => {
    const cookies = new Cookies()
    const { data, error } = useSWR('user_me', () => {
        return callApi().get('/user', {
            headers : {
                authorization : cookies.get('shop_Token')
            }
        })
    }) 
    return { user : data?.data?.user, error, loading : !data && !error };
}
export default useAuth