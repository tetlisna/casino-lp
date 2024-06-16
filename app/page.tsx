import styles from './page.module.scss';

import Search from './components/Search/Search';
import { Suspense } from 'react';
import CardList from './components/CardList/CardList';

const Home:React.FC = async ({
  searchParams,
}: {
  searchParams?: {
    s?: string;
  };
}) => {
  const s = searchParams?.s || '';

  return (
    <main className={styles.home}>
      <div className={styles.home__page}>
        <section className={styles.home__hero}>
          <h2 className={styles.home__title}>
            Find the most selling games worldwide!
          </h2>
        </section>
        <div className={styles.home__image}></div>
        <Search />
        <Suspense fallback={<p>Loading...</p>}>
          <CardList search={s} />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
