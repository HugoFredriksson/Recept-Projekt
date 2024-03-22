import React from 'react';

const LogoutComponent: React.FC = () => {
  const logoutUser = () => {
    localStorage.removeItem('GUID');
    console.log('User logged out');
    window.location.reload();
  };

  if (localStorage.getItem('GUID') !== null) {
    return (
      <div>
        <h2>Logout</h2>
        <button type="button" onClick={logoutUser}>
          Logout
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default LogoutComponent;