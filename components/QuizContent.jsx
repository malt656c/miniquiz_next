"use client";
import QuizAnswerButton from "./QuizAnswerButton";
import QuizBackButton from "./QuizBackButton";
import QuizQuestion from "./QuizQuestion";
import { useState } from "react";
import Tips from "./Tips";

export default function QuizContent(props) {
  const categories = props.categories;
  const quizData = props.content;
  const products = props.products;
  const tips = props.tips;
  const [questionCount, setQuestionCount] = useState(0);
  const [currentFilters, setCurrentFilters] = useState([]);

  let currentQuestion = quizData[questionCount];
  let backgroundImageStyle = {
    backgroundImage: `url(${currentQuestion?.baggrundsbillede})`,
  };
  console.log(backgroundImageStyle);
  const onGoBack = () => {
    if (questionCount !== 0) {
      setQuestionCount(questionCount - 1);
      setCurrentFilters(currentFilters.splice(0, questionCount - 1));
    }
  };
  const onAnswer = (filters) => {
    if (questionCount < quizData.length) {
      setQuestionCount(questionCount + 1);
      setCurrentFilters(currentFilters.concat([filters]));
    }
  };
  console.log(currentFilters);
  console.log(products.filter((i) => !currentFilters.flat().includes(i.categories[3] || i.categories[4])));
  return (
    <div className="grid place-items-center bg-no-repeat bg-center object-contain h-150 w-90" style={backgroundImageStyle}>
      <span>spørgsmål:{questionCount}</span>
      <div className="w-96 text-xl">
        <QuizQuestion content={currentQuestion?.spørgsmål} />
      </div>

      <div className="flex gap-4 px-2 flex-wrap w-26 ">
        {currentQuestion?.svarListe.map((s) => {
          return (
            <QuizAnswerButton
              key={Math.random()}
              content={s.svar}
              clickEvent={() => {
                onAnswer(s.filter);
              }}
              ikon={s.ikon}
            />
          );
        })}
      </div>
      <div className="grid place-items-center p-2 w-80 h-40">
        <Tips content={currentQuestion?.tip} />
      </div>

      <QuizBackButton clickEvent={onGoBack} />
    </div>
  );
}
