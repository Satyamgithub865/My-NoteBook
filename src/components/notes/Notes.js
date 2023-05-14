import React, { useContext, useState } from 'react'
import { Box, styled, Grid } from '@mui/material'
import Form from './Form';
import Note from './Note';
import { dataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';
import DetailView from '../details/DetailView'

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(dataContext);
  const [open, setOpen] = useState(false);
  const [currNote, setCurrNote] = useState({});

  const handleClickOpen = (note) => {
    setCurrNote(note)
    setOpen(true);
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Form />
      {
        notes.length > 0 ?
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            {
              notes.map((note, index) => (
                <Grid item key={note.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                  <Note note={note} onClick={() => handleClickOpen(note)} />
                </Grid>
              ))
            }
          </Grid>
          :
          <EmptyNotes />
      }
      <DetailView open={open} note={currNote} setOpen={setOpen} />
    </Box>

  )
}

export default Notes
