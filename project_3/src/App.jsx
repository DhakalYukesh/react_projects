import "./App.css";
import Hero from "./components/hero-section/Hero";
import Product from "./components/product-section/Product";

function App() {
  return (
    <>
      <div className="main-box">
        <Hero />
        <Product />
      </div>
    </>
  );
}

export default App;
