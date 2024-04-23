import type { NextPage } from 'next'
import FormLogin from '../../app/components/auth/formLogin';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
const Login : NextPage = () => {
    const [cookies, setCookies] = useCookies(['shop-token'])
    return (
        <>
            <h1>Login</h1>
            <FormLogin setCookies={setCookies}/>
        </>
    )
}

export default Login;