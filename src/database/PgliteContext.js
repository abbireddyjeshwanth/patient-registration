import React, { createContext, useContext, useEffect, useState } from 'react';
import { PGlite } from 'pglite';

const DBContext = createContext();

export const useDB = () => useContext(DBContext);

export const DBProvider = ({ children }) => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const loadDB = async () => {
      const db = new PGlite({ restoreFromLocalStorage: true });
      await db.execute(`
        CREATE TABLE IF NOT EXISTS patients (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          age INTEGER,
          gender TEXT,
          contact TEXT,
          notes TEXT
        );
      `);
      setDb(db);
    };
    loadDB();
  }, []);

  return <DBContext.Provider value={db}>{children}</DBContext.Provider>;
};
