import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import AddItemPage from './pages/AddItemPage';
import HomePage from './pages/HomePage';
import WardrobePage from './pages/WardrobePage';
import MarketPage from './pages/MarketPage';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "Login",
    element: <LoginPage/>
  },
  {
    path: "SignUp",
    element: <SignUpPage/>
  },
  {
    path: "Settings",
    element: <SettingsPage/>
  },
  {
    path: "AddItem",
    element: <AddItemPage/>
  },
  {
    path: "Home",
    element: <HomePage/>
  },
  {
    path: "Wardrobe",
    element: <WardrobePage/>
  },
  {
    path: "Market",
    element: <MarketPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
