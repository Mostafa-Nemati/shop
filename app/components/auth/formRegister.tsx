import { withFormik } from "formik"
import * as yup from 'yup'
import { MyFormValuesRegister } from "../../constant/auth"
import InnerRegisterForm from "./shared/innerFormRegister"

const validationFormRegister = yup.object().shape({
    name: yup.string().required().min(4),
    email: yup.string().required().email(),
    password: yup.string().required().min(8)
})

interface RegisterFormProps {
    name? : string
}

const FormRegister  = withFormik<RegisterFormProps, MyFormValuesRegister>({
    mapPropsToValues : props => ({
        name : props.name ?? '',
        email:'',
        password:''
    }),
    validationSchema: validationFormRegister,
    handleSubmit : (values) => {
        console.log(values)
    }
})(InnerRegisterForm)

export default FormRegister;