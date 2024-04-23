import type { NextPage } from 'next'
import FormLogin from '../../app/components/auth/formLogin';
const Login : NextPage = () => {
    return (
        <>
            <h1>Login</h1>
            <FormLogin />
        </>
    )
}

export default Login;