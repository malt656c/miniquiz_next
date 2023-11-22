// "use client";
// import QuizContent from "./QuizContent";

// export default function QuizFrontpage() {
//   let backgroundImageStyle = { backgroundImage: 'url("./img/forside.jpeg")' };

//   function StartQuiz() {
//     alert("hello");
//   }

//   return (
//     <div className="grid place-items-center bg-no-repeat bg-center object-contain h-screen w-screen" style={backgroundImageStyle}>
//       <button onClick={StartQuiz} type="button" className="bg-green-beige font-bold rounded-lg px-5 py-2.5 text-center  mt-auto text-xl italic" style={{ zIndex: 1 }}>
//         Find dit Match
//       </button>
//       <div className="bg-green-beige text-center flex flex-col justify-center pl-24 pr-24 mt-auto">
//         <h1 className="font-bold text-3xl italic mb-2 pt-20">Helse Quiz</h1>
//         <p className="pt-10 pb-20 text-lg">Find dit absolut bedste match</p>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import QuizContent from "./QuizContent";

export default function QuizFrontpage() {
  const [showQuizContent, setShowQuizContent] = useState(false);
  let backgroundImageStyle = { backgroundImage: 'url("./img/forside.jpeg")' };

  function startQuiz() {
    // Vis QuizContent ved at opdatere tilstanden
    setShowQuizContent(true);
  }

  return (
    <div className="grid place-items-center bg-no-repeat bg-center object-contain h-screen w-screen" style={backgroundImageStyle}>
      {!showQuizContent && (
        <button onClick={startQuiz} type="button" className="bg-green-beige font-bold rounded-lg px-5 py-2.5 text-center mt-auto text-xl italic" style={{ zIndex: 1 }}>
          Find dit Match
        </button>
      )}

      {showQuizContent && <QuizContent />}

      <div className="bg-green-beige text-center flex flex-col justify-center pl-24 pr-24 mt-auto">
        <h1 className="font-bold text-3xl italic mb-2 pt-20">Helse Quiz</h1>
        <p className="pt-10 pb-20 text-lg">Find dit absolut bedste match</p>
      </div>
      <img src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 w-full h-auto top-auto" style={{ zIndex: 1 }} />
    </div>
  );
}
