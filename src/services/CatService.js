import axios from "axios";

export default class CatService {
  constructor() {
    this.URI = process.env.REACT_APP_URI;
  }

  async images(limit = 15, page = 1) {
    const api = `${this.URI}/v1/images/search?limit=${limit}&page=${page}`;
    const response = await axios({url: api, headers: {"x-api-key": process.env.REACT_APP_API_KEY}});
    return response.data;
  }
}