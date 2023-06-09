import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const HomePage = () => {
    const navigate = useNavigate();
    
    const [auth, setAuth] = useState(false);

    if(auth){
        navigate('/dashboard')
    }

    return (
        <div>
            <NavBar /><br />
            <center>
                <h1>Welcome To HomePage</h1>
                
                <button className='btn' onClick={() => setAuth(true)}>LoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLoginLogin</button>
            </center>

        </div>
    );
};

export default HomePage;
