import { ICard } from '@/types/ICard';
import styles from './CardList.module.scss';
import Card from '../Card/Card';

type Props = {
  cards: ICard[];
};

const CardList: React.FC<Props> = ({ cards }) => (
  <div className={styles.cardList}>
    {cards.map((card) => (
      <Card key={card.imgUrl} card={card} />
    ))}
  </div>
);

export default CardList;
