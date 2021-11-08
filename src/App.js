import "./App.css";
import Navbar from "./NavBar";
import SearchPhotos from "./searchPhotos";
function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <h1 className="text-4xl text-center font-extrabold font-mono mt-10">
          Image Search
        </h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
