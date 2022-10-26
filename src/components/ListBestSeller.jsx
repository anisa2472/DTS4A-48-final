import nytInstance from '../apis/nyt';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CardBestSeller from './CardBestSeller';

const ListBestBook = () => {
    const [bestBooks, setBestBooks] = useState([
        {
            fiction: [],
            nonFiction: [],
        },
    ]);

    const getBestFictionBooks = async () => {
        const response = await nytInstance.get(
            `lists/current/hardcover-fiction.json`
        );
        return response.data.results;
    };

    const getBestNonFictionBooks = async () => {
        const response = await nytInstance.get(
            `lists/current/hardcover-nonfiction.json`
        );
        return response.data.results;
    };

    useEffect(() => {
        const fetchData = async () => {
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
        fetchData();
    }, []);

    return (
        <div className="p-6  mb-auto flex-1">
            <h1 className="text-lg font-bold">BEST SELLER</h1>
            <div className="flex w-full justify-between">
                <div className='bg-gothic p-6'>
                    <h2 className='pb-3 text-dark font-bold'>Fiction</h2>
                    <div className="flex flex-wrap gap-6">
                        {bestBooks.fiction !== undefined
                            ? bestBooks.fiction.books
                                  .slice(0, 5)
                                  .map((book) => {
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
                </div>
                <div className='bg-gothic p-6'>
                    <h2 className='pb-3 text-dark font-bold'>Non-Fiction</h2>
                    <div className="flex flex-wrap gap-6">
                        {bestBooks.nonFiction !== undefined
                            ? bestBooks.nonFiction.books
                                  .slice(0, 5)
                                  .map((book) => {
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
                </div>
            </div>
            <div>
                {/* Jangan lupa gunakan outlet di sini (anggap seperti slot yang bisa dimasukkan apa saja) */}
                <Outlet />
            </div>
        </div>
    );
};

export default ListBestBook;
