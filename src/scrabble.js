const letterValue = {
  A: 1,
  E: 1,
  I: 1,
  O: 1,
  U: 1,
  L: 1,
  N: 1,
  R: 1,
  S: 1,
  T: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10
}

class Scrabble {
  constructor(word) {
    this.word = word
  }

  // score() {
  //   let score = 0

  //   if (this.word === null) {
  //     return score
  //   }

  //   const wordToCheck = this.word.toUpperCase()

  //   const indexOfOpenCurlyBracket = wordToCheck.indexOf('{')
  //   console.log('indexOfOpenCurlyBracket', indexOfOpenCurlyBracket)
  //   const indexOfCloseCurlyBracket = wordToCheck.indexOf('}')
  //   console.log('indexOfCloseCurlyBracket', indexOfCloseCurlyBracket)

  //   const indexOfOpenSquareBracket = wordToCheck.indexOf('[')
  //   const indexOfCloseSquareBracket = wordToCheck.indexOf(']')

  //   for (let i = 0; i < wordToCheck.length; i++) {
  //     let thisScore = 0
  //     const letterToCheck = wordToCheck[i]

  //     if (Object.keys(letterValue).includes(letterToCheck)) {

  //       thisScore = letterValue[letterToCheck]

  //       if (indexOfOpenCurlyBracket < i && i < indexOfCloseCurlyBracket) {
  //         thisScore *= 2
  //       }

  //       if (indexOfOpenSquareBracket < i && i < indexOfCloseSquareBracket) {
  //         thisScore *= 3
  //       }
  //       score += thisScore
  //     }
  //   }
  //   return score
  // }

  score() {
    let score = 0
    if (this.word === null) {
      return score
    }

    const wordToCheck = this.word.toUpperCase()

    let getDouble = false
    let getTriple = false

    for (let i = 0; i < wordToCheck.length; i++) {
      let thisScore = 0
      const letterToCheck = wordToCheck[i]
      if (Object.keys(letterValue).includes(letterToCheck)) {
        thisScore = letterValue[letterToCheck]
        if (getDouble) {
          thisScore *= 2
        } else if (getTriple) {
          thisScore *= 3
        }
        score += thisScore
      } else if (letterToCheck === '{') {
        getDouble = true
      } else if (letterToCheck === '[') {
        getTriple = true
      } else if (letterToCheck === '}') {
        getDouble = false
      } else if (letterToCheck === ']') {
        getTriple = false
      }
    }
    return score
  }
}

module.exports = Scrabble
