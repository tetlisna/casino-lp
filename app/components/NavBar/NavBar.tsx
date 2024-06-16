'use client';

import styles from './NavBar.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import LinkSocial from '../Link/LinkSocial';

const socialLinks = [
  {
    href: 'https://github.com/tetlisna',
    src: '/icons/github_icon.png',
    alt: 'Github link',
  },
  {
    href: 'https://www.linkedin.com/in/tanyalisna',
    src: '/icons/linkedin_icon.png',
    alt: 'Linkedin link',
  },
  {
    href: 'https://t.me/tetlisna',
    src: '/icons/telegram_icon.png',
    alt: 'Telegram link',
  },
];

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
      <div className={styles.nav__links}>
        {socialLinks.map((link, index) => (
          <LinkSocial key={index} {...link} />
        ))}
        <Link
          href=""
          className={styles.nav__title}
          target="_blank"
          rel="noopener noreferrer"
        >
          About me
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
