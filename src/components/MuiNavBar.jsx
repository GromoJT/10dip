import { AppBar,Avatar,Box,Button,IconButton,Menu,MenuItem,Toolbar, Tooltip, Typography } from "@mui/material"
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {toggle} from '../redux/SideBarSlice';

import MenuIcon from '@mui/icons-material/Menu';
import { MuiSearchBar } from "./MuiSearchBar";
import {show} from '../redux/ModalSlice';

import { 
  selectUserName,
  selectUserEmail,
  selectUserUser, 
} from '../redux/UserSlice';

export const MuiNavBar = () => {

const isOpen = useSelector(store => store.sidebar.isOpen)
const dispatch = useDispatch();

const userName = useSelector(store => store.user.userName)
const userPhoto = useSelector(store => store.user.userPhoto)

var settings = null


if(userName !== null){
  settings = ['Logout'];
}else{
  settings = ['Sign in'];
}

const pages = ['Products', 'Pricing', 'Blog'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" variant="dense">

        <Toolbar>
          
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>dispatch(toggle())}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component='div'>
            10DIP
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MuiSearchBar/>
          </Box>

          <Typography>
            
            
            {userName} 
            {
              console.log(userName)
            }
            
          </Typography>
          
          <Box sx={{flexGrow: 0 ,display:{xs:'none',md:'flex'}}}>

          
          

          <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,ml:2,mr:2}}>
                {
                  userName?
                  <Avatar alt={userName} src={userPhoto} />
                  
                  :
                  <Avatar alt="Anonymus" src="/static/images/avatar/2.jpg" />
                }
                
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx:{
                  backgroundColor:'#111',
                  color:'white'
                }
              }}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting} 
                  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          
          <Button variant="contained" color="secondary" onClick={()=>dispatch(show())}>POST</Button>
          

          </Box>
            

            
            
        
            

          
          
         
        </Toolbar>

      </AppBar>

    </Box>
  );

};
