// src/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className='flex' style={{ listStyle: "none", justifyContent: 'space-between' }}>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/invoice">Invoice</Link></li>
                {/* <li><Link to="/leads">Leads</Link></li> */}
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/proposals">Proposals</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/timesheets">Timesheets</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
