import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box } from '@mui/material';

const DetailView = ({ open, note, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth={true}
                PaperProps={{
                  style: {
                    height: '80vh',
                  },
                }}
                
            >
                <DialogTitle>{note.heading}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {note.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default DetailView;