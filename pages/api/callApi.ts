import axios from "axios";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL : 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {
            return config
        },
        error => console.log(error)
    )

    axiosInstance.interceptors.response.use(
        res => {
            return res
        },
        error => console.log(error)
    )

    return axiosInstance
}

export default callApi;