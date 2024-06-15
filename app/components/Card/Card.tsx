import { ICard } from '@/types/ICard';
import styles from './Card.module.scss';
import Link from 'next/link';

import Image from 'next/image';

type Props = {
  card: ICard;
};

const Card: React.FC<Props> = ({ card }) => (
  <div className={styles.card}>
    <div className={styles.card__content}>
      <h3 className={styles.card__title}>{card.title}</h3>
      <p className={styles.card__description}>{card.description}</p>
    </div>

    <div className={styles.card__imagebox}>
      <Link href={card.gameUrl} target="_blank" rel="noopener noreferrer">
        <img
          className={styles.card__image}
          src={card.imgUrl}
          width={100}
          height={100}
          alt={card.title}
        />
      </Link>
    </div>
  </div>
);

export default Card;
