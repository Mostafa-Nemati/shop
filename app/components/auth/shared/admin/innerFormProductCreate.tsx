import { Form, FormikProps } from "formik"
import Input from "../../../Input"
import { MyFormProductCreate } from "../../../../constant/admin"
import Textarea from "../../../textarea"
import SelectBox from "../../../selectbox"
import Product from "../../../../models/product"

type ProductFormProps = FormikProps<MyFormProductCreate> & {
    product: Product
}

const InnerProductCreateForm = (props: ProductFormProps) => {
    return (
        <Form>
            <div className="p-6 grid grid-cols-1 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                <div className="sm:col-span-2">
                    <Input
                        name="title"
                        type="text"
                        label="نام محصول"
                    />
                </div>

                <div className="sm:col-span-2">
                    <SelectBox
                        name="category_id"
                        label="دسته بندی"
                        options={
                            [
                                { label: 'لطفا انتخاب کنید', value: '' },
                                { label: 'جاوااسکریپت', value: 1 },
                                { label: 'پی اچ پی', value: 2 }
                            ]
                        }
                    />
                </div>

                <div className="sm:col-span-2">
                    <Input
                        name="price"
                        type="text"
                        label="قیمت محصول"
                    />
                </div>

                <div className="sm:col-span-4">
                    <Textarea
                        name="description"
                        label="درباره محصول"
                        onChange={(e) => props.setFieldValue('description', (e.target as HTMLTextAreaElement).value)}
                    />
                </div>
            </div>

            <div className="p-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center">
                <button
                    type="submit"
                    className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-700 ">
                    {
                        props?.product ? 'ثبت تغییرات' : 'ایجاد محصول'
                    }
                </button>
                <button
                    onClick={() => { }}
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">انصراف</button>
            </div>
        </Form>
    )
}
export default InnerProductCreateForm