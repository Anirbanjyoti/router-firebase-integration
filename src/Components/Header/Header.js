import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebases';
import './Header.css';

const Header = () => {
    const {user, handleSignOut} =useFirebase();
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Product'>Product</Link>
                <Link to='/Orders'>Orders</Link>
                <Link to='/Registration'>Registration</Link>
                <span>{user?.displayName && user.displayName}</span>
               {
                   user?.uid ?
                   <button onClick={handleSignOut}>Sign Out</button>
                    : 
                    <Link to='/Login'>Login</Link>
               }
            </nav>
        </div>
    );
};

export default Header;