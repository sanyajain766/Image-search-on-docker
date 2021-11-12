import "./App.css";
import Navbar from "./NavBar";
import SearchPhotos from "./searchPhotos";
function App() {
  return (
    <div>
        <Navbar className="shadow-sm"/>
        <div className="w-full h-28 bg-gray-100"></div>
        <SearchPhotos/>
    </div>
  );
}

export default App;
