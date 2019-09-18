import { UsersDAO } from '@gktest/supertest-api-client';

const conf = require(process.cwd() + '/config');

describe('Basic Database Tests', () => {
  let userDAO: UsersDAO;
  jest.setTimeout(100000);

  afterEach(() => {
    userDAO.shutDown();
  });

  test('GetUsers', async () => {
    userDAO = new UsersDAO(conf.db_database);

    await userDAO.selectFromUsers();
  });
});
