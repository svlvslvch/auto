export const useUrlParams = () => {
  const removeQueryParam = (param: string) => {
    const query = new URLSearchParams(window.location.search);

    query.delete(param);

    const newUrl = `${window.location.pathname}${
      query.toString() ? `?${query.toString()}` : ''
    }`;

    window.history.replaceState({ path: newUrl }, '', newUrl);
  };

  const addQueryParam = (param: string, value: number | string) => {
    const query = new URLSearchParams(window.location.search);

    if (query.has(param)) {
      setQueryParam(param, value);
      return;
    }

    query.append(param, String(value));

    const newUrl = `${query.toString() ? `?${query.toString()}` : ''}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  };

  const setQueryParam = (param: string, value: number | string) => {
    const query = new URLSearchParams(window.location.search);

    if (query.has(param)) {
      query.set(param, String(value));
    } else {
      addQueryParam(param, value);

      return;
    }

    const newUrl = `${query.toString() ? `?${query.toString()}` : ''}`;
    window.history.replaceState({ path: newUrl }, '', newUrl);
  };

  return { removeQueryParam, addQueryParam, setQueryParam };
};
