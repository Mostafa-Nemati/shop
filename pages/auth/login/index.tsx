import type { NextPage } from 'next'
import FormLogin from '../../../app/components/auth/formLogin';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../../app/hooks';
import { updatePhoneVerifyToken } from '../../../app/store/auth';

const Login : NextPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const setPhoneVerifyToken = (token : string) => {
        dispatch(updatePhoneVerifyToken(token))
    }

    return (
        <>
            <h1>Login</h1>
            <FormLogin setToken={setPhoneVerifyToken} router={router}/>
        </>
    )
}

export default Login;