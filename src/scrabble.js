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
  constructor(user, totalScore = 0) {
    this.user = user
    this.totalScore = totalScore
  }

  totalWords(word) {
    const totalWords = []
    this.totalWords = totalWords.push(word)
  }

  calTotalScore(score) {
    this.totalScore += score
    return this.totalScore
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

  score(word) {
    let score = 0
    if (word === null) {
      return (
        'The score for this word is ' +
        score +
        '. \n Your total score is ' +
        this.totalScore +
        '.'
      )
    }

    const wordToCheck = word.toUpperCase()

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
    this.totalScore = this.calTotalScore(score)
    return (
      'The score for this word is ' +
      score +
      '. \n Your total score is ' +
      this.totalScore +
      '.'
    )
  }
}

const Ning = new Scrabble('Ning')
console.log('Create user Ning: ', Ning)
console.log('Ning score: \n', Ning.score('dog'))
console.log('Update user Ning: ', Ning)
console.log('Ning score: \n', Ning.score('cat'))
console.log('Update user Ning: ', Ning)
console.log('Ning score: \n', Ning.score('cabbage'))
console.log('Update user Ning: ', Ning)

module.exports = Scrabble
