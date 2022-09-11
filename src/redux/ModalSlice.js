import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    show : false,
};

export const ModalSlice = createSlice({
    name:"modalState",
    initialState,
    reducers: {
        show: (state) =>{
            state.show = true;
        },
        hide: (state)=>{
            state.show = false;
        }

        
    }
});

export const {show,hide} = ModalSlice.actions;

export default  ModalSlice.reducer;