import { Box, Container } from '@mui/material'
import React from 'react'
import MuiSimplePost from './MuiSimplePost'

export const MuiContainer = () => {
  return (
    <Container maxWidth="md">
        <Box 
        height='100hv' 
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginTop='5em'
        sx={{
            
            
        }}
        >
            <MuiSimplePost/>
            <MuiSimplePost/>
            <MuiSimplePost/>
        </Box>
        
    </Container>
  )
}

