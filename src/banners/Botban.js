import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Botban = ({setCurrentPage}) => {
    const setCurrentPageHome = async () =>{
        setCurrentPage("Home");
    }
    const setCurrentPageFriends = async () =>{
        setCurrentPage("Friends");
    }
    const setCurrentPageExplore = async () =>{
        setCurrentPage("Explore");
    }
    const setCurrentPageUser = async () =>{
        setCurrentPage("User");
    }
    const setCurrentPageRecord = async () =>{
        setCurrentPage("Record");
    }
    return <>
    <div className='botbancontainer'>
         <div className='botban'>
            <div className='botbannerbutton'>
               <Link className='buttonlink' to="/" onClick={()=>{setCurrentPageHome()}}><img classname='icons' src="/images/house-chimney.png" alt="Home"/></Link>
            </div>
            <div className='botbannerbutton'>
                <Link className='buttonlink' to='/explore' onClick={()=>{setCurrentPageExplore()}}><img className='icons' src="/images/map (1).png" alt="Explore"/></Link>
            </div>
            <div className='botbannerbutton'>
                <Link className='buttonlink' to='/record' onClick={()=>{setCurrentPageRecord()}}><img className='icons' src="/images/camera.png" alt="Record"/></Link>
            </div>
            <div className='botbannerbutton'>
                <Link className='buttonlink' to='/user' onClick={()=>{setCurrentPageUser()}}><img className='icons' src="/images/user.png" alt="User"/></Link>
            </div>
            <div className='botbannerbutton'>
                <Link className='buttonlink' to='/friends' onClick={()=>{setCurrentPageFriends()}}><img className='icons' src="/images/users-alt.png" alt="Friends"/></Link>
            </div>
        </div>    
    </div>
    </>
}
export default Botban;