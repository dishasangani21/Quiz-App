"use client";
import { quizData } from "@/data/data";
import { useEffect, useState } from "react";

const QuizContainer = () => {
  const [currQuestion, setCurrQuestion] = useState(null);
  const [currQuestionIndex, setCurrQuestionIndex] = useState(0);
  const [currSelected, setCurrSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  useEffect(() => {
    setCurrQuestion({ ...quizData[currQuestionIndex] });
  }, [currQuestionIndex]);

  const handleNext = (e) => {
    e.preventDefault();
    if (currSelected === currQuestion?.answer) {
      setResult({
        ...result,
        score: result.score + 5,
        correctAnswers: result.correctAnswers + 1,
      });
    } else {
      setResult({
        ...result,
        wrongAnswers: result.wrongAnswers + 1,
      });
    }
    setCurrSelected(null);
    setCurrQuestionIndex((prev) => prev + 1);
    if (currQuestionIndex == quizData.length - 1) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };
  const handleCurrSelect = (option) => {
    setCurrSelected(option);
  };
  return (
    <div className="w-[90vw] md:w-[60vw] min-h-[75vh] bg-slate-100 text-black rounded-md shadow-lg flex flex-col gap-6 p-5 overflow-y-scroll">
      {!showResult ? (
        <div>
          <h2 className="text-xl font-medium text-center">
            Question {currQuestionIndex + 1} <span>/{quizData?.length}</span>
                  </h2>
                  <div className="h-[0.5px] my-5 w-full bg-slate-800 rounded-full md:hidden"></div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium mb-5">
              {currQuestion?.question}
            </h2>
            <div className="flex flex-col gap-5">
              {currQuestion &&
                currQuestion?.options?.map((option, idx) => (
                  <div
                    key={idx}
                    className={`w-full border-2 border-black rounded-md p-5 cursor-pointer ${
                      currSelected === option
                        ? "bg-slate-700 text-slate-100"
                        : ""
                    } transition ease-in duration-200`}
                    onClick={() => handleCurrSelect(option)}
                  >
                    {option}
                  </div>
                ))}
            </div>
            <button
              type="button"
              onClick={handleNext}
              className="primary__btn mt-5"
              disabled={currSelected ? false : true}
            >
              {currQuestionIndex === quizData?.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-medium">Result</h1>
          <h2 className="text-xl font-medium">
            Score: <span>{result.score}</span>
          </h2>
          <h2 className="text-xl font-medium">
            Percentage: <span>{(result.score / 25) * 100}%</span>
          </h2>
          <h2 className="text-xl font-medium">
            Correct Answers: <span>{result.correctAnswers}</span>
          </h2>
          <h2 className="text-xl font-medium">
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </h2>
          <button
            type="button"
            className="primary__btn"
            onClick={() => {
              location.reload();
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizContainer;
