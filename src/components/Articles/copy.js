export const mediumRssFeed =
  'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40grotoned';

export const shownArticles = 3;

// used to parse the publication date of medium articles
export const parseDate = (date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const day = date.substring(8, 10);

  switch (month) {
    case '01':
      return day + ' January ' + year;
    case '02':
      return day + ' February ' + year;
    case '03':
      return day + ' March ' + year;
    case '04':
      return day + ' April ' + year;
    case '05':
      return day + ' May ' + year;
    case '06':
      return day + ' June ' + year;
    case '07':
      return day + ' July ' + year;
    case '08':
      return day + ' August ' + year;
    case '09':
      return day + ' September ' + year;
    case '10':
      return day + ' October ' + year;
    case '11':
      return day + ' November ' + year;
    case '12':
      return day + ' December ' + year;
    default:
      return 'No publication date';
  }
};
