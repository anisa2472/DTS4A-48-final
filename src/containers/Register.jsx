import React from 'react';
import RegisterForm from '../components/RegisterForm';
const girl = require('../girl_reading.jpg');

const RegisterPage = () => {
    return (
        <>
            <div className="flex flex-wrap w-full p-8 gap-6 justify-center items-center absolute top-1/2 -translate-y-1/2">
                <RegisterForm />
                <img
                    className="sm:w-full md:w-3/4 lg:w-1/3 -scale-x-100"
                    src={girl}
                    alt="Girl Reading"
                />
            </div>
        </>
    );
};

export default RegisterPage;
