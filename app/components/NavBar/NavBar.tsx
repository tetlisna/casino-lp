import Link from 'next/link';
import Logo from '../Logo';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.nav__logo}>
        <Logo />
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
