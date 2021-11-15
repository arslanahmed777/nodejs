const Paginate = (arrayList, currentPageNumber, pageSize) => {
  const startIndex = (currentPageNumber - 1) * pageSize;

  return arrayList.slice(startIndex, pageSize * currentPageNumber);
};

const FormatDate = (date, formatTo) => {
  let seperator = "";
  let a = new Date(date);

  const month =
    (a.getMonth() + 1).toString().length === 1
      ? "0" + (a.getMonth() + 1).toString()
      : a.getMonth() + 1;

  const day =
    a.getDate().toString().length === 1
      ? "0" + a.getDate().toString()
      : a.getDate();

  let b = {
    dd: day,
    mm: month,
    yyyy: a.getFullYear(),
  };

  if (formatTo.includes("/")) seperator = "/";
  else if (formatTo.includes("-")) seperator = "-";

  let elements = formatTo.split(seperator);

  const newDate =
    b[elements[0]] + seperator + b[elements[1]] + seperator + b[elements[2]];

  return newDate;
};

module.exports = { Paginate, FormatDate };