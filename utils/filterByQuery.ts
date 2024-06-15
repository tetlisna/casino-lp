import { IGame } from '@/app/types/IGame';

export const filterByQuery = (games: IGame[], query: string) => {
  const normalizedQuery = query.trim().toLowerCase();

  return games.filter((game) =>
    game.title.toLowerCase().includes(normalizedQuery),
  );
};
