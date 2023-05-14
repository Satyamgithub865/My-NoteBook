import React, { useContext } from 'react'
import { dataContext } from '../../context/DataProvider'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material'
import { addElipsis } from '../../utils/Utils'

const Note = ({ note, onClick }) => {
    const { notes, setNotes, setArchiveNotes, setDeletedNotes }  = useContext(dataContext);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = () => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <Card>
            <CardContent onClick={onClick} style={{cursor:'pointer'}}>
                <Typography variant='h6' style={{ fontWeight: 600 }}>{addElipsis(note.heading, 50)}</Typography>
                <Typography>{addElipsis(note.text,500)}</Typography>
            </CardContent>
            <CardActions>
                <Archive fontSize='small' onClick={() => archiveNote(note)} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                <Delete fontSize='small' onClick={() => deleteNote(note)} style={{ cursor: 'pointer' }} />
            </CardActions>
        </Card>
    )
}

export default Note
