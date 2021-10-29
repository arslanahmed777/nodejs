const Paginate = (arrayList, currentPageNumber, pageSize) => {
  const startIndex = (currentPageNumber - 1) * pageSize;

  return arrayList.slice(startIndex, pageSize * currentPageNumber);
};

module.exports = Paginate;