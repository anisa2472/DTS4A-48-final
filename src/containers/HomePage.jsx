import React from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import ListSearchBook from '../components/ListSearchBooks';
import ListBestBook from '../components/ListBestSeller';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <SearchBar />
                <ListSearchBook />
                <ListBestBook />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
