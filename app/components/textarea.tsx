import { ErrorMessage, Field, FieldProps } from 'formik';
import { ChangeEvent } from 'react';

interface TextareaProps {
    name: string,
    label: string,
    rows?: number,
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    onChange?: (e: ChangeEvent) => void

}

export default function Textarea({ name, label, inputClassName, rows = 5, errorClassName, labelClassName, onChange }: TextareaProps) {
    return (
        <>
            <label htmlFor={name} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName ?? ''}`}>{label}</label>
            <Field id={name} name={name} >
                {
                    ({ field, meta }: FieldProps) => (
                        <textarea
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName ?? ''}`}
                            id={name}
                            rows={rows}
                            {...field}
                            onChange={onChange || field.onChange}
                        />
                    )
                }
            </Field>
            <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div" />
        </>
    )
}