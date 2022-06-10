import React from 'react';
// import useFirebase from '../../hooks/useFirebases';
import './Home.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import {getAuth } from 'firebase/auth'
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    // const {user} = useFirebase();
    return (
        <div className='home-container'>
            <h1>Current User Is : {user?  user.displayName : 'No Body Logged In'}</h1>
        </div>
    );
};

export default Home;