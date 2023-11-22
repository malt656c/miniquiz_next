"use client";
export default function QuizFrontpage() {
  return (
    <div className="grid place-items-center bg-no-repeat bg-center bg-cover absolute inset-0 p-4 z-10" style={{ backgroundImage: 'url("./img/forside.jpeg")' }}>
      <div className="bg-green-beige text-center flex flex-col p-16  gap-10 drop-shadow-md rounded-lg">
        <h1 className="font-headings text-3xl">Helse Quiz</h1>
        <p className="text-lg">Find dit absolut bedste match</p>
      </div>
      <button
        type="button"
        className="bg-green-beige font-centuryGothic rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl transition-all hover:scale-105 hover:drop-shadow-md"
        onClick={(e) => {
          e.target.parentElement.style={display: "none"}
          e.target.parentElement.remove();
        }}
      >
        Find dit Match
      </button>
    </div>
  );
}
