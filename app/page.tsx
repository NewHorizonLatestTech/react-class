"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Avatar from "./components/Avatar";
import Gallery from "./components/Gallery";
{
  /* <Avatar 
person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
size={100}
/> */
}
import Packing from "./components/Packing";
import Profile from "./components/Profile";
import Todo from "./components/Todo";
import TodoList from "./components/Week";
import { useState } from "react";
import { sculptureList } from "./components/Data";

export default function page() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <center>
        <button
          onClick={handleNextClick}
          className="bg-violet-500 w-20 h-12 relative top-5 text-white text-lg rounded-lg hover:w-24 hover:h-14 duration-300 hover:text-red-500 hover:font-extralight hover:text-xl"
        >
          Next
        </button>
      </center>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
