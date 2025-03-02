import React from "react";
import classNames from "classnames";

type Action = {
  type: "increment" | "decrement";
};

type State = {
  count: number;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const Counter: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <div style={{ padding: "1rem" }}>
      <p>Count: {state.count}</p>
      <div className="counter">
        <button
          className={classNames("incrementButton", "someOtherClass")}
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>

        <button
          className={classNames("decrementButton", "someOtherClass")}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
