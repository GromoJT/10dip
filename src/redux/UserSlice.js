import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    userName :null,
    userEmail : null,
    userPhoto : null
};



export const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setActiveUser: (state,action) =>{
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.userPhoto = action.payload.photoURL
        },
        setUserLogOutState: (state) =>{
            state.username = null;
            state.userEmail = null;
            state.userUser = null;
            console.log(state.username)
        }
        
        
    }
});

export const {setActiveUser,setUserLogOutState} = UserSlice.actions;

export const selectUserName = state => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;
export const selectUserPhoto = state => state.user.userPhoto;



export default  UserSlice.reducer;

