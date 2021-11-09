import "./App.css";
import Navbar from "./NavBar";
import SearchPhotos from "./searchPhotos";
function App() {
  return (
    <div className="h-full">
        <Navbar className="shadow-sm"/>
        <div className="w-full h-28 bg-gray-100"></div>
        <SearchPhotos className="h-full"/>
    </div>
  );
}

export default App;
