
import { useObserver } from "mobx-react"; //observable state 사용하기 위한 것
import indexStore from "./modules/indexStore"; //observable state 보관함

const App = () => {
  const { numberStore } = indexStore();

  const onClickInc = () => {
    numberStore.increaseAction(3);
  }

  const onClickDec = () => {
    numberStore.decreaseAction(2);
  }
  return useObserver(() => (
    <div>
      <p>현재 값: {numberStore.num}</p>

      <button onClick={onClickInc}>+</button>
      <button onClick={onClickDec}>-</button>
    </div>
  ))
}

export default App;
