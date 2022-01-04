import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default class PostGetAPI {
  static async getAPI() {
    try {
      const response = await axios(URL)
      return response.data
    } catch (error) {
      return 'error'
    }
  }
}
