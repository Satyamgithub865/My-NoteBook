import { useState, useContext } from 'react'
import { Box, ClickAwayListener, TextField, styled } from '@mui/material'
import { dataContext } from '../../context/DataProvider'
import { v4 as uuid } from 'uuid';

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    margin: 'auto',
    padding: 6,
    boxShadow: '1px 2px 3px',
    borderRadius: 8,
    background: '#fff'
})

const note = {
    id: '',
    heading: '',
    text: ''
}

const Form = () => {
    const [textInputArea, setTextInputArea] = useState(false);
    const [addNote, setAddNote] = useState({...note, id:uuid()})

    const { notes, setNotes } = useContext(dataContext);

    const handleTitleShow = () => {
        setTextInputArea(true);
    }

    const handleClickAway = () => {
        setTextInputArea(false);

        setAddNote({ ...note, id:uuid() });
        if(addNote.heading || addNote.text) {
            setNotes([...notes, addNote])
        }
    }

    const handleChange = (e) => {
        setAddNote({ ...addNote, [e.target.name]: e.target.value });
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container>
                {
                    textInputArea &&
                    <TextField
                        placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline: true }}
                        sx={{
                            input: {
                                fontWeight: 'bold',
                                "&::placeholder": {
                                    fontWeight: 'bold'
                                },
                            }
                        }}
                        style={{ padding: 8 }}
                        name='heading'
                        onChange={(e) => handleChange(e)}
                        value={addNote.heading}
                    />
                }
                <TextField
                    placeholder='Take a note...'
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    multiline
                    style={{ padding: 8 }}
                    onClick={handleTitleShow}
                    name='text'
                    onChange={(e) => handleChange(e)}
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default Form
