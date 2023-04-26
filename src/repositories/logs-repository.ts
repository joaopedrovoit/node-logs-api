import Log from '../models/log';
import database from './database';
const logsRepository = {
  create: (log: Log, callback: (id?: number) => void) => {
    const sql = 'INSERT INTO logs (nome, descricao) VALUES (?, ?)';
    const params = [log.nome, log.descricao];
    database.run(sql, params, function (_err) {
      callback(this?.lastID);
    });
  },
  readAll: (callback: (logs: Log[]) => void) => {
    const sql = 'SELECT * FROM logs';
    const params: any[] = [];
    database.all(sql, params, (_err, rows: Log[]) => callback(rows));
  },
  read: (id: number, callback: (log?: Log) => void) => {
    const sql = 'SELECT * FROM logs WHERE id = ?';
    const params = [id];
    database.get(sql, params, (_err, row: Log) => callback(row));
  },
  update: (id: number, log: Log, callback: (notFound: boolean) => void) => {
    const sql = 'UPDATE logs SET nome = ?, descricao = ? WHERE id = ?';
    const params = [log.nome, log.descricao, id];
    database.run(sql, params, function (_err) {
      callback(this.changes === 0);
    });
  },
  delete: (id: number, callback: (notFound: boolean) => void) => {
    const sql = 'DELETE FROM logs WHERE id = ?';
    const params = [id];
    database.run(sql, params, function (_err) {
      callback(this.changes === 0);
    });
  }
};
export default logsRepository;
