import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {myTheme} from './MaterialUi/myTheme';
import {BrowserRouter,Routes,Route} from'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';


import Userbox from './components/Userbox';

import { useSelector } from 'react-redux';
import { MuiNavBar } from './components/MuiNavBar';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiContainer } from './components/MuiContainer';
import MuiModalLogin from './components/MuiModalLogin';



function App() {

  

  return (
    <ThemeProvider theme={myTheme}>
      
      <div className='App'>
        <MuiNavBar/>
        <MuiDrawer />
        <MuiModalLogin/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MuiContainer/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
    
    
  );
}

export default App;


/*
 <BrowserRouter>
        <Sidebar/>
        <div className='inner_container'>
            <main style={{marginLeft:isOpen? '200px' : '50px'}}>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dog" element={<Dog/>}/>
                <Route path="/cat" element={<Cat/>}/>
              </Routes>
            </main>

            <Userbox/>

        </div>
      
      </BrowserRouter>
*/