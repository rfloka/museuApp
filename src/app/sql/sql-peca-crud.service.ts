import { Injectable } from '@angular/core';
import { PecaSql } from '../models/sqlpeca';
import { DatasqlService } from './datasql.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class SqlPecaCrudService {

  constructor(public db: DatasqlService) { }

  public insert(peca: PecaSql) {
    return this.db.getDB().then((db: SQLiteObject) => {
      let sql = 'insert into peca(nid,notas,guardado)values(?,?,?)';
      let data = [peca.getNid(), peca.getNotas(), peca.getGuardado()]
      db.executeSql(sql, data).then(() => console.log("Inserido")).catch((e) => console.error('erro ao inserir: ' + e));
    }).catch((e) => console.error(e));
  }
  public remove(id: number): void {
    this.db.getDB().then((db: SQLiteObject) => {
      let sql = 'delete from peca where nid = ?';
      let data = [id]
      db.executeSql(sql, data).then(() => console.log("Eliminado")).catch((e) => console.error('erro ao eliminar: ' + e));
    }).catch((e) => console.error(e));
  }
  public update(peca: PecaSql) {
    return this.db.getDB().then((db: SQLiteObject) => {
      let sql = 'update peca set nid=?,notas=?,guardado=? where nid = ?';
      let data = [peca.getNid(), peca.getNotas(), peca.getGuardado(), peca.getNid()]
      db.executeSql(sql, data).then(() => console.log("update")).catch((e) => console.error('erro ao inserir: ' + e));
    }).catch((e) => console.error(e));
  }
  public getAll() {
    return this.db.getDB().then((db: SQLiteObject) => {
      let sql = 'select * from peca';
      let data: any;
      return db.executeSql(sql, data)
        .then((data: any) => {
          if (data.rows.length > 0) {
            let pecas = new Array<PecaSql>();
            for (let i = 0; i < data.rows.length; i++) {
              let tmp = data.rows.item(i);
              var peca = new PecaSql(tmp.nid, tmp.notas, tmp.guardado);
              pecas.push(peca);
            }
            return pecas;
          } else {
            return new Array<PecaSql>();
          }
        }).catch((e) => {
          console.error('erro ao select: ' + e);
        });
    }).catch((e) => {
      console.error(e);
    });
  }
  public getData(nid: number) {
    return this.db.getDB().then((db: SQLiteObject) => {
      let sql = 'select * from peca where nid = ?';
      let data = [nid];
      return db.executeSql(sql, data)
        .then((data: any) => {
          if (data.rows.length > 0) {
            let peca = data.rows.item(0);
            //var peca = new PecaSql(tmp.nid, tmp.notas, tmp.guardado);
            return peca;
          } else {
            return null;
          }
        }).catch((e) => {
          console.error('erro ao select: ' + e);
        });
    }).catch((e) => {
      console.error(e);
    });
  }
}
