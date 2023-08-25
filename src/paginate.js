const paginate = (data) => {
  const pageSize = 4;
  const pages = Math.ceil(data.length / pageSize);
  const newData = Array.from({ length: pages }, (_, index) => {
    const start = index * pageSize;
    return data.slice(start, start + pageSize);
  });
  return newData;
};

export default paginate;
