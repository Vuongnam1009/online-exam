import axiosClient from "./axiosClient";

const contestApi = {
  getAll: (params) => {
    const url = "/contests/";
    return axiosClient.get(url, { params });
  },
  deleteContest: (id) => {
    const url = `/contests/${id}`;
    return axiosClient.delete(url);
  },
};
export default contestApi;
