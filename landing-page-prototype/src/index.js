import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SettingsPage from './pages/SettingsPage';
import AddItemPage from './pages/AddItemPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import WardrobePage from './pages/WardrobePage';
import MarketPage from './pages/MarketPage';
import AuthUserProvider from './firebase/authentication';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>
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
    path: "About",
    element: <AboutPage/>
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
