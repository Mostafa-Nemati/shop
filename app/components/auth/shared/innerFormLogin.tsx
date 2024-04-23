import { Form, FormikProps } from "formik"
import { MyFormValuesLogin } from "../../../constant/auth"
import Input from "../../Input"

const InnerLoginForm = (props : FormikProps<MyFormValuesLogin>) => {
    return (
        <Form className="max-w-sm mx-auto mt-10">
            <div className="mb-5">
                <Input name='email' type='email' label='Your email' />
            </div>
            <div className="mb-5">
                <Input name='password' type='password' label='Your password' />
            </div>
        
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </Form>
    )
}
export default InnerLoginForm