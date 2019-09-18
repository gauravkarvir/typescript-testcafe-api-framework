import axios, { AxiosInstance } from 'axios';
import { ItemModel, GenericResponse } from '@gktest/test-commons';

export class AxiosTestApi {
  private basePath: string;
  private authJwt: string;

  private httpClient: AxiosInstance;

  constructor(basePath: string, authJwt: string) {
    this.basePath = basePath;
    this.authJwt = authJwt;
    const options = {
      baseURL: basePath,
    };
    this.httpClient = axios.create(options);
  }

  public async getList(endpoint: string): Promise<GenericResponse<any>> {
    const path = `/${endpoint}`;
    const response: GenericResponse<any> = await this.httpClient.get(path);
    return response;
  }

  public async createDetails(endpoint: string, itemModels: ItemModel[]): Promise<GenericResponse<any>> {
    const path = `/${endpoint}`;
    const response: GenericResponse<any> = await this.httpClient.post(path, itemModels);
    return response;
  }

  public async updateDetails(endpoint: string, itemModels: ItemModel[]): Promise<GenericResponse<any>> {
    const path = `/${endpoint}`;
    const response: GenericResponse<any> = await this.httpClient.put(path, itemModels);
    return response;
  }

  public async deleteItem(endpoint: string, id: number): Promise<GenericResponse<any>> {
    const path = `/${endpoint}/${id}`;
    const response: GenericResponse<any> = await this.httpClient.delete(path);
    return response;
  }
}
