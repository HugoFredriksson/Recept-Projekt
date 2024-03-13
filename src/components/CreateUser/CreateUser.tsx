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

    if (Object.values(user).some(value => value.trim() === '')) {
      console.error('Please fill in all fields.');
      return;
    };

    try {
      const response: AxiosResponse<string> = await axios.post(
        'https://localhost:7118/User/CreateUser',
        user
      );
      localStorage.setItem('GUID', response.data);
      console.log('User created successfully:', response.data);
      
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error creating user:', axiosError.response?.data);
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