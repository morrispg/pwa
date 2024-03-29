import { openDB } from 'idb';

const DB_NAME = "jate"

const initdb = async () =>
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains(DB_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(DB_NAME, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const db = await openDatabase("database.db", "1.0", "My Database");
    content = content.replace(/DB/g, "db").replace(/PUT/g, "put");
    await db.execute("INSERT INTO table (content) VALUES (?)", (content));
    await db.close();
  };

  const myDb = await openDB(DB_NAME, 1);

  const YOUR_TX_VAR = myDb.transaction(DB_NAME, 'readwrite');
  const db = await openDatabase(DB_NAME, 1);

  const tx = db.transaction(DB_NAME, 'readwrite');

  const YOUR_STORE_VAR = YOUR_TX_VAR.objectStore(DB_NAME);

  const request = YOUR_STORE_VAR.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result.value);

export const getDb = async () => {

  const YOUR_TX_VAR = myDb.transaction(DB_NAME, 'readonly');
  const db = await openDatabase(DB_NAME, 1);

  const tx = db.transaction(DB_NAME, 'readonly');

  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');

  return result?.value;
};

initdb();
