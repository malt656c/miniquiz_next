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
    <div className="flex flex-col place-items-center bg-center bg-cover h-screen max-w-[400px]" style={backgroundImageStyle}>
      <div className="w-96 text-xl">
        <QuizQuestion content={currentQuestion?.spørgsmål} />
      </div>
      <div className=" mt-auto flex flex-col gap-2">
        <div className="flex gap-3 px-2 flex-wrap w-26  ">
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
        <div className=" p-2 w-80 h-40  rounded-xl">{currentQuestion?.tip && <Tips content={currentQuestion?.tip} />}</div>
        <div className=" mb-2 grid place-content-center">
          <QuizBackButton clickEvent={onGoBack} />
        </div>
      </div>
      <img src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 w-full h-auto top-auto" style={{ zIndex: 1 }} />
    </div>
  );
}
