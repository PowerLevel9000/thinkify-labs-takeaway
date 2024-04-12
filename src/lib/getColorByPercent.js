const getColor = (percentage) => {
  if (percentage >= 80) {
    return 'red'; // Color for high usage
  } if (percentage >= 50) {
    return 'orange'; // Color for moderate usage
  }
  return 'green'; // Color for low usage
};

export default getColor;
