const filterData = (filters, data) => {
  if (!data) return [];
  return data.filter((item) => {
    const { title, subTitle } = item;
    const { color, search } = filters;
    if (color !== '' && item.backgroundColor !== color) return false;
    if (search !== '' && !title.toLowerCase().includes(search.toLowerCase()) && !subTitle.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
};

export default filterData;
