
import {AxiosTestApi} from "@gktest/axios-api-client";
import {GenericResponse, ServiceResponse} from "@gktest/test-commons";
import {SuperTestApi} from "@gktest/supertest-api-client";
const conf = require(process.cwd() + '/config');

let axiosTestApi: AxiosTestApi = new AxiosTestApi(`${conf.api_url}`,'')
let superTestApi: SuperTestApi = new SuperTestApi(`${conf.api_url}`,'')
const {JSONPath} = require('jsonpath-plus');

interface User{
  userid:String;
  body:String;
  title:String;
  id:String;
}

describe('API tests', () =>
{
  test('Create Test Account via Axios', async () => {
    let response: GenericResponse<any> = await axiosTestApi.getList('posts/1')
    await expect(await response.status).toBe(200);
  })

  test('Get title for first user using JsonPath with supertest', async () => {
    const response: ServiceResponse<any> = await superTestApi.getList('posts')
    await expect(await response.status).toBe(200);
    const firstUserTitle = JSONPath('$..title',response.body[0])
    await expect(firstUserTitle.toString()).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

  })
  test('Get title for first user using Model object mapper with supertest', async () => {
    const response: ServiceResponse<User> = await superTestApi.getList('posts')
    const firstUser:User = await response.body[0];
    await expect(firstUser.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  })


  test('Find id from list of users for matching title from users response using Model object mapper with supertest and then update ', async () => {
    const response: ServiceResponse<User> = await superTestApi.getList('posts')
    const users:User[] = await response.body;
    const titleToCheck = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    let foundId :String = 'NOT FOUND'
    for (let eachUser of users){
      if (eachUser.title === titleToCheck){
        foundId  =  eachUser.id;
        break
      }
    }
    await expect(foundId).not.toBe('NOT FOUND');
    const updateResponse: ServiceResponse<User> = await superTestApi.updateUserWithId(`posts/${foundId}`);
    await expect(await updateResponse.status).toBe(200);
  })
})
