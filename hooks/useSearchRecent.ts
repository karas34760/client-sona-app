export interface recentProps {
  heading: string;
  link: string;
}

export default function useSearchRecent() {
  /* 
    you'll need to wait until the page has been 
    mounted on the client prior to accessing localStorage
  */
  const typeWindow = typeof window !== 'undefined';

  const recentGetStorage = typeWindow ? localStorage.getItem('recent') : null;

  const recentGetItem = recentGetStorage
    ? (JSON.parse(recentGetStorage) as string[])
    : null;

  /* 
    we have 2 optional
      - 1: recentSetItem always execute? I means will use 'Updating' as the same mechanism lifecyle
      - 2: recentSetItem just only 'Updating' when unmount '<SearchResult />'
  */
  const recentSetItem = (context: string) => {
    if (recentGetStorage) {
      const recentExisted: string[] = JSON.parse(recentGetStorage);

      const filterRecent: string[] = recentExisted.filter(recentValue =>
        recentValue.includes(context)
      );

      if (!filterRecent.length) {
        recentExisted.unshift(context);

        return recentExisted.length > 5
          ? (function () {
              recentExisted.pop();

              localStorage.setItem('recent', JSON.stringify(recentExisted));
            })()
          : localStorage.setItem('recent', JSON.stringify(recentExisted));
      }

      return;
    }
    localStorage.setItem('recent', JSON.stringify([context]));
  };

  const recentRemoveItem = (context: string) => {
    if (recentGetItem) {
      const filter = recentGetItem.filter(recent => recent !== context);
      if (filter.length == 0) {
        return localStorage.removeItem('recent');
      }
      localStorage.setItem('recent', JSON.stringify(filter));
      return filter;
    }
  };
  const recentRemoveAllItem = () => {
    return localStorage.removeItem('recent');
  };

  return {
    recentSetItem,
    recentRemoveItem,
    recentGetItem,
    recentRemoveAllItem,
  };
}
