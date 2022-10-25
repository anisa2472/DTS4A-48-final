import React, { useEffect, useState } from 'react';
import { auth, login } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

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
            <h1>Login</h1>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            placeholder="Email"
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
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={textFieldPasswordOnChangeHandler}
                        />
                        <p className="text-red-500 text-xs italic">
                            Please choose a password.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
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
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </>
    );
};

export default LoginForm;
