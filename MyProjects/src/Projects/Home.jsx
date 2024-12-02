import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate =  useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("sasi");
        navigate('/')
    }
    return (
        <div>
            <h2>Welcome to Home</h2>
            <p>Youre logged In</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;