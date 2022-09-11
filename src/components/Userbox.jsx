import React from 'react'
import test from '../img/test.jpg'
const Userbox = () => {


  return (
    <div className='userbox'>
      <div className='userbox_wraper'>
        <div className='userbox_top'>
          <img className='avatar' src={test}/>
          <div className='ub_credits'>
            <div className='ub_username'>Tester</div>
            <div className='ub_mail'>tester@tester.pl</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userbox