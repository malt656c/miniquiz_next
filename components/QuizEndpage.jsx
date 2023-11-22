"use client";
import QuizBackButton from "./QuizBackButton";

export default function QuizEndpage() {
  let backgroundImageStyle = { backgroundImage: 'url("./img/slut1.jpg")' };

  function StartQuiz() {
    alert("hello");
  }

  return (
    <div className="grid place-items-center bg-no-repeat bg-center object-contain h-screen w-screen" style={backgroundImageStyle}>
      <p className="p-4 bg-green-beige rounded-xl mx-8 mt-4 font-headings text-2xl text-center">Tillykke du har gennemført Quizzen</p>
      <button onClick={StartQuiz} type="button" className="bg-green-beige font-bold rounded-lg px-5 py-2.5 text-center  mt-auto text-xl italic" style={{ zIndex: 1 }}>
        Se dit resultat
      </button>
      <div className="bg-green-beige text-center flex flex-col justify-center pl-24 pr-24 mt-auto"></div>
      <div>
        <p className="p-4 bg-green-beige rounded-xl mx-8 mt-4 font-headings text-2xl text-center">Vi har fundet en række produkter som kan dække dine behov.</p>
      </div>
      <QuizBackButton></QuizBackButton>
      <img src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 w-full h-auto top-auto" style={{ zIndex: 1 }} />
    </div>
  );
}
