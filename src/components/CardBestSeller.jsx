import React from 'react';
// icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
library.add(faHeart);

const CardBestSeller = (book) => {
    return (
        <>
            <div className="w-24 h-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer">
                <img
                    className="w-full h-full"
                    src={book.bestBooks.book_image}
                    alt={`Cover ${book.bestBooks.title}`}
                />
            </div>
        </>
    );
};

export default CardBestSeller;
