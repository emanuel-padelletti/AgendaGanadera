import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lotes.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS lotes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NO NULL,vacas INTEGER,toros INTEGER, novillos INTEGER,vaquillonas INTEGER,terneros INTEGER, terneras INTEGER);',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          // _ significa que no me importa ese argumento
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertLote = (
  title,
  vacas,
  toros,
  novillos,
  vaquillonas,
  terneros,
  terneras
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO lotes (title,vacas,toros,novillos,vaquillonas,terneros,terneras) VALUES(?,?,?,?,?,?,?)',
        [title, vacas, toros, novillos, vaquillonas, terneros, terneras],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchLotes = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM lotes', //WHERE id algo asi para buscar algo en particular
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchLote = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM lotes WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const eliminarLote = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM lotes WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const updateLote = (id, vacuno, nuevaCantidad) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE lotes SET ${vacuno} = ? WHERE id = ?`,
        [nuevaCantidad, id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
