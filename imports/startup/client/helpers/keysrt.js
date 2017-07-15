export default function keysrt(key) {
  return function(a,b){
    let lowA = a[key].toLowerCase()
    let lowB = b[key].toLowerCase()

    if (lowA > lowB) return 1
    if (lowA < lowB) return -1
    return 0
  }
}
