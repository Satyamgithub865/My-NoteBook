import React, { useContext } from 'react'
import { Box, styled, Grid } from '@mui/material'
import { dataContext } from '../../context/DataProvider';
import Archive from './Archive'

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Archives = () => {
    const { archiveNotes } = useContext(dataContext);
    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid container spacing={2} style={{ marginTop: 20 }}>
                {
                    archiveNotes.map(note => (
                        <Grid item key={note.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Archive note={note} />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Archives
