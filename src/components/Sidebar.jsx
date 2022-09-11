import React from 'react';
import '../App.css';
import {FaTh,FaCat,FaDog, FaBars} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//należy samodzielnie importowac wybrane funkcje z Slice'a
import {toggle} from '../redux/SideBarSlice';

const Sidebar = () => {

    //Redux toolkit
    const isOpen = useSelector(store => store.sidebar.isOpen)
    const dispatch = useDispatch();
    //Normalna implementacja    
    // const[isOpen,setIsOpen] = useState(false);
    // const toggle = () =>setIsOpen(!isOpen);

    const menuItem=[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh/>
        },
        {
            path:'/dog',
            name:'Dog',
            icon: <FaDog/>
        },
        {
            path:'/cat',
            name:'Cat',
            icon:<FaCat/>
        },
    ]

  return (
    <>
        <div style={{width:isOpen ? "200px" : "50px"}} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display:isOpen ? "block" : "none"}} className='logo'>10DIP</h1>
                <div style={{marginLeft:isOpen ? "80px" : "0px"}} className='bars'>
                    
                    <FaBars onClick={ () => dispatch(toggle())}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='link' >
                        <div className='icon'>{item.icon}</div>
                        <div style={{display:isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        
    </>
  )
}

export default Sidebar