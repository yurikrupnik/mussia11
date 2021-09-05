import { useState, useCallback } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Pagination } from '@mussia11/pagination';
import type { PaginationProps } from '@mussia11/pagination';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState(0);
  const onChangePage: PaginationProps['onChangePage'] = useCallback(
    (e, p) => {
      setPage(p);
    },
    [setPage]
  );
  return (
    <>
      <Head>
        <title>Welcome to jarvis!</title>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to jarvis!</h1>
        </header>
        <main>
          <Pagination
            count={100}
            rowsPerPage={25}
            page={page}
            onChangePage={onChangePage}
          />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
