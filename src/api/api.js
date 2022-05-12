import axios from "axios"

const callAxios = () => {
  return axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
  })
}

export const endPoint = {
  getPostsList() {
    return callAxios().get("/posts")
  },
  getPostDetails(id) {
    return callAxios().get(`/posts/${id}`)
  },
  getPostcomments(id) {
    return callAxios().get(`/posts/${id}/comments`)
  },
}
