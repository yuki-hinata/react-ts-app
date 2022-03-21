/* eslint-disable no-undef */
export const tryFail = () => {
  try {
    alert('Start of try runs')
    // eslint-disable-next-line no-unused-expressions
    kkkk
  } catch(err) {
    alert('Catch start')
    throw err
  } finally {
    alert(err)
  }
}

