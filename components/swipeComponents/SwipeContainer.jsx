import SwipeList from "./SwipeList";
import { promises as fs } from "fs";
const quizFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_quiz.json", "utf8");
const content = JSON.parse(quizFile);
const productsFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_produkter.json", "utf8");
const products = JSON.parse(productsFile);
export default function SwipeContainer() {
  return (
    /* wrapper for hele skærmen */
    <section
      className="grid place-items-center"
      style={{
        height: "100dvh",
      }}
    >
      <div className="w-full max-w-[100dvw] h-[100dvh] grid place-items-center">
        <SwipeList content={content} products={products}></SwipeList>
      </div>
    </section>
  );
}
