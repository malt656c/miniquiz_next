"use client";
import Image from "next/image";
export default function ProductCard(props) {
  return (
    <div className="outline outline-2 outline-matas-grey p-4 min-w-[250px] w-[min-content] max-w-[300px] grid gap-4 rounded-lg">
      <Image className="object-contain h-[100px] w-[100px] m-auto" src={props.image} height={100} width={100} alt={props.name} />
<div className="grid">
        <span className="font-bold text-md max-w-[200px]">{props.brand}</span>
        <span className="font-centuryGothic text-sm max-w-[200px]">{props.name}</span>
</div>
      <span className="font-bold">{props.price}</span>
      <div className="flex gap-2">
        <span className="bg-matas-blue text-matas-white rounded-lg py-2 px-10 ">Læg i kurv</span>
        <div className="bg-matas-grey m-auto rounded-lg ">
          <Image className="m-auto p-2" src="/img/heart.svg" alt="hjerte" width={32} height={32} />
        </div>
      </div>
    </div>
  );
}
