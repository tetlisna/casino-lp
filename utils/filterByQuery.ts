import { ICard } from '@/types/ICard';

export const filterByQuery = (games: ICard[], query: string) => {
  const normalizedQuery = query.trim().toLowerCase();

  return games.filter((game) =>
    game.title.toLowerCase().includes(normalizedQuery),
  );
};
