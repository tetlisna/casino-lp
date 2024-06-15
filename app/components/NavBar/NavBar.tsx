import Link from 'next/link';
import styles from './NavBar.module.scss';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.nav__logo}>
        <Image
          src="./logo.svg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <h1 className={styles.nav__title}>CasinoRoyal</h1>
      </Link>

      <Link
        href="https://github.com/tetlisna"
        className={styles.nav__author}
        target="_blank"
        rel="noopener noreferrer"
      >
        Author
      </Link>
    </nav>
  );
};

export default NavBar;
