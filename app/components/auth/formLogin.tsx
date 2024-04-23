import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesLogin } from "../../constant/auth"
import InnerLoginForm from "./shared/innerFormLogin"
import callApi from "../../../pages/api/callApi"

const validationFormLogin = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface LoginFormProps {
    setCookies: any
}

const FormLogin  = withFormik<LoginFormProps, MyFormValuesLogin>({
    mapPropsToValues : props => ({
        email:'',
        password:''
    }),
    validationSchema: validationFormLogin,
    handleSubmit : async (values, {props}) => {
        const res = await callApi().post('/auth/login', values)
        if(res.status === 200) {
            props.setCookies('shop-token', res.data.token, {
                'maxAge': 3600 * 24 *30,
                'domain': 'localhost',
                'path':'/',
                'sameSite':'lax' 
            })
            console.log(res.data.token)
        }
    }
})(InnerLoginForm)

export default FormLogin;