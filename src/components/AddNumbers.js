// AddNumbers.js
import React, { useState, useRef, useEffect } from "react";
import "./AddNumbers.css";

function AddNumbers() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 100));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 100));
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.focus();
  }, []);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
    setIsCorrect(null);
  };

  const checkAnswer = (event) => {
    const numericalAnswer = Number(answer);
    if (event.key === "Enter" || event.type === "click") {
      if (num1 + num2 === numericalAnswer) {
        setCorrect(correct + 1);
        setNum1(Math.floor(Math.random() * 100));
        setNum2(Math.floor(Math.random() * 100));
        setAnswer("");
        setIsCorrect(true);
      } else {
        setIncorrect(incorrect + 1);
        setIsCorrect(false);
      }
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 rounded-xl flex space-y-4 shadow border p-8 m-10">
      <p className="question">
        {num1} + {num2} ={" "}
      </p>
      <input
        ref={answerRef}
        className="answer-input"
        type="text"
        value={answer}
        onChange={handleAnswerChange}
        onKeyPress={checkAnswer}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={checkAnswer}
      >
        Check Answer
      </button>
      {isCorrect === false && <p className="incorrect">Incorrect</p>}
      {isCorrect === true && <p className="correct">Correct</p>}
      <p>Correct answers: {correct}</p>
      <p>Incorrect answers: {incorrect}</p>
    </div>
  );
}

export default AddNumbers;
