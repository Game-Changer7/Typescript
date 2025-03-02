import React from "react";

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);

  return (
    <div style={{ padding: "1rem" }}>
      <p>Count: {count}</p>
      <div style={styles.counter}>
        <button
          style={{ ...styles.incrementButton, ...styles.someOtherClass }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={{ ...styles.decrementButton, ...styles.someOtherClass }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

const styles = {
  counter: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  someOtherClass: {
    padding: "0.5rem 1rem",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  incrementButton: {
    backgroundColor: "green",
    color: "white",
  },
  decrementButton: {
    backgroundColor: "red",
    color: "white",
  },
};

export default Counter;
