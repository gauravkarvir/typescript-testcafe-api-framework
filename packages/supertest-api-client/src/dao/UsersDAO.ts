import * as mysql from 'mysql';
import * as util from 'util';
import { ModuleData } from './UsersDAOTypes';

export class UsersDAO {
  private dbConfig: any;
  private pool: any;

  constructor(dbConfig) {
    this.dbConfig = dbConfig;
    this.pool = mysql.createPool(dbConfig);
    this.pool.query = util.promisify(this.pool.query);
  }

  public shutDown() {
    return this.pool.end(error => {
      console.log('All database connections closed');
    });
  }

  public async selectFromUsers() {
    const SQL_QUERY = 'select \n' + 'from users';

    console.log(`SQL => ${SQL_QUERY}`);

    const results = await this.pool.query(SQL_QUERY);
    return results[0];
  }

  public async getDetails(city: string): Promise<ModuleData> {
    const SQL_QUERY = 'SELECT \n' + 'FirstName \n' + 'FROM \n' + 'users  \n' + 'WHERE city = ?';

    console.log(`SQL => ${SQL_QUERY} \nSQL Parameters: ${JSON.stringify(arguments)}`);
    const results = await this.pool.query(SQL_QUERY, city);
    return results[0];
  }
}
