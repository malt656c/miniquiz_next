import Confetti from "react-confetti";
import Image from "next/image";
export default function QuizEndpage(props) {
  return (
    <>
      <div className="grid place-items-center bg-no-repeat bg-center bg-cover absolute inset-0 z-20 p-4 gap-4" style={{ backgroundImage: 'url("./img/slut1.jpg")' }}>
        <Confetti className="w-full max-w-[600px] h-full max-h-[800px]" recycle={false} numberOfPieces={1000} tweenDuration={10000} colors={['#EF84AB','#E71B7C', '#44BDEE','#2774AE','#694796']}/>
        <p className="p-4 bg-green-beige rounded-xl font-headings text-2xl text-center">Tillykke du har gennemført Quizzen</p>
        <button
          onClick={props.getproducts}
          type="button"
          className="bg-green-beige font-centuryGothic rounded-lg px-6 py-3 text-center text-xl transition-all hover:drop-shadow-md hover:scale-105"
          style={{ zIndex: 1 }}
        >
          Se dit resultat
        </button>
        <div>
          <p className="p-4 bg-green-beige rounded-xl font-headings text-2xl text-center">Vi har fundet en række produkter som kan dække dine behov.</p>
        </div>
        <Image src="/img/striber_matas.png" alt="striber" className="absolute bottom-0 left-0 right-0 top-auto z-10" width={664} height={32} />
      </div>
    </>
  );
}
