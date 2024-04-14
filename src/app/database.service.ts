import { Injectable, WritableSignal, signal } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

const DB_USERS = 'myuserdb';

export interface User {
  id: number;
  name: string;
  password: string;
  email: string; 

}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private users: WritableSignal<User[]> = signal<User[]>([]);

  constructor() { }

  async initializPlugin () {
    this.db = await this.sqlite.createConnection(
      DB_USERS,
      false,
      'no-encryption',
      1,
      false
    );

    await this.db.open();

    const schema = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      password TEXT NOT NULL,
      email TEXT NOT NULL
    );`;

    await this.db.execute(schema);
    this.loadUsers();
    return true;
  }

  getUsers(){
    return this.users;
  }

  async loadUsers(){
    const users = await this.db.query('SELECT * FROM users');
    this.users.set(users.values || []);
  }

  async addUser(name: string, password: string, email: string ){
    const query = `INSERT INTO users (name, password, email) VALUES ('${name}', '${password}', '${email}')`;
    const result = await this.db.query(query);

    this.loadUsers();

    return result;
  }

  async UpdatePassword(email: string, newpassword: string){
    const query = `UPDATE users SET password='${newpassword}' WHERE email='${email}'`;
    const result = await this.db.query(query);

    this.loadUsers();

    return result;
  }

    async LoginUser(name: string, password: string, ): Promise<boolean>{
      const query = `SELECT name, password  FROM users WHERE name='${name}' AND password='${password}'`;
      const result = await this.db.query(query);

       if (result.values && result.values.length > 0) {
         return true; 
        } else {
            return false;
        }
    }
}
