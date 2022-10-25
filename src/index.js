import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ProtectedComponent from './components/ProtectedComponent';
import App from './App';
import DetailBook from './containers/BookDetail';
import LoginPage from './containers/Login';
import RegisterPage from './containers/Register';
import Bookshelf from './containers/Bookshelf';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/bookshelf"
                    element={
                        <ProtectedComponent>
                            <Bookshelf />
                        </ProtectedComponent>
                    }
                />
                <Route path="/:isbn10" element={<DetailBook />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
