import styles from './CardList.module.scss';
import Card from '../Card/Card';
import { ICard } from '@/types/ICard';

const API_URL_GAMES = 'https://www.freetogame.com/api/games';

type Props = {
  search: string;
};

const getCards = async (): Promise<ICard[]> => {
  const res = await fetch(`${API_URL_GAMES}`);
  return await res.json();
};

const CardList: React.FC<Props> = async ({ search }: { search: string }) => {
  let cards: ICard[] = await getCards();

  if (search) {
    cards = cards.filter((item) =>
      item.title.toLowerCase().includes(search.trim().toLowerCase()),
    );
  }

  return (
    <div className={styles.cardList}>
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
