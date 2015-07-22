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