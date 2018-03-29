const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isObject = p => {
  return Object.prototype.toString.call(p) === '[object Object]'
}
const isString = p => {
  return Object.prototype.toString.call(p) === '[object String]'
}
const isArray = p => {
  return Object.prototype.toString.call(p) === '[object Array]'
}

module.exports = {
  formatTime: formatTime,
  isObject: isObject,
  isString: isString,
  isArray: isArray
}
