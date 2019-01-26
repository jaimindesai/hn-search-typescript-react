export const getFormattedDate = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  return `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`;
};
