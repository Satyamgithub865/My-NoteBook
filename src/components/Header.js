import React from 'react'
import { AppBar, Toolbar, Typography, styled, IconButton  } from '@mui/material'
import { Menu } from '@mui/icons-material'

const Heading = styled(AppBar)`
    z-index: 1201;
    height: 70px;
    background: rgba(128, 0, 32, 0.8);
`

const Header = ({ open, handleDrawer }) => {
    const logo = 'https://pngimg.com/uploads/notebook/notebook_PNG100066.png'
    return (
        <Heading open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: '20px' }} 
                >
                <Menu style={{color:'wheat'}} />
                </IconButton>
                <img src={logo} alt="logo" style={{width: 50, marginRight:20}} />
                <Typography variant="h6">My NoteBook</Typography>
            </Toolbar>
        </Heading>
    )
}

export default Header
