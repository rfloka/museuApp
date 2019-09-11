import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatasqlService {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'userdb',
      location: 'default'
    });
  }
  public createDB() {
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
      })
      .catch(e => console.error('Erro na criação das Base de dados: ' + e));
  }

  private createTables(db: SQLiteObject) {
    return db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS peca(peca_id integer primary key NOT NULL, nid integer, notas VARCHAR(1000), guardado integer(1));']
    ]).then(() => {
      console.log('Tabelas criada');
    }).catch(e => console.error('Erro na criação das tabelas: ' + e));
  }
}
