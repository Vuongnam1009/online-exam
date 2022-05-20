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
  getQuestions: async ({idQ,id})=>{
  const questions = (id)=>{
    const url = `/groupQuestions/${id}/queston`;
    return axiosClient.get(url)
  }
  const contest =(idQ)=>{
    const url = `/contests/${idQ}`;
    return axiosClient.get(url)
  }
  const a = await questions(id)
  const b = await contest(idQ)
  return {
    questions: a,
    examTime: b.examTime
  }
}}
export default contestApi;
