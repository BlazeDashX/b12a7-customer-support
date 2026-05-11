import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-300 mx-auto mt-4 ">
        <Hero></Hero>
      </div>
    </>
  );
}

export default App;
