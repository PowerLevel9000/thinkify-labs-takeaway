export const getColor = (percentage) => {
    if (percentage >= 80) {
        return 'red'; // Color for high usage
    } else if (percentage >= 50) {
        return 'orange'; // Color for moderate usage
    } else {
        return 'green'; // Color for low usage
    }
};