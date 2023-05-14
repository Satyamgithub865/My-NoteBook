import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { SpeakerNotesOff, Archive, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavList = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <SpeakerNotesOff />, route: '/' },
        { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Delete />, route: '/delete' }
    ]

    return (
        <List>
            {
                navList.map(list => (
                    <ListItem key={list.id}>
                        <Link to={list.route} style={{ textDecoration: 'none', display: 'flex', color: 'inherit', alignItems: 'center', width:'100%' }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText primary={list.name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
        </List>
    )
}

export default NavList
