import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesLogin } from "../../constant/auth"
import InnerLoginForm from "./shared/innerFormLogin"

const validationFormLogin = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface LoginFormProps {
}

const FormLogin  = withFormik<LoginFormProps, MyFormValuesLogin>({
    mapPropsToValues : props => ({
        email:'',
        password:''
    }),
    validationSchema: validationFormLogin,
    handleSubmit : (values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default FormLogin;