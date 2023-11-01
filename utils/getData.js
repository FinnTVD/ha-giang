import axiosInstance from "./axios";

export default async function getData(query, variables = {}) {
  try {
    const { data } = await axiosInstance.post('', {
      query,
      variables,
    })
    return data
  } catch (error) {
    console.log(error, "error");
  }
}
