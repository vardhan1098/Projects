import React, { useEffect, useState } from "react";
import "./Quiz.css";
import { Quizz } from "./Data";

const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score,setScore] = useState(0)

  useEffect(() => {
    const response = Quizz;
    setQuestion(response);
  }, []);

  const NextQuestion = () =>{
    const nextIndex = currentIndex + 1;
    if(nextIndex < question.length){
        setCurrentIndex(nextIndex)
    }else{
        setShowScore(true)
    }
  }

  const selectedAnswer = (selectOption) =>{
    if(selectOption === question[currentIndex].correctAnswer){
        setScore(score +1);
    }

  }

  return (
    <div>
      {showScore ? (
        <div className="quiz-head">
          <h2> Quiz is Finshied Your score is :{score}/{question.length} </h2>
        </div>
      ) : (
        question.length > 0 && (
          <div className="quiz-body">
            <h2>{question[currentIndex].question}</h2>
            <div>
                {question[currentIndex].options.map((item,index)=>
                <button key={index} className="options"onClick={()=>selectedAnswer(item) === "true"?"green":"yellow"}>{item}</button>
                )}
            </div>
            <button className="bt-next" onClick={NextQuestion}>Next</button>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
