import nyt from '../apis/nyt';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
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

                setBestBooks({
                    fiction: responseFiction,
                    nonFiction: responseNonFiction,
                });
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataFiction();
    }, []);

    return (
        <>
            <h1 className="text-lg font-bold">BEST SELLER</h1>
            <h2>Fiction</h2>
            <div className="flex flex-wrap gap-6">
                {bestBooks.fiction !== undefined
                    ? bestBooks.fiction.books.map((book) => {
                          return (
                              <Link
                                  to={`/${book.primary_isbn10}`}
                                  key={`${book.primary_isbn10}`}
                              >
                                  <CardBestSeller
                                      bestBooks={book}
                                  />
                              </Link>
                          );
                      })
                    : null}
            </div>
            <h2 className="mt-6">Non-Fiction</h2>
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

            <div>
                {/* Jangan lupa gunakan outlet di sini (anggap seperti slot yang bisa dimasukkan apa saja) */}
                <Outlet />
            </div>
        </>
    );
};

export default ListBestBook;
