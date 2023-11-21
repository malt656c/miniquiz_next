import SwipeList from "./SwipeList";
import { promises as fs } from "fs";
const quizFile = await fs.readFile(process.cwd() + "/public/data/kosttilskud_quiz.json", "utf8");
const content = JSON.parse(quizFile);
export default function SwipeContainer() {
  return (
    <section className="grid place-items-center"
      style={{
        height: "100vh",
      }}
    >
      <div className="w-[100vw] h-[100vh]">
        <SwipeList content={content}></SwipeList>
      </div>
    </section>
  );
}
