import React from 'react';

const navbar = ({ brand }) => {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <a className='navbar-brand' href="/">{brand}</a>

            </div>
        </nav>
    )

}
export default navbar;