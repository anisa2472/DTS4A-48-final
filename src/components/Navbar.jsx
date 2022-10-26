import React from 'react';
import { auth } from '../authentication/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import ProfileMenu from './ProfileMenu';
library.add(faBookOpen);

const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            className="text-orange-1"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-dark">
                            Ruang Baca
                        </span>
                    </a>
                    <div className="flex items-center md:order-2">
                        {user ? (
                            <ProfileMenu placeholder={user.email} />
                        ) : (
                            <Link to={'/login'}>
                                <button className="px-4 py-2.5 bg-gradient-to-br from-orange-1 to-orange-2 rounded">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
