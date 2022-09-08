export function titleCase(str) {
  const lowercase = [
    "a",
    "and",
    "the",
    "an",
    "at",
    "by",
    "down",
    "for",
    "from",
    "in",
    "into",
    "like",
    "near",
    "of",
    "off",
    "on",
    "onto",
    "over",
    "past",
    "to",
    "upon",
    "with",
  ]

  let words = str.toLowerCase().split(" ")
  let title = words.map(function (word) {
    if (!lowercase.includes(word) || word === words[0]) {
      return word.replace(word[0], word[0].toUpperCase())
    } else {
      return word
    }
  })

  return title.join(" ")
}
