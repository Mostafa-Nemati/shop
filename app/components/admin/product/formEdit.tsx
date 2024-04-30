import { withFormik } from "formik"
import * as yup from 'yup'
import callApi from "../../../../pages/api/callApi"
import validationError from "../../../exceptions/validationError"
import InnerProductCreateForm from "../../auth/shared/admin/innerFormProductCreate"
import { MyFormProductCreate } from "../../../constant/admin"
import Router from "next/router"
import { UpdateProduct } from "../../../services/product"
import { toast } from "react-toastify"
import Product from "../../../models/product"

const validationSchema = yup.object().shape({
    title: yup.string().required().min(8).max(255),
    category_id: yup.number().required(),
    print: yup.string().min(0),
    description: yup.string().required().min(4).max(6000)
})

interface ProductFormProps {
    product: Product
}

const FormProductEdit = withFormik<ProductFormProps, MyFormProductCreate>({
    mapPropsToValues: ({ product }) => ({
        title: product.title,
        category_id: product.category ?? "",
        price: product.price,
        description: product.body
    }),
    validationSchema: validationSchema,
    handleSubmit: async (values, { props, setFieldError }) => {
        try {
            await UpdateProduct(props.product.id, values)
            Router.push('/admin/products');
            toast.success('محصول مورد نظر با موفقیت ویرایش شد')

        } catch (error) {
            if (error instanceof validationError) {
                Object.entries(error.message).forEach(([key, value]) => setFieldError(key, value as string))
                return;
            }
            toast.error('مشکل در ویرایش به وجود امده است')

            console.log(error)
        }
    }
})(InnerProductCreateForm)

export default FormProductEdit;