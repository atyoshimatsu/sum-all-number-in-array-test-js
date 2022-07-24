const sumItems = (array) => {
  if (array.length === 0) {
    return 0;
  }

  const tailElment = array.pop();
  if (Array.isArray(tailElment)) {
    return sumItems(array) + sumItems(tailElment);
  }

  return sumItems(array) + tailElment;
};

module.exports = sumItems;
