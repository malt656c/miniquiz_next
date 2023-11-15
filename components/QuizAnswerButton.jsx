
export default function QuizAnswerButton(props){
    return(
        <button className="p-2 outline outline-1 flex-grow" onClick={props.clickEvent}>{props.content}</button>
    )
}