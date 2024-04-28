import type { NextPage } from 'next'
import FormLogin from '../../../app/components/auth/formLogin';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../../app/hooks';
import { updatePhoneVerifyToken } from '../../../app/store/auth';
import { NextPageWithLayout } from '../../_app';
import GuestLayout from '../../../app/components/guestLayout';

const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const setPhoneVerifyToken = (token: string) => {
        dispatch(updatePhoneVerifyToken(token))
    }

    return (
        <>
            <h1>Login</h1>
            <FormLogin setToken={setPhoneVerifyToken} router={router} />
        </>
    )
}
Login.getLayout = page => <GuestLayout>{page}</GuestLayout>
export default Login;