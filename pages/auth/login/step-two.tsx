import type { NextPage } from 'next'
import FormPhoneVerify from '../../../app/components/auth/formPhoneVerify';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectPhoneVerifyToken } from '../../../app/store';
import { useEffect } from 'react';
import Router from 'next/router';
import { updatePhoneVerifyToken } from '../../../app/store/auth';
const PhoneVerify: NextPage = () => {

    const token = useAppSelector(selectPhoneVerifyToken);
    const dispatch = useAppDispatch();
    const clearPhoneVerifyToken = () => {
        dispatch(updatePhoneVerifyToken(undefined))
    }
    useEffect(() => {
        Router.beforePopState(() => {
            clearPhoneVerifyToken();
            return true
        })

        if (token == undefined) {
            Router.push('/auth/login')
        }
    }, [token])

    return (
        <>
            <h1>Login Phone Verify</h1>
            <FormPhoneVerify token={token} clearToken={clearPhoneVerifyToken} />
        </>
    )
}

export default PhoneVerify;