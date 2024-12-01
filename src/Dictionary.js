import React, { useState } from "react";

const Dict = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

export default function Dictionary() {
  const [display, setDisplay] = useState("");
  const [definition, setDefinition] = useState("");
  const [search, setSearch] = useState(false);

  function handleChange(e) {
    setSearch(false);
    let type = e.target.value;
    setDisplay(type);
  }

  function handleClick() {
    if (display.trim() === "") {
      setDefinition("Word not found in the dictionary.");
    } else {
      let result = Dict.find(item => display.toLowerCase() === item.word.toLowerCase());
      if (result) {
        setDefinition(result.meaning);
      } else {
        setDefinition("Word not found in the dictionary.");
      }
    }
    setSearch(true);
  }

  return (
    <>
      <h2>Dictionary App</h2>
      <input
        type="text"
        value={display}
        onChange={handleChange}
        placeholder="Search for a word.."
      />
      <button onClick={handleClick}>Search</button>
      <br />
      <p>Definition:</p>
      {search && <p>{definition}</p>}
    </>
  );
}
