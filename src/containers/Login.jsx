import React from 'react';
import LoginForm from '../components/LoginForm';
const girl = require('../girl_reading.jpg');

const LoginPage = () => {
    return (
        <>
            <div className="flex flex-wrap w-full p-8 gap-6 justify-center items-center absolute top-1/2 -translate-y-1/2">
                <img
                    className="sm:w-full md:w-3/4 lg:w-1/3"
                    src={girl}
                    alt="Girl Reading"
                />
                <LoginForm />;
            </div>
        </>
    );
};

export default LoginPage;
