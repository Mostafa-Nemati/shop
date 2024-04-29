import { ErrorMessage, Field, FieldProps } from 'formik';
import { ChangeEvent } from 'react';

interface selectBoxProps {
    label: string,
    value: any
}

interface SelectBoxProps {
    name: string,
    label: string,
    options: selectBoxProps[],
    inputClassName?: string,
    errorClassName?: string,
    labelClassName?: string,
    onChange?: (e: ChangeEvent) => void

}

export default function SelectBox({ name, label, inputClassName, options, errorClassName, labelClassName, onChange }: SelectBoxProps) {
    return (
        <>
            <label htmlFor={name} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName ?? ''}`}>{label}</label>
            <Field id={name} name={name} >
                {
                    ({ field, meta }: FieldProps) => (
                        <select
                            {...field}
                            className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${inputClassName ?? ''}`}
                            onChange={onChange || field.onChange}
                        >
                            {
                                options.map((option : selectBoxProps , index) => (
                                    <option key={index} value={option.value} defaultValue={option.value}>{option.label}</option>
                                ))
                            }
                        </select>
                    )
                }
            </Field>
            <ErrorMessage name={name} className={`text-red-500 text-sm ${errorClassName ?? ''}`} component="div" />
        </>
    )
}