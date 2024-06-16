'use client';

import styles from './Search.module.scss';

import { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/useDebounce';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [title, setTitle] = useState('');
  const debounceTitle = useDebounce(title);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debounceTitle.length) {
      params.set('s', debounceTitle);
    } else {
      params.delete('s');
    }

    replace(`${pathname}?${params.toString()}`);
  }, [debounceTitle, pathname, searchParams]);

  return (
    <>
      <label className={styles.search__label}>
        <input
          type="text"
          className={styles.search__input}
          placeholder="Enter a title to search"
          onChange={handleInputChange}
          value={title}
          defaultValue={searchParams.get('s')?.toString()}
        />
      </label>
    </>
  );
};

export default Search;
