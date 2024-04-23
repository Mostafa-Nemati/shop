import type { NextPage } from 'next'
import FormRegister from '../../app/components/auth/formRegister';
const Register : NextPage = () => {
    return (
        <>
            <h1>Register</h1>
            <FormRegister />
        </>
    )
}

export default Register;