/* eslint-disable @next/next/no-img-element */
const today = new Date();

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function TodoList() {
  const name = "Adeema Amir";
  const description = "alt";
  const src = "https://avatars.githubusercontent.com/u/105167729?v=4";
  return (
    <>
      <h1 style={{textAlign:"center" , fontSize:"35px" , fontFamily:"monospace" , fontStyle:"italic" , color:"yellow"}}>
        {name} ToDo List Is Made On This Day {formatDate(today)}
      </h1>
    </>
  );
}
