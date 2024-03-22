import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AddRecipePage from "../pages/AddRecipePage/AddRecipePage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AdminPage from "../pages/AdminPage/AdminPage";
import LogInPage from "../pages/LogInPage/LogInPage";

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,
        children: [
            { path: "/Home/:id", element: <HomePage /> },
            { path: "/Home", element: <HomePage /> },
            { path: "/AddRecipe", element: <AddRecipePage /> },
            { path: "/Profile", element: <ProfilePage /> },
            { path: "/Admin", element: <AdminPage /> },
            { path: "/LogIn", element: <LogInPage /> },
        ],
    },
]);