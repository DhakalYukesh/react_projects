import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const handleItem = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    setItemList([...itemList, item]);
    setItem("");
    e.preventDefault();
  };

  return (
    <div className="todo">
      <form>
        <input type="text" value={item} onChange={handleItem} />
        <button onClick={handleSubmit}>Add Item</button>
      </form>

      <div>
        {itemList.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() =>
                  setItemList((prevList) =>
                    prevList.filter((_, i) => i !== index)
                  )
                }
              >
                ✔
              </button>
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
