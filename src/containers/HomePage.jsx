import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
// import ListBestBook from '../components/ListBestSeller';
import { logout } from '../authentication/firebase';

const Home = () => {
    const logoutHandler = async () => {
        await logout();
    };

    return (
        <>
            <Navbar />
            <button onClick={logoutHandler}>Log Out</button>
            <SearchBar />
            {/* <ListBestBook /> */}
        </>
    );
};

export default Home;
