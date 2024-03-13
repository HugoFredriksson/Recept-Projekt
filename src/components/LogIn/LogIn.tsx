import React, { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface User {
  Email: string;
  Password: string;
}

const LoginComponent: React.FC = () => {
  const [user, setUser] = useState<User>({
    Email: '',
    Password: '',
  });

  const loginUser = async () => {
    try {
      const response: AxiosResponse<string> = await axios.get(
        'https://localhost:7274/User/LogIn',
        {
          headers: {
          Authorization: `Basic ${btoa(`${user.Email}:${user.Password}`)}`, 
          },
        }
      );

      // Save the login key (GUID) to local storage
      localStorage.setItem('GUID', response.data);

      window.location.reload(); 
      console.log('Login successful:', response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Login failed:', axiosError.response?.data);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  if (localStorage.getItem('GUID') === null) {
  return (
    <div>
      <h2>Logga In!</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={user.Email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="Password"
            value={user.Password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={loginUser}>
          Login
        </button>
      </form>
    </div>
  );
  } else {
    return null;
  }
};

export default LoginComponent;