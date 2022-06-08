import React from 'react';
import useFirebase from '../../hooks/useFirebases';
import './Home.css';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div className='home-container'>
            <h1>Current User Is : {user?  user.displayName : 'No Body Logged In'}</h1>
        </div>
    );
};

export default Home;