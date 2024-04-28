import axios from "axios";
import validationError from "../../app/exceptions/validationError";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            config.withCredentials = true
            return config
        },
        error => { throw error }
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
            throw error
        }
    )

    return axiosInstance
}

export default callApi;