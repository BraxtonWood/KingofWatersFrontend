import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Upban = ({currentPage, setCurrentPage}) =>{
    const setCurrentPageNotifications = async () =>{
        setCurrentPage("Messages");
    }
    const setCurrentPageSettings = async () =>{
        setCurrentPage("Settings");
    }

    return <>
        <div className='upban'>
            <div className='upbannerbutton'>
               <Link className='buttonlink' to="/notifications" onClick={()=>{setCurrentPageNotifications()}}><img src="images/envelope.png" alt="Notifications"/></Link>
            </div>
            
            <div className='upbannerbutton'>
                <h3 className='currentpage'>{currentPage}</h3>
            </div>
            
            <div className='upbannerbutton'>
                <Link className='buttonlink' to='/settings' onClick={()=>{setCurrentPageSettings()}}><img src="images/settings.png" alt="Settings"/></Link>
            </div>
        </div>
    </>
}
export default Upban;