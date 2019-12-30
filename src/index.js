import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CounterContext, CounterProvider } from "./Context";
import "./styles.css";
function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  console.log(state);
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button id="bt1" onClick={() => dispatch({ type: "increment" })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Fetch again</button>
    </div>
  );
}

// function SeparateComponent() {
//   const { state } = useContext(CounterContext);
//   console.log(state);
//   return (
//     <div>
//       <h1>Shared Count: {state.count}</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CounterProvider>
        <Counter />
        {/* <SeparateComponent /> */}
      </CounterProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
export { App };
