import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const User = ({user, setUser}) => {
    /* 
    Your catch Feed
    Profile
    if no User==>> sign in
    */
    const renderHelper = () =>{
        if(user.username === undefined){
           return <>
           <Link to='/login'>Login</Link>
           <p>Don't have an account?</p>
           <Link to='/register'>Create New Account</Link>
           </> 
        } else {
            return <>
            <h2>Welcome {user.firstname}{user.lastname}</h2>
            <h4>{user.city},{user.state}</h4>
            <Link to='/profilepic'><img className='profilepic' src={user.profilepic} alt="/images/fishing-rod.png"/></Link>
            
            
            
            {/* {user.feed.map(feed)} */}
            
            </>
        }
    }
    return <>
    <div className='component'>
        {renderHelper()}
        <h2></h2>

        
    </div>
    
    </>
}
export default User;