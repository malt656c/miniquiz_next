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
    <div className="grid place-items-center gap-8 p-4  bg-[url('/img/fordoejelse.jpg')] bg-cover">
      <span>spørgsmål:{questionCount}</span>
      <QuizQuestion content={currentQuestion?.spørgsmål} />

      <div className="flex gap-4 p-2 flex-wrap max-w-xl">
        {currentQuestion?.svarListe.map((s) => {
          return (
            <QuizAnswerButton
              key={Math.random()}
              content={s.svar}
              clickEvent={() => {
                onAnswer(s.filter);
              }}
              ikon={`img/${s.ikon}`}
            />
          );
        })}
      </div>
      <div className="grid place-items-center gap-8 p-4">
        <Tips />
      </div>

      <QuizBackButton clickEvent={onGoBack} />
    </div>
  );
}
