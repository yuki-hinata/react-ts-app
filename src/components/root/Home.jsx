import { useNavigate } from "react-router-dom";
import { BackButton } from "../../ui/BackButton";

export const Home = () => {
  const history = useNavigate();

  const level1 = () => {
    history("/level1")
  }

  const level2 = () => {
    history("/level2")
  }

  const level3 = () => {
    history("/level3")
  }

  const level4 = () => {
    history("/level4")
  }

  const level5 = () => {
    history("/level5")
  }

  const kyara = () => {
    history('/character')
  }

  

  return (
    <div>
      <button onClick={level1}>level1</button>
      <button onClick={level2}>level2</button>
      <button onClick={level3}>level3</button>
      <button onClick={level4}>level4</button>
      <button onClick={level5}>level5</button>
      <button onClick={kyara}>character</button>
      <hr />
      <BackButton />
    </div>
  )
}
