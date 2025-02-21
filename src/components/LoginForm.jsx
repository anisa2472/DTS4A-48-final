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
        login(credential.email, credential.password);
    };

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-2xl mb-4">Sign In</h1>
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
                            className="bg-orange-1 hover:bg-orange-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={loginHandler}
                        >
                            Sign In
                        </button>
                        <Link to={'/register'}>
                            <p className="inline-block align-baseline font-bold text-sm text-orange-2 hover:text-orange-1">
                                Belum punya akun?
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
