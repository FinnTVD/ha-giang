import axiosInstance from "./axios";

export default async function getDataDetail(query, slug) {
  try {
    const { data } = await axiosInstance.post('', {
      query,
      variables: { slug: slug },
    })
    console.log("data", data);
    return data
  } catch (error) {
    console.log(error, "error");
  }
}
