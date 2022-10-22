import nyt from '../apis/nyt';
import React, { useEffect, useState } from 'react';
import CardBestSeller from '../components/CardBestSeller';

const ListBestBook = () => {
    const [bestBooks, setBestBooks] = useState([
        {
            fiction: [],
            nonFiction: [],
        },
    ]);

    const getBestFictionBooks = async () => {
        const response = await nyt.get(`lists/current/hardcover-fiction.json`);
        return response.data.results;
    };

    const getBestNonFictionBooks = async () => {
        const response = await nyt.get(
            `lists/current/hardcover-nonfiction.json`
        );
        return response.data.results;
    };

    useEffect(() => {
        const fetchDataFiction = async () => {
            try {
                const responseFiction = await getBestFictionBooks();
                const responseNonFiction = await getBestNonFictionBooks();

                // console.log(responseFiction);
                // console.log(responseNonFiction);
                setBestBooks({
                    fiction: responseFiction,
                    nonFiction: responseNonFiction,
                });
            } catch (err) {
                console.log(err);
            }
        };

        // const fetchDataNonFiction = async () => {
        //     try {
        //         const responseNonFiction = await nyt.get(
        //             `lists/current/hardcover-nonfiction.json`
        //         );
        //         return responseNonFiction.data.results.books;
        //     } catch (err) {
        //         console.log(err);
        //     }
        // };

        // const booksFiction = fetchDataFiction();
        // const bookNonFiction = fetchDataNonFiction();

        // setBestBooks({
        //     fiction: booksFiction,
        //     nonFiction: bookNonFiction,
        // });
        fetchDataFiction();
        // console.log(bestBooks);
    }, []);

    return (
        <>
            <h1 className='text-lg font-bold'>BEST SELLER</h1>
            <h2>Fiction</h2>
            {bestBooks.fiction !== undefined
                ? bestBooks.fiction.books.map((book) => {
                      return (
                          <CardBestSeller
                              key={`${book.primary_isbn10}`}
                              bestBooks={book}
                          />
                      );
                  })
                : null}

            <h2 className='mt-6'>Non-Fiction</h2>
            {bestBooks.nonFiction !== undefined
                ? bestBooks.nonFiction.books.map((book) => {
                      return (
                          <CardBestSeller
                              key={`${book.primary_isbn10}`}
                              bestBooks={book}
                          />
                      );
                  })
                : null}
        </>
    );
};

export default ListBestBook;
