import React, { useState } from "react";
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
          <div className="relative">
            <div class="max-w-md mx-auto rounded-lg p-0 m-0 overflow-hidden -mt-8 md:max-w-xl shadow-xl">
              <div class="md:flex">
                <div class="w-full p-0">
                  <div class="relative">
                    <i class="absolute text-gray-400 top-5 left-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></i>
                    <input
                      type="text"
                      name="query"
                      id="input"
                      className="bg-white h-16 w-full px-14 font-medium text-md rounded-lg focus:outline-none hover:cursor-pointer"
                      placeholder="Search..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <span class="absolute top-4 right-5 border-l pl-4">
                      <i class="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="p-10" id="card-list">
          {pics.map((pic) => (
            <div id="card" key={pic.id}>
              <img
                id="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="100%"
                height="100%"
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
