import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import NavBar from "./NavBar.jsx";
import "./index.css";
import { BsSearch } from "react-icons/bs";
const unsplash = new Unsplash({
  accessKey: "VvkyIVczHhrUMcMsJZ_YQ04wlGMNj__zPm9c3sJ-_h0",
  secret: "ryd2UtE8wbaa_fE8101JPVw-vBJfSGg4QwpayN2pkyY",
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  return (
    <>
      <div className="">
        <form id="form" onSubmit={searchPhotos}>
          <div className="text-center relative">
            <input
              type="text"
              name="query"
              id="input"
              className="mt-10 h-2 border-2 w-2/5 rounded-full p-10 px-5 pr-16 "
              placeholder="Enter the text to search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-80 top-4 mt-5 mr-4">
              <div className="text-4xl mt-7 ml-5 text-pink-500 mr-12">
                {<BsSearch />}
              </div>
            </button>
          </div>
        </form>
        <div className="" id="card-list">
          {pics.map((pic) => (
            <div id="card" key={pic.id}>
              <img
                id="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
