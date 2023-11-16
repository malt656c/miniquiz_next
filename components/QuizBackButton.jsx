"use client";
export default function QuizBackButton(props) {
  return (
    <div className="flex gap-4 p-2">
      <button onClick={props.clickEvent} className="p-2 outline outline-1">
        previous
      </button>
    </div>
  );
}
