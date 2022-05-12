import axiosClient from "./axiosClient"

const contestApi = {
    getAll: (params) => {
        const url = '/contests/'
        return axiosClient.get(url, { params })
    }
}
export default contestApi