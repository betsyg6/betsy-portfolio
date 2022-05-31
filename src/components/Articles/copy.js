export const mediumRssFeed =
  'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40grotoned'

export const shownArticles = 3

// used to parse the publication date of medium articles
export const parseDate = (date) => {
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)

  switch (month) {
    case '01':
      return ' January ' + day + ', ' + year
    case '02':
      return ' February ' + day + ', ' + year
    case '03':
      return ' March ' + day + ', ' + year
    case '04':
      return ' April ' + day + ', ' + year
    case '05':
      return ' May ' + day + ', ' + year
    case '06':
      return ' June ' + day + ', ' + year
    case '07':
      return ' July ' + day + ', ' + year
    case '08':
      return ' August ' + day + ', ' + year
    case '09':
      return ' September ' + day + ', ' + year
    case '10':
      return ' October ' + day + ', ' + year
    case '11':
      return ' November ' + day + ', ' + year
    case '12':
      return ' December ' + day + ', ' + year
    default:
      return 'No publication date'
  }
}
