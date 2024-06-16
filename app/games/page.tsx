import styles from './CardList.module.scss';

import { ICard } from '@/types/ICard';

import Card from '../components/Card/Card';

const API_URL_GAMES = 'https://www.freetogame.com/api/games';

type Props = {
  cards: ICard[];
};

const getCards = async () => {
  const res = await fetch(API_URL_GAMES);
  return res.json();
};

const CardList: React.FC<Props> = async () => {
  const cards = await getCards();

  return (
    <div className={styles.cardList}>
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
