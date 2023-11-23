"use client";
export default function QuizBackButton(props) {
  return (
    <div className="flex gap-4 p-2">
      <button onClick={props.clickEvent} className="p-2  rounded-xl bg-green-beige">
        <img src="/img/arrow.svg" alt="pil" />
      </button>
    </div>
  );
}
//http://localhost:3000/img/yes.svghttp://localhost:3000/img/yes.svghttp://localhost:3000/img/yes.svg