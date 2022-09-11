import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import SideBarReducer from './SideBarSlice';
import ModalReducer from './ModalSlice';
import UserReducer from './UserSlice';
import thunk from 'redux-thunk'
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from '@reduxjs/toolkit'
import logger from 'redux-logger';

const persistConfig = {
    key:"root",
    varsion:1,
    storage,
}

const middleware = [thunk]

if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}

const reducer = combineReducers({
    user:UserReducer,
});

const persistedUserReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer:{
        sidebar : SideBarReducer,
        user : persistedUserReducer,
        modalState : ModalReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleware
});

export default store;


