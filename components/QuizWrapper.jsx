import QuizContent from "./QuizContent";
import { promises as fs } from "fs";
const quizFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_quiz.json", "utf8");
const content = JSON.parse(quizFile);
const categoryFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_kategorier_samlet.json", "utf8");
const allCategories = JSON.parse(categoryFile);
const productsFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_produkter.json", "utf8");
const allproducts = JSON.parse(productsFile);
export default function QuizWrapper() {
  return (
    <section className="grid gap-4 place-items-center">
      <QuizContent content={content} categories={allCategories} products={allproducts} />
    </section>
  );
}
