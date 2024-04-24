import axios from "axios";
import validationError from "../../app/exceptions/validationError";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        error => Promise.reject(error)
    )

    axiosInstance.interceptors.response.use(
        res => {
            return res
        },
        error => {
            const res = error?.response
            if (res) {
                if (res.status === 422) {
                    throw new validationError(res.data.errors)
                }
            }
            Promise.reject(error)
        }
    )

    return axiosInstance
}

export default callApi;