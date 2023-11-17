export default function QuizAnswerButton(props) {
  const { content, clickEvent, ikon } = props;
  return (
    <button className="p-2 bg-green-beige rounded-xl flex-grow click-answer-button" onClick={props.clickEvent}>
      {ikon && <img src={ikon} className="mr-2" />}
    </button>
  );
}
