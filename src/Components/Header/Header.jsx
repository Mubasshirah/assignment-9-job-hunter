import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-job'>
                <h2>jobHunter</h2>
            </div>
            <div className='headerLink'>
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='about'>About</Link>
                <Link className='link' to='/statistics'>Statistics</Link>
                <Link className='link' to='/applied'>Applied Job</Link>
                <Link className='link' to='/blog'>Blog</Link>
            </div>
            <div className='btn-apply'>
                <button >Start Applying</button>
            </div>
        </div>
    );
};

export default Header;