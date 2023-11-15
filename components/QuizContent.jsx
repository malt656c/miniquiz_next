"use client";
import QuizAnswerButton from "./QuizAnswerButton";
import QuizBackButton from "./QuizBackButton";
import QuizQuestion from "./QuizQuestion";
import { useState } from "react";

export default function QuizContent(props) {
  const categories = props.categories;
  const quizData = props.content;
  const products = props.products;
  const [questionCount, setQuestionCount] = useState(0);
  const [currentFilters, setCurrentFilters] = useState(categories);

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
      setCurrentFilters(currentFilters.filter((i) => !filters.includes(i)));
    }
  };
  console.log(products.filter((i) => currentFilters.includes(i.categories[3] || i.categories[4])));
  return (
    <div className="grid place-items-center gap-8 p-4">
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
            />
          );
        })}
      </div>

      <QuizBackButton clickEvent={onGoBack} />
    </div>
  );
}
