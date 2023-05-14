import React, { useContext } from 'react'
import { dataContext } from '../../context/DataProvider'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { UnarchiveOutlined as Unarchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material'
import { addElipsis } from '../../utils/Utils'

const Archive = ({ note }) => {
    const { archiveNotes, setNotes, setArchiveNotes, setDeletedNotes }  = useContext(dataContext);

    const unArchiveNote = (note) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = () => {
        const updatedNotes = archiveNotes.filter(data => data.id !== note.id);
        setArchiveNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <Card>
            <CardContent>
                <Typography variant='h6' style={{ fontWeight: 600 }}>{addElipsis(note.heading, 50)}</Typography>
                <Typography>{addElipsis(note.text, 500)}</Typography>
            </CardContent>
            <CardActions>
                <Unarchive fontSize='small' onClick={() => unArchiveNote(note)} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                <Delete fontSize='small' onClick={() => deleteNote(note)} style={{ cursor: 'pointer' }} />
            </CardActions>
        </Card>
    )
}

export default Archive
