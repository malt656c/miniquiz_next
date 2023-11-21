export default function QuizQuestion(props) {
  return (
    <div>
      <p className="p-4 bg-green-beige rounded-xl mx-8 mt-4 font-headings text-2xl text-center">{props.content}</p>
    </div>
  );
}
