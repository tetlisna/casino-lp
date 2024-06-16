import styles from './Card.module.scss';

import { ICard } from '@/types/ICard';

import Link from 'next/link';
import Image from 'next/image';

type Props = {
  card: ICard;
};

const Card: React.FC<Props> = ({ card }) => (
  <div className={styles.card}>
    <h3 className={styles.card__title}>{card.title}</h3>
    <p className={styles.card__description}>{card.short_description}</p>

    <div className={styles.__imageContainer}>
      <Link href={card.thumbnail} target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.card__image}
          src={card.thumbnail}
          width={300}
          height={300}
          alt={card.title}
        />
      </Link>
    </div>
  </div>
);

export default Card;
