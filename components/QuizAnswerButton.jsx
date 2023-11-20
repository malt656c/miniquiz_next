export default function QuizAnswerButton(props) {
  const buttonContent = () => {
    if (props.ikon === undefined) {
      return props.content;
    } else {
      return <img src={`img/${props.ikon}`} alt="picture" className="mr-8 ml-8" />;
    }
  };
  return (
    <button className="p-2 bg-green-beige rounded-xl flex-grow click-answer-button place-items-center" onClick={props.clickEvent}>
      {buttonContent()}
    </button>
  );
}
