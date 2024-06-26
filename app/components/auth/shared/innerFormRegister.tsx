import { Form, FormikProps } from "formik"
import { MyFormValuesRegister } from "../../../constant/auth"
import Input from "../../Input"

const InnerRegisterForm = (props : FormikProps<MyFormValuesRegister>) => {
    return (
        <Form className="max-w-sm mx-auto mt-10">
            <div className="mb-5">
                <Input name='name' type='text' label='Your name' />
            </div>
            <div className="mb-5">
                <Input name='phone' type='text' label='Your phone' />
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </Form>
    )
}

export default InnerRegisterForm