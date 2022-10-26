import React, { useState, useEffect } from 'react';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faAngleDown);

const DropdownSearch = ({ placeholder, options, setSearchCategory }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

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

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label;
        }
        return placeholder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-input">
                    <button
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 gap-4 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                        onClick={handlerInputClick}
                    >
                        {getDisplay()}
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                </div>
                {showMenu && (
                    <div className="dropdown-options absolute bg-white p-4">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`dropdown-item ${
                                    isSelected(option) && 'selected'
                                }`}
                                onClick={() => {
                                    onItemClick(option);
                                    setSearchCategory(option.value);
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default DropdownSearch;
