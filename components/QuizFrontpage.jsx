"use client";
import Image from "next/image";

export default function QuizFrontpage(props) {
  return (
    <div className="m-auto">
      <div className="grid place-items-center bg-no-repeat bg-center bg-cover absolute inset-0 z-10" style={{ backgroundImage: 'url("./img/forside.jpeg")' }}>
        <button type="button" className="bg-green-beige font-centuryGothic rounded-lg px-6 py-3 text-center text-xl transition-all hover:scale-105 hover:drop-shadow-md mt-auto" onClick={props.onStart}>
          Find dit Match
        </button>
        <div className="bg-green-beige text-center flex flex-col justify-center p-12 gap-8 drop-shadow-md rounded-lg">
          <h1 className="font-headings text-3xl ">Helse Quiz</h1>
          <p className="text-lg">Find dit absolut bedste match</p>
        </div>
        <Image src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 right-0 top-auto z-10" width={664} height={32} />
      </div>
    </div>
  );
}
