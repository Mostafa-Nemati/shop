import { ErrorMessage, Field } from 'formik';

interface InputProps {
    name: string,
    type: string,
    label: string,
    inputClassName? : string,
    errorClassName? : string,
    labelClassName? : string

}

export default function Input({name, type, label, inputClassName, errorClassName, labelClassName} : InputProps) {
    return (
        <>
            <label htmlFor={name} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName ?? ''}`}>{label}</label>
            <Field type={type} name={name} id={name} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName ?? ''}`} 
            />
            <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div"/>
        </>
    )
}