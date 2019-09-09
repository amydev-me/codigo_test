import React from 'react';

const Logout = ({  onLogoutClick }) => {
    return(
        
        <button onClick={() => onLogoutClick()}>Logout</button>
    )
};
export default Logout;

