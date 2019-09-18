import { ItemModel, ServiceResponse } from '@gktest/test-commons';
import * as request from 'supertest';

export class SuperTestApi {
  private basePath: string;
  private httpClient = request('');
  private authJwt: string;

  constructor(basePath: string, authJwt?: string) {
    this.basePath = basePath;
    this.httpClient = request.agent(basePath);
    this.authJwt = authJwt;
  }

  public async getList(endpoint: string): Promise<ServiceResponse<any>> {
    const path = `/${endpoint}`;
    return await this.httpClient.get(path);
  }

  public async createDetails(endpoint: string, itemModels: ItemModel[]): Promise<ServiceResponse<any>> {
    const path = `/${endpoint}`;
    return await this.httpClient.post(path);
  }
  public async updateDetails(endpoint: string, itemModels: ItemModel[]): Promise<ServiceResponse<any>> {
    const path = `/${endpoint}`;

    return await this.httpClient.post(path);
  }

  public async deleteItem(endpoint: string, id: number): Promise<ServiceResponse<any>> {
    const path = `/${endpoint}/${id}`;
    return await this.httpClient.delete(path);
  }
}
