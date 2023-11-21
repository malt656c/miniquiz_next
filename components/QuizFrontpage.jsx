// export default function QuizFrontpage() {
//   let backgroundImageStyle = { backgroundImage: 'url("./img/forside.jpeg")' };

//   return (
//     <div className="grid place-items-center bg-no-repeat bg-center object-contain h-screen w-screen content-center" style={backgroundImageStyle}>
//       {/* <img className="w-4/12" src="/img/forside.jpeg" alt="forside" /> */}

//       <button type="button" class=" bg-green-beige font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2 mt-72 text-xl italic">
//         Find dit Match
//       </button>
//       <div className="bg-green-beige text-center mt-auto p-24">
//         <h1 className="font-bold text-xl italic ">Helse Quiz</h1>
//         <p className="">Find dit absolut bedste match</p>
//       </div>
//     </div>
//   );
// }

export default function QuizFrontpage() {
  let backgroundImageStyle = { backgroundImage: 'url("./img/forside.jpeg")' };

  return (
    <div className="grid place-items-center bg-no-repeat bg-center object-contain h-screen w-screen" style={backgroundImageStyle}>
      <button type="button" className="bg-green-beige font-bold rounded-lg px-5 py-2.5 text-center me-2 mb-2 mt-72 text-xl italic">
        Find dit Match
      </button>
      <div className="bg-green-beige text-center h-full flex flex-col justify-start pl-24 pr-24">
        <h1 className="font-bold text-3xl italic mb-2 pt-20">Helse Quiz</h1>
        <p className="pt-10 text-lg">Find dit absolut bedste match</p>
      </div>
    </div>
  );
}
