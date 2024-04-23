import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesRegister } from "../../constant/auth"
import InnerRegisterForm from "./shared/innerFormRegister"
import callApi from "../../../pages/api/callApi"

const validationFormRegister = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface RegisterFormProps {
    name? : string
    router : any
}

const FormRegister  = withFormik<RegisterFormProps, MyFormValuesRegister>({
    mapPropsToValues : props => ({
        name : props.name ?? '',
        email:'',
        password:''
    }),
    validationSchema: validationFormRegister,
    handleSubmit : async (values, {props}) => {
        const res = await callApi().post('/auth/register', values);
        if(res.status === 201) {
            props.router.push('/auth/login')
        }
    }
})(InnerRegisterForm)

export default FormRegister;