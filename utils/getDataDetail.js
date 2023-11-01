import axiosInstance from "./axios";

export default async function getDataDetail(query, slug) {
  try {
    const { data } = await axiosInstance.post('', {
      query,
      variables: { slug: slug },
    })
    return data
  } catch (error) {
    console.log(error, "error");
  }
}
