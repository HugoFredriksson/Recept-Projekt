import React from 'react';

const LogoutComponent: React.FC = () => {
  const logoutUser = () => {
    // Clear the login key from local storage
    localStorage.removeItem('GUID');

    console.log('User logged out');
    // You can handle logout actions, redirect, or update UI as needed
  };

  return (
    <div>
      <h2>Logout</h2>
      <button type="button" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};

export default LogoutComponent;