import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesLogin } from "../../constant/auth"
import InnerLoginForm from "./shared/innerFormLogin"
import callApi from "../../../pages/api/callApi"
import validationError from "../../exceptions/validationError"
const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/

const validationFormLogin = yup.object().shape({
    phone: yup.string().required().min(8).matches(phoneRegExp, 'the phone format is not correct')
})

interface LoginFormProps {
    setToken : (token : string) => void
    router: any
}

const FormLogin = withFormik<LoginFormProps, MyFormValuesLogin>({
    mapPropsToValues: props => ({
        phone: ''
    }),
    validationSchema: validationFormLogin,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login', values)
            if (res.status === 200) {
                props.setToken(res.data.token)
                props.router.push('/auth/login/step-two')
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))

            }
        }
    }
})(InnerLoginForm)

export default FormLogin;