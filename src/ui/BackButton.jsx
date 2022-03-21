import { useNavigate } from "react-router-dom"

export const BackButton = () => {
  const history = useNavigate();

const Back = () => {
  history('/')
}

return (
  <button onClick={Back}>戻る</button>
)
}
