"use client";
import Image from "next/image";
export default function ProductCard(props) {
  return (
    <div className="outline outline-2 outline-matas-grey p-4 min-w-[250px] w-[min-content] max-w-[300px] grid gap-2 place-items-center rounded-lg">
      <Image className="mt-auto" src={props.image} height={100} width={100} alt={props.name}></Image>
      <span className="font-bold font-centuryGothic max-w-[200px] mt-auto ">{props.name}</span>
      <span className="font-bold justify-start">{props.price}</span>
      <div className="flex space-x-4">
        <span className="bg-matas-blue text-matas-white rounded-lg py-2 px-10 ">Læg i kurv</span>
        <div className="bg-matas-grey m-auto rounded-lg ">
          <img className="m-auto p-2" src="/img/heart.svg" alt="hjerte" />
        </div>
      </div>
    </div>
  );
}
