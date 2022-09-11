import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isOpen : false,
};

export const SidebarSlice = createSlice({
    name:"sidebarState",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
            console.log(state.isOpen)
        },
        forceOff: (state) =>{
            state.isOpen = false;
        },
        forceOn: (state) =>{
            state.isOpen = true;
        }

        
    }
});

export const {toggle,forceOff,forceOn} = SidebarSlice.actions;

export default  SidebarSlice.reducer;