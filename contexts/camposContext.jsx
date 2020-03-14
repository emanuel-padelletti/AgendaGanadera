import React, { createContext, useState, useEffect } from 'react';

import {
  insertLote,
  fetchLotes,
  eliminarLote,
  updateLote,
  fetchLote
} from './db';

const CampoContext = createContext();

export const CampoContextProvider = ({ children }) => {
  const [lotes, setLotes] = useState([]);

  const getCant = (id, name) => {
    //console.log(name);
    const index = lotes.findIndex(lote => {
      return lote.id === id;
    });
    return lotes[index][name];
  };

  const addLote = async name => {
    try {
      const dbResult = await insertLote(name, 0, 0, 0, 0, 0, 0, 0);
      loadLotes();
      console.log(dbResult);
    } catch (e) {
      console.log('Fail the insert Sql');
    }
  };

  const deleteLote = async id => {
    try {
      const result = await eliminarLote(id);

      console.log('Eliminado correctamente');
      loadLotes();
    } catch (e) {
      console.log('Error al intentar eliminar desde Sqlite');
    }
  };

  loadLotes = async () => {
    try {
      const lotes = await fetchLotes();
      setLotes(lotes.rows._array);
      //console.log(lotes);
    } catch (e) {
      console.log(e);
    }
  };

  changeLote = async (id, vacuno, nuevaCantidad) => {
    console.log(id, vacuno, nuevaCantidad);
    try {
      const loteUpdated = await updateLote(id, vacuno, nuevaCantidad);
      console.log('Cambiado correctamente');
      loadLotes();
      const loteEditado = await fetchLote(id);
      console.log(loteEditado.rows._array);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function fetchData() {
      loadLotes();
      //eliminateLote(2);
    }
    fetchData();
  }, []);

  return (
    <CampoContext.Provider
      value={{ lotes, addLote, deleteLote, changeLote, getCant }}
    >
      {children}
    </CampoContext.Provider>
  );
};
export default CampoContext;
