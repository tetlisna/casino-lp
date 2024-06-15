import { useEffect, useState } from 'react';

import { filterByQuery } from '@/utils/filterByQuery';
import gameJSON from '../../../api/games.json';
import { useDebounce } from '@/hooks/useDebounce';
import CardList from '../CardList/CardList';

import styles from './SearchCard.module.scss';

const SearchCard: React.FC = () => {
  const [title, setTitle] = useState('');
  const [preview, setPreview] = useState(gameJSON);
  const [visibleCards, setVisibleCards] = useState([...gameJSON]);
  const debounceTitle = useDebounce(title);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (debounceTitle.length) {
      setVisibleCards(filterByQuery(gameJSON, debounceTitle));
    } else {
      setVisibleCards([...gameJSON]);
    }

    return () => {};
  }, [debounceTitle]);

  return (
    <>
      <form className={styles.search__form} onSubmit={handleSubmit}>
        <label className={styles.search__label}>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Enter a title to search"
            onChange={handleInputChange}
          />
        </label>
      </form>
      {preview && (
        <div className={styles.cardResults}>
          <CardList cards={visibleCards} />
        </div>
      )}
    </>
  );
};

export default SearchCard;
