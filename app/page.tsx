'use client';

import styles from './page.module.scss';

import SearchCard from './components/SearchCard/SearchCard';
import NavBar from './components/NavBar/NavBar';

export default function Home() {
  return (
    <main className={styles.home}>
      <NavBar />
      <div className={styles.home__page}>
        <section className={styles.home__hero}>
          <h2 className={styles.home__title}>
            Find the most selling games worldwide!
          </h2>
        </section>
        <div className={styles.home__image}></div>
        <SearchCard />
      </div>
    </main>
  );
}
