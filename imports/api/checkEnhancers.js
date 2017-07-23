export const NonEmptyString = Match.Where((x) => {
  console.log("NonEmptyString", x.length > 0 && x.length < 50)
  let newX = x.replace(/(\r\n|\n|\r)/gm, ' ')
  check(x, String)
  return x.length > 0 && x.length < 50
})
export const ShortNumber = Match.Where((x) => {
  if (x.length == 0) return true

  console.log("ShortNumber", x.toString().length >= 0 && x.toString().length < 20)
  check(x, Match.Maybe(String))

  return x.toString().length >= 0 && x.toString().length < 20
})
export const ValidEmail = Match.Where((x) => {
  if (x.length == 0) return true
  let emailPatternTest =
  (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i).test(x)
  console.log("ValidEmail", x.length <= 50 && emailPatternTest)
  check(x, Match.Maybe(String))
  return x.length >= 0 && x.length <= 50 && emailPatternTest
})
export const ValidGroup = Match.Where((x) => {
  console.log("ValidGroup", x.length >= 0 && x.length < 20)
  check(x, Match.Maybe(String))
  return x.length >= 0 && x.length < 20
})
export const ValidUrl = Match.Where((x) => {
  if (x.length == 0) return true
  let urlPatternTest =
  /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/.test(x);
  console.log("ValidUrl", x.length >= 0 && x.length < 200 && urlPatternTest)
  check(x, Match.Maybe(String))
  return x.length >= 0 && x.length < 200 && urlPatternTest
})
