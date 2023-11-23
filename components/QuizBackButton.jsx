"use client";
import Image from "next/image";
export default function QuizBackButton(props) {
  return (
    <div className="flex gap-4 p-2">
      <button onClick={props.clickEvent} className="p-2  rounded-xl bg-green-beige">
        <Image src="/img/arrow.svg" alt="pil" width="27" height="16" />
      </button>
    </div>
  );
}
