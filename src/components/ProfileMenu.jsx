import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../authentication/firebase';

const ProfileMenu = ({ placeholder }) => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });

    const handlerInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const onLogoutClick = async() => {
        await logout();
        navigate('/');
    };

    return (
        <>
            <div className="dropdown-container relative">
                <div className="dropdown-input">
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex mr-3 text-sm  md:mr-0 hover:bg-gray-100 px-4 py-2.5 rounded-md text-gray-500 hover:text-gray-700 focus:bg-gray-100"
                        type="button"
                        onClick={handlerInputClick}
                    >
                        {placeholder}
                    </button>
                </div>
                {showMenu && (
                    <div className="dropdown-options absolute bg-orange-100 hover:bg-orange-300 px-4 py-2 rounded-md right-0">
                        <div
                            key={'logout'}
                            className={`dropdown-item cursor-pointer  text-sm text-gray-500 hover:text-gray-50`}
                            onClick={() => {
                                onLogoutClick();
                            }}
                        >
                            Logout
                        </div>
                    </div>
                )}
            </div>
            <button
                type="button"
                className="flex mr-3 text-sm  md:mr-0 hover:bg-gray-100 px-4 py-2.5 rounded-md text-gray-500 hover:text-gray-700"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
            ></button>
        </>
    );
};

export default ProfileMenu;
