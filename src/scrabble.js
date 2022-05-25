const letterValue = [
  {
    letter: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    value: 1
  },
  {
    letter: ['D', 'G'],
    value: 2
  },
  {
    letter: ['B', 'C', 'M', 'P'],
    value: 3
  },
  {
    letter: ['F', 'H', 'V', 'W', 'Y'],
    value: 4
  },
  {
    letter: ['K'],
    value: 5
  },
  {
    letter: ['J', 'X'],
    value: 8
  },
  {
    letter: ['Q', 'Z'],
    value: 10
  }
]

console.log('value of K: ', letterValue[4].value)
console.log('Include K', letterValue[4].letter.includes('K'))

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

  //     for (let j = 0; j < letterValue.length; j++) {
  //       if (letterValue[j].letter.includes(wordToCheck[i])) {

  //         thisScore = letterValue[j].value
  //         console.log('index: ', i)
  //         console.log('original score: ', thisScore)

  //         if (indexOfOpenCurlyBracket < i && i < indexOfCloseCurlyBracket) {
  //           thisScore *= 2
  //           console.log('doubled score: ', thisScore)
  //         }

  //         if (indexOfOpenSquareBracket < i && i < indexOfCloseSquareBracket) {
  //           thisScore *= 3
  //           console.log('tripled score: ', thisScore)
  //         }

  //         score += thisScore
  //         console.log('total score: ', score)
  //       }
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

      for (let j = 0; j < letterValue.length; j++) {
        if (letterValue[j].letter.includes(wordToCheck[i])) {
          thisScore = letterValue[j].value
          if (getDouble) {
            thisScore *= 2
          } else if (getTriple) {
            thisScore *= 3
          }
          score += thisScore
        } else if (wordToCheck[i] === '{') {
          getDouble = true
        } else if (wordToCheck[i] === '[') {
          getTriple = true
        } else if (wordToCheck[i] === '}') {
          getDouble = false
        } else if (wordToCheck[i] === ']') {
          getTriple = false
        }
      }
    }
    return score
  }
}

module.exports = Scrabble
