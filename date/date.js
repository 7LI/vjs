/**
 * Format given date
 * 
 * @param  {Object} date   Date object
 * @param  {String} format Time format:
 *                         y-year
 *                         M-month
 *                         d-day
 *                         m-minute
 *                         s-second
 * @return {String}        Formatted time string
 * @example ftime(new Date(), 'y-M-d h:m:s')
 */
function ftime(date, format) {
  var y = date.getFullYear()
  var M = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()
  M = checkTime(M)
  d = checkTime(d)
  h = checkTime(h)
  m = checkTime(m)
  s = checkTime(s)
  function checkTime(t) {
    return t < 10 ? '0' + t : t
  }
  return format.replace('y', y)
               .replace('M', M)
               .replace('d', d)
               .replace('h', h)
               .replace('m', m)
               .replace('s', s)
}