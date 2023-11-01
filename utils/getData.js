import axiosInstance from "./axios";

export default async function getData(query, variables = {}) {
  try {
    const { data } = await axiosInstance.post('', {
      query,
      variables,
    })
    console.log("data", data);
    return data
  } catch (error) {
    console.log(error, "error");
  }
}
