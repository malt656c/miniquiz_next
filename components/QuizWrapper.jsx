import QuizContent from "./QuizContent";
import { promises as fs } from "fs";

const quizFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_quiz.json", "utf8");
const content = JSON.parse(quizFile);

const productsFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_produkter.json", "utf8");
const products = JSON.parse(productsFile);

export default function SwipeContainer() {
  return (
    /* wrapper for hele skærmen */
    <section
      className="grid place-items-center h-screen"
    >
      <div className="w-full max-w-[600px] h-full max-h-[800px] grid place-items-center relative outline-4 overflow-y-auto outline-green-beige outline">
        <QuizContent content={content} products={products}></QuizContent>
      </div>
    </section>
  );
}
