import React, { createContext, useState } from 'react'

export const dataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return (
        <dataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deletedNotes,
            setDeletedNotes
        }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider
