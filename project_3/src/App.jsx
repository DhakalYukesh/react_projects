import "./App.css";
import Desc from "./components/desc-section/Desc";
import Hero from "./components/hero-section/Hero";
import Product from "./components/product-section/Product";

function App() {
  return (
    <>
      <div className="main-box">
        <Hero />
        <Product />
        <Desc />
      </div>
    </>
  );
}

export default App;
