import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function incrementCounter() {
    if (counter < 2) {
      setCounter((s) => s + 1);
    }
  }
  function decrementCounter() {
    if (counter > 0) {
      setCounter((s) => s - 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={counter >= 0 ? "active" : ""}>1</div>
            <div className={counter >= 1 ? "active" : ""}>2</div>
            <div className={counter >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {counter + 1}: {messages[counter]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={decrementCounter}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={incrementCounter}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
