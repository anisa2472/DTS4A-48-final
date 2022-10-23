import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import googleBook from '../apis/googlebook';

function DetailBook() {
    const [book, setBook] = useState(null);
    let params = useParams();

    const getDetailBook = async (isbn) => {
        const response = await googleBook.get(`volumes?q=isbn:${isbn}`);
        return response.data.items;
    };

    useEffect(() => {
        const fetchDetailBook = async () => {
            try {
                const detailBook = await getDetailBook(params.isbn10);
                setBook(detailBook[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchDetailBook();
    }, [params.isbn10]);

    return (
        <>
            {book !== null
                ? console.log(book.volumeInfo)
                : null}
        </>
    );
}

export default DetailBook;
