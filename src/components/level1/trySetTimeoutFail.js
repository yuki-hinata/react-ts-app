/* eslint-disable no-undef */
export const trySetTimeoutFail = () => {
  try {
    setTimeout(function() {
      // eslint-disable-next-line no-unused-expressions
      dddddd
    }, 1000)
  } catch(e) {
    alert('catchの中です');
  }
}


