import { useContext } from 'react'
import { Box, styled, Grid } from '@mui/material'
import { dataContext } from '../../context/DataProvider';
import Trash from './Trash'

const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Trashes = () => {
    const { deletedNotes } = useContext(dataContext);

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid container spacing={2} style={{ marginTop: 20 }}>
                {
                    deletedNotes.map(note => (
                        <Grid item key={note.id} xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Trash note={note}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Trashes;

