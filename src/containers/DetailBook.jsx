import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailBook() {
    const [book, setBook] = useState({});
    let params = useParams();

    useEffect(() => {
        const chosenBook = params.isbn10;
        setBook(chosenBook);

    }, [params.isbn10]);

    return (
        <>
            <h1>ISBN Buku: {params.isbn10}</h1>
        </>
    );
}

export default DetailBook;
