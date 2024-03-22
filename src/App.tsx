import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { router } from './routes/Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './pages/LogInPage/LogInPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AddRecipePage from './pages/AddRecipePage/AddRecipePage';
import HomePage from './pages/HomePage/HomePage';
import AdminPage from './pages/AdminPage/AdminPage';

function App() {
  return (
      <div className="App">  
        <Header /> 
        <Routes>
          <Route path="/home" element={<HomePage />}>Hem</Route>
          <Route path="/addRecipe" element={<AddRecipePage />}>Skapa Recept</Route>
          <Route path="/profile" element={<ProfilePage />}>Profil</Route>
          <Route path="/login" element={<LogInPage />}>Log In</Route>
          <Route path="/adminPage" element={<AdminPage />}>Admin Panel</Route>
        </Routes>
      </div>
  );
}

export default App;