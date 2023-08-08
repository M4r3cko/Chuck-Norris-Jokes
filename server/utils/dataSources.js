import { RESTDataSource } from "@apollo/datasource-rest";
import { API_PATH_CATEGORIES, API_PATH_JOKES } from "./constans.js";
export class ChuckNorrisJokesAPI extends RESTDataSource {
  constructor() {
    super(...arguments);
    this.baseURL = "https://api.chucknorris.io/jokes/";
  }
  async getAllCategories() {
    return await this.get(API_PATH_CATEGORIES);
  }
  async getAllJokes() {
    return await this.get(API_PATH_JOKES);
  }
}
