import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  console.log(query);
  const [pics1, setPics1] = useState([]);
  const [pics2, setPics2] = useState([]);
  const [pics3, setPics3] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.io)" 
     }
     
     let reqOptions1 = {
       url: `http://localhost:4001/photos?query=${query}&page=1&perpage=3`,
       method: "GET",
       headers: headersList,
     }
     let reqOptions2 = {
      url: `http://localhost:4002/photos?query=${query}&page=2&perpage=3`,
      method: "GET",
      headers: headersList,
    }
    let reqOptions3 = {
      url: `http://localhost:4003/photos?query=${query}&page=3&perpage=3`,
      method: "GET",
      headers: headersList,
    }
     axios.request(reqOptions1).then(function (response) {
       setPics1(response.data);
     })
     axios.request(reqOptions2).then(function (response) {
      setPics2(response.data);
    })
    axios.request(reqOptions3).then(function (response) {
      setPics3(response.data);
    })
  };
  return (
    <>
      <div className="">
        <form id="form" onSubmit={searchPhotos}>
          <div className="relative">
            <div class="max-w-md mx-auto rounded-lg p-0 m-0 -mt-8 md:max-w-xl shadow-xl">
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
        <div id="photos" className="mt-10"  > 
        {pics1.map((pic)=>(
            <img id="#photos img" src={pic} className="w-full h-full"></img>
        ))}
        {pics2.map((pic)=>(
            <img id="#photos img" src={pic} className="w-full h-full"></img>
        ))}
        {pics3.map((pic)=>(
            <img id="#photos img" src={pic} className="w-full h-full"></img>
        ))}
        </div>
      </div>
    </>
  );
}
