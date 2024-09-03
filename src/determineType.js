import { questions } from './data'

export function determineType(answers) {
  const typeCounts = [0, 0, 0, 0]
  const typeMinIds = { 1: Infinity, 2: Infinity, 3: Infinity, 4: Infinity }

  answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) {
      const optionType = questions[questionIndex].options[answerIndex].type
      typeCounts[optionType - 1]++
      typeMinIds[optionType] = Math.min(
        typeMinIds[optionType],
        questions[questionIndex].id
      )
    }
  })

  const maxCount = Math.max(...typeCounts)
  const maxTypes = typeCounts
    .map((count, index) => (count === maxCount ? index + 1 : null))
    .filter((type) => type !== null)

  if (maxTypes.length === 1) {
    return maxTypes[0]
  }

  const minIdType = maxTypes.reduce((minType, currentType) => {
    return typeMinIds[currentType] < typeMinIds[minType] ? currentType : minType
  }, maxTypes[0])

  return minIdType
}
