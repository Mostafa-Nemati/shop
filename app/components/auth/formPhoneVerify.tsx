import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormPhoneVerify } from "../../constant/auth"
import validationError from "../../exceptions/validationError"
import InnerPhoneVerifyForm from "./shared/innerPhoneVerify"
import callApi from "../../../pages/api/callApi"
import Router from "next/router"
const codeRegExp = /^[0-9]+$/

const validationFormLogin = yup.object().shape({
    code: yup.string().required().matches(codeRegExp, 'باید عدد وارد شود').length(6)
})

interface PhoneVerifyFormProps {
    token?: string,
    clearToken: () => void
}

const FormPhoneVerify = withFormik<PhoneVerifyFormProps, MyFormPhoneVerify>({
    mapPropsToValues: props => ({
        code: '',
        token: props.token || ""
    }),
    validationSchema: validationFormLogin,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            const res = await callApi().post('/auth/login/verify-phone', values)
            if (res.status === 200) {
                props.clearToken()
                Router.push('/')
            }
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))

            }
        }
    }
})(InnerPhoneVerifyForm)

export default FormPhoneVerify;