export default function Presentation({
  title,
  message,
  toggleVisibility,
  isVisible
}) {
  return (
    <div>
      <h1>title</h1>
      {isVisible ? <p>I am visible</p> : <p> I am not visible</p>}
      <p>{message}</p>
      <button onClick={toggleVisibility}>Click Me </button>
    </div>
  );
}
