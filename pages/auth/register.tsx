import type { NextPage } from 'next'
import FormRegister from '../../app/components/auth/formRegister';
import { useRouter } from 'next/router';
const Register : NextPage = () => {
    const router = useRouter()
    return (
        <>
            <h1>Register</h1>
            <FormRegister router={router}/>
        </>
    )
}

export default Register;