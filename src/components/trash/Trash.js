import React, { useContext } from 'react'
import { dataContext } from '../../context/DataProvider'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { Restore, DeleteForever } from '@mui/icons-material'
import { addElipsis } from '../../utils/Utils'

const Trash = ({ note, onClick }) => {
    const { setNotes, deletedNotes, setDeletedNotes } = useContext(dataContext);

    const restore = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteForever = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }

    return (
        <Card>
            <CardContent>
                <Typography variant='h6' style={{ fontWeight: 600 }}>{addElipsis(note.heading, 50)}</Typography>
                <Typography>{addElipsis(note.text, 500)}</Typography>
            </CardContent>
            <CardActions>
                <Restore fontSize='small' onClick={() => restore(note)} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                <DeleteForever fontSize='small' onClick={() => deleteForever(note)} style={{cursor: 'pointer'}} />
            </CardActions>
        </Card>
    )
}

export default Trash
