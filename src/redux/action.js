import { DECREASE, INCREASE } from "./actionName";

const actionCreator = {
  increase: (count) => ({ type: INCREASE, payload: { count: count + 1 } }),
  decrease: (count) => ({ type: DECREASE, payload: { count: count - 1 } })
}

export default actionCreator;