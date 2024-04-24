import type { NextPage } from 'next'
import FormPhoneVerify from '../../../app/components/auth/formPhoneVerify';
import { useAppSelector } from '../../../app/hooks';
import { selectPhoneVerifyToken } from '../../../app/store';
import { useEffect } from 'react';
import Router from 'next/router';
const PhoneVerify : NextPage = () => {

    const token = useAppSelector(selectPhoneVerifyToken);
    useEffect(() => {
        if(token == undefined) {
            Router.push('/auth/login')
        }
    }, [token])

    return (
        <>
            <h1>Login Phone Verify</h1>
            <FormPhoneVerify />
        </>
    )
}

export default PhoneVerify;