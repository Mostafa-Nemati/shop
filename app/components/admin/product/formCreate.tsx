import { withFormik } from "formik"
import * as yup from 'yup'
import callApi from "../../../../pages/api/callApi"
import validationError from "../../../exceptions/validationError"
import InnerProductCreateForm from "../../auth/shared/admin/innerFormProductCreate"
import { MyFormProductCreate } from "../../../constant/admin"

const validationSchema = yup.object().shape({
    title: yup.string().required().min(8).max(255),
    category_id: yup.number().required(),
    print: yup.string().min(0),
    description: yup.string().required().min(4).max(6000)
})

interface ProductFormProps {
}

const FormProductCreate = withFormik<ProductFormProps, MyFormProductCreate>({
    mapPropsToValues: props => ({
        title: '',
        category_id: '',
        price: 0,
        description: ''
    }),
    validationSchema: validationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            console.log(values)
            //const res = await callApi().post('/auth/login', values)
            //if (res.status === 200) {
            //    props.router.push('/auth/login/step-two')
            //}
        } catch (error) {
            if (error instanceof validationError) {
                //Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))

            }
        }
    }
})(InnerProductCreateForm)

export default FormProductCreate;