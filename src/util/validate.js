/**
 *
 * vlidation의 분리를 생각해보자!
 */

const validate = type => {
  return value => {
    return VALIDATION_FUNC[type](value)
  }
}

export const VALIDATION_TYPE = {
  SPACE: 'SPACE',
  SPETIAL_CHAR: 'SPETIAL_CHAR',
  SPETIAL_FIRST_CHAR: 'SPETIAL_FIRST_CHAR',
  EMAIL: 'EMAIL',
}
const VALIDATION_FUNC = {
  SPACE: value => !/\s/.test(value),
  SPETIAL_CHAR: value => !/[`~!@#$%^&*|\\'";:/?]/gi.test(value),
  SPETIAL_FIRST_CHAR: value => !/^[`~!@#$%^&*|\\'";:/?]/gi.test(value),
  EMAIL: value =>
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      value,
    ),
}
// id, userName

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
export const validateInputInfo = (value, validationArray, minValueLength) => {
  const isValid = validationArray.reduce((prev, curr) => {
    let isValid = value.length > minValueLength && validate(curr)(value)
    console.log(curr, validate(curr)(value), value)
    return prev && isValid
  }, true)
  return isValid
}
