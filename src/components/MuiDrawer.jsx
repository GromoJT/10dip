import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {forceOff} from '../redux/SideBarSlice';

export const MuiDrawer = () => {
   
  const isOpen = useSelector(store => store.sidebar.isOpen)
  const dispatch = useDispatch();

  return (
    <Drawer
      anchor='left'
      open = {isOpen}
      onClose = { () => dispatch(forceOff())}
      PaperProps={{
        sx:{
          backgroundColor:"black"
        }
      }}
    >
      <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>

        </Typography>
      </Box>
    </Drawer>
  )
}
