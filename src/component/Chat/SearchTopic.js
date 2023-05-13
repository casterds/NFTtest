import React, { useState } from "react";
import "../Chat/searchTopic.css"

const SearchFilter = ({ topics }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredtopics, setFilteredtopics] = useState(topics);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredList = topics.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredtopics(filteredList);
  };

  return (
    <div>
      <div className="searchbar">
        <div className="searchsvg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            />
          </svg>
        </div>
        <input
          className="searchfield"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <div>
        <ul className="topiclist">
          {filteredtopics.map((item) => (
            <li key={item} className="topics">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilter;
