'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  src: string;
  alt: string;
};

const LinkSocial: React.FC<Props> = ({ href, src, alt }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <Image src={src} width={30} height={30} alt={alt} />
  </Link>
);

export default LinkSocial;
