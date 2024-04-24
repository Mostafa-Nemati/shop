import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormPhoneVerify } from "../../constant/auth"
import InnerLoginForm from "./shared/innerFormLogin"
import callApi from "../../../pages/api/callApi"
import validationError from "../../exceptions/validationError"
import InnerPhoneVerifyForm from "./shared/innerPhoneVerify"
const codeRegExp = /^[0-9]+$/

const validationFormLogin = yup.object().shape({
    code: yup.string().required().matches(codeRegExp, 'باید عدد وارد شود').length(6)
})

interface PhoneVerifyFormProps {
}

const FormPhoneVerify = withFormik<PhoneVerifyFormProps, MyFormPhoneVerify>({
    mapPropsToValues: props => ({
        token: '73f98b55-bb0c-4c49-9f2b-670e92c8918c',
        code:''
    }),
    validationSchema: validationFormLogin,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            // const res = await callApi().post('/auth/login', values)
            // if (res.status === 200) {
            //     console.log(res)
            // }
            console.log(values)
        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))

            }
        }
    }
})(InnerPhoneVerifyForm)

export default FormPhoneVerify;