import React from "react";

function Item({ name, isPacked }:any ) {
  if (isPacked) {
    return null;
  }
  return <li className="item">{name}</li>;
}
 export default function Packing() {
  return (
    <>
      <section>
        <h1>Adeema Amir Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </section>
    </>
  );
}
