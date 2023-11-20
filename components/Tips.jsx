export default function Tips(props) {
  return (
    <div className="text-center p-1 bg-green-beige rounded-xl">
      <h2 className="font-bold text-xl italic">TIP!</h2>
      <p className="m-2">{props.content}</p>
    </div>
  );
}
