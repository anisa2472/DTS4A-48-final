import React from 'react';

const CardBestSeller = (book) => {
    // console.log(book.bestBooks);
    return (
        <>
            <div className="flex flex-col">
                <img src={book.bestBooks.book_image} alt={`Cover ${book.bestBooks.title}`}></img>
                <h2>{book.bestBooks.title}</h2>
            </div>
        </>
    );
};

export default CardBestSeller;
