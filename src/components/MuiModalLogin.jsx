import { Box, Button, Modal } from '@mui/material';
import React from 'react'
import {auth,provider} from '../firebase';
import { useDispatch,useSelector } from 'react-redux';
import {hide} from '../redux/ModalSlice';
import GoogleButton from 'react-google-button'

import { 
    setActiveUser,
    setUserLogOutState,
    selectUserName,
    selectUserEmail,
    selectUserPhoto, 

} from '../redux/UserSlice';

import { signInWithPopup, signOut } from 'firebase/auth';


const MuiModalLogin = () => {

    const show = useSelector(store => store.modalState.show)
    const dispatch = useDispatch();

    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto)


    const handleSignInFunction = async () =>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result)
            dispatch(setActiveUser({
                userName:result.user.displayName,
                userEmail:result.user.email,
                userUser:result.user.photoURL
            }))
        }).then(()=>dispatch(hide()))
    }

    const handleSignOut = async() =>{
        
        
        signOut(auth).then(
            ()=>dispatch(setUserLogOutState())
        ).catch((err)=>alert(err.message)).then(()=>dispatch(hide()))
        
    }

    

  return (
    
    <Modal
        open={show}
        onClose={()=>dispatch(hide())}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
    >
        <Box sx={{
            
            width:400,
            height:200,
            bgcolor:'black',
            color:'white',
            border:1,
            textAlign:'center',
            justifyContent:'center',
            alignItems:'center'
            
        }}>
            <h2
            style={{
                marginTop:10,
            }}>
                Sign in!
            </h2>

            <div
            style={{
                
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                marginTop:'2em' 
            }}
            >
                <GoogleButton onClick={handleSignInFunction}/>
                <Button onClick={handleSignOut}>Logout</Button>
            </div>
                
            
            
        </Box>

    </Modal>

  )
}

export default MuiModalLogin