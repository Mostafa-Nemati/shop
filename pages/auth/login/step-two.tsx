import FormPhoneVerify from '../../../app/components/auth/formPhoneVerify';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectPhoneVerifyToken } from '../../../app/store/auth';
import { useEffect } from 'react';
import Router from 'next/router';
import { updatePhoneVerifyToken } from '../../../app/store/auth';
import { NextPageWithLayout } from '../../_app';
import GuestLayout from '../../../app/components/guestLayout';
const PhoneVerify: NextPageWithLayout = () => {

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
PhoneVerify.getLayout = page => <GuestLayout>{page}</GuestLayout>

export default PhoneVerify;