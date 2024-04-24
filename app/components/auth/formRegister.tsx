import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesRegister } from "../../constant/auth"
import InnerRegisterForm from "./shared/innerFormRegister"
import callApi from "../../../pages/api/callApi"
const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

const validationFormRegister = yup.object().shape({
    name: yup.string().required().min(4),
    phone: yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
})

interface RegisterFormProps {
    name? : string
    router : any
}

const FormRegister  = withFormik<RegisterFormProps, MyFormValuesRegister>({
    mapPropsToValues : props => ({
        name : props.name ?? '',
        phone:'',
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