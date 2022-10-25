import React, { useEffect, useState } from 'react';
import { auth, login } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
const girl = require('../girl_reading.jpg');

const LoginForm = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const [credential, setCredential] = useState({
        email: '',
        password: '',
    });

    const textFieldEmailOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            email: event.target.value,
        });
    };

    const textFieldPasswordOnChangeHandler = (event) => {
        setCredential({
            ...credential,
            password: event.target.value,
        });
    };

    const loginHandler = () => {
        console.log(credential.email, credential.password);
        login(credential.email, credential.password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            <div className="flex flex-wrap w-full p-8 gap-6 justify-center items-center absolute top-1/2 -translate-y-1/2">
                <img
                    className="sm:w-full md:w-3/4 lg:w-1/3"
                    src={girl}
                    alt="Girl Reading"
                />
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold text-2xl mb-4'>Sign In</h1>
                    <form className="bg-white h-1/2 shadow-md rounded px-8 pt-6 pb-8">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="xx@mail.com"
                                onChange={textFieldEmailOnChangeHandler}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="********"
                                onChange={textFieldPasswordOnChangeHandler}
                            />
                        </div>
                        <div className="flex items-center justify-between gap-6 pt-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={loginHandler}
                            >
                                Sign In
                            </button>
                            <Link to={'/register'}>
                                <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    Belum punya akun?
                                </p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
