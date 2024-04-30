import { withFormik } from "formik"
import * as yup from 'yup'
import callApi from "../../../../pages/api/callApi"
import validationError from "../../../exceptions/validationError"
import InnerProductCreateForm from "../../auth/shared/admin/innerFormProductCreate"
import { MyFormProductCreate } from "../../../constant/admin"
import Router from "next/router"
import { createProduct } from "../../../services/product"
import { toast } from "react-toastify"

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
            await createProduct(values)
            Router.push('/admin/products');
            toast.success('محصول مورد نظر با موفقیت ثبت شد')

        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))
                return;
            }
            toast.error('مشکل در صبت به وجود امده است')

            console.log(error)
        }
    }
})(InnerProductCreateForm)

export default FormProductCreate;