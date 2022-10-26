import React, { useState } from 'react';
import DropdownSearch from './DropdownSearch';
import googleBook from '../apis/googlebook';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
library.add(faMagnifyingGlass);

const SearchBar = () => {
    const [searchCategory, setSearchCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [books, setBooks] = useState('');

    const options = [
        { value: 'intitle', label: 'By Title' },
        { value: 'inauthor', label: 'By Author' },
        { value: 'isbn', label: 'By ISBN' },
    ];

    const getBooks = async () => {
        const response = await googleBook.get(
            `volumes?q=${searchCategory}:${searchValue}`
        );
        return response.data.items;
    };

    const searchSubmitHandler = async (event) => {
        event.preventDefault();
        if (searchCategory !== '') {
            if (searchValue !== '') {
                const response = await getBooks();
                setBooks(response);
            }
        }
    };

    return (
        <>
            <form>
            <div id="search-container" className="pb-4 w-full flex justify-center">
                    <DropdownSearch
                        placeholder={'Search by'}
                        options={options}
                        setSearchCategory={setSearchCategory}
                    />
                    <div className="">
                        <input
                            type="search"
                            id="searchInput"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search Books..."
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                            }}
                            required
                        />
                    </div>
                    <button
                            type="submit"
                            onClick={searchSubmitHandler}
                            className="top-0 right-0 p-2.5 text-sm font-medium text-white bg-orange-2 rounded-r-lg border border-orange-2 hover:bg-orange-1"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                </div>
            </form>
        </>
    );
};

export default SearchBar;
