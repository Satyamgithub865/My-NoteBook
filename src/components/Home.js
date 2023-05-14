import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SwipeDrawer from './SwipeDrawer'
import { Box } from '@mui/material'
import Notes from './notes/Notes'
import Archives from './archive/Archives'
import Trashes from './trash/Trashes'

const Home = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <BrowserRouter>
        <SwipeDrawer />
        <Routes>
          <Route path='/' element={<Notes />} />
          <Route path='/archive' element={<Archives />} />
          <Route path='/delete' element={<Trashes />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default Home
