export const trySuccess = () => {
  try {
    alert('tryの中です')
  } catch {
    alert('cacthの中です')
  }
  alert('終了');
}
