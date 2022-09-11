import { AspectRatio, Face, FavoriteBorder, ModeCommentOutlined, MoreHoriz, SendOutlined,Bookmark, BookmarkAdd,MoreVert } from '@mui/icons-material'
import { Avatar, Box, Card, IconButton, Input, Link, Typography,Button, CardHeader, CardContent, CardActions, CardMedia } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'


const MuiSimplePost = () => {
  return (
    <Card 
    sx={{
        minWidth: 350,
        maxWidth:"sm",
        marginTop:'1em',
        boxShadow: 'none',
        color:'white',
    }}
    style={{
        backgroundColor:'#111'
        
    }}
    
    >
        <Box>
            <hr style={{
                backgroundColor:'#222'
            }}/>
        </Box>
        <CardHeader
            titleTypographyProps={{
                variant:'h6'
                
            }}
            subheaderTypographyProps={{
                fontSize:"0.8em",
                color:'secondary'
            }}
            sx={{
              textAlign:'left' 

            }}
            avatar={
                <Avatar sx={{
                    bgcolor: 'black',
                    
                    
                }}
                aria-label=""
                src='https://thispersondoesnotexist.com/image'
                />
            }
            action={
                <IconButton aria-label='settings'>
                    <MoreVert color='secondary'/>
                </IconButton>
            }
            title="test"
            subheader="dzisiaj"
            
        >
            TEST
        </CardHeader>
        <Box sx={{
            textAlign:'left',
            marginLeft:'1rem',
            paddingBottom:'1rem'
            
        }}>
            <Typography
            variant='h6'
            >
                TYTUŁ
            </Typography>
        </Box>
            <CardMedia
            component="img"
            image="https://thispersondoesnotexist.com/image"

            ></CardMedia>
        
        
            
        

        <CardContent
        sx={{
            textAlign:'left',
            marginLeft:'1rem',
            paddingBottom:'1rem',
            color:'white',
            marginLeft:-2
        }}
        >
        <Box>
            <Button
            color='secondary'
            variant='outlined'
            
            >1</Button>
            <Button
            color='secondary'
            variant='outlined'
            >2</Button>
            <Button
            color='secondary'
            variant='outlined'
            >3</Button>
        </Box>
           

        </CardContent>

        <CardActions>

        </CardActions>
    </Card>
  )
}

export default MuiSimplePost