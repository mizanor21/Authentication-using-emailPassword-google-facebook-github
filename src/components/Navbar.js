import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Authentication Web</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/login'}>Log In</Link></li>
                        <li><Link to={'/signup'}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;