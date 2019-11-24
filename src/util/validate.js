/**
 *
 * vlidation의 분리를 생각해보자!
 */
const validateSpace = value => {
  const spaceRegex = /\s/
  return spaceRegex.test(value)
}

const validateSpecial = value => {
  const specailRegex = /[`~!@#$%^&*|\\'";:/?]/gi
  return specailRegex.test(value)
}

/**
 *
 * @param {Array} array
 * @param {string} compareProperty
 * @param {number} minValueLength
 *
 * in Array.reduce , compareProperty는 curr items's 대조군의 property
 * 이메일, 문장 작성 같은 예외 상황 애들을 처리 할 수 있도록
 * 개선이 필요하다
 */
export const validateInputInfo = (array, compareProperty, minValueLength) => {
  const isValid = array.reduce((prev, curr) => {
    let isValid =
      !validateSpace(curr[compareProperty]) &&
      !validateSpecial(curr[compareProperty]) &&
      curr[compareProperty].length > minValueLength
    return prev && isValid
  }, true)
  return isValid
}
