import React, { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface User {
  UserName: string;
  Email: string;
  Password: string;
}

const CreateUserComponent: React.FC = () => {
  const [user, setUser] = useState<User>({
    UserName: '',
    Email: '',
    Password: '',
  });

  const createUser = async () => {
    try {
      const response: AxiosResponse<string> = await axios.post(
        'https://localhost:7274/User/CreateUser',
        user
      );
      localStorage.setItem('GUID', response.data);
      console.log('User created successfully:', response.data);
      
      // You can handle success, redirect, or update UI as needed
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error creating user:', axiosError.response?.data);
      // You can handle errors and update UI accordingly
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="UserName"
            value={user.UserName}
            onChange={handleInputChange}
          />
        </div>
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
        <button type="button" onClick={createUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUserComponent;