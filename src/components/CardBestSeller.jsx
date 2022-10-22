import React from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

const CardBestSeller = (book) => {
    return (
        <>
            <div className="w-40 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img
                        className="rounded-t-lg w-full"
                        src={book.bestBooks.book_image}
                        alt={`Cover ${book.bestBooks.title}`}
                    />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-l font-semibold text-gray-900 dark:text-white">
                            {book.bestBooks.title}
                        </h5>
                    </a>
                    <div class="flex">
                        <a
                            href="#"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <FontAwesomeIcon icon={["far", "heart"]} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardBestSeller;
