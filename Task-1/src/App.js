import { Button } from "react-bootstrap";
import { useState } from "react";

export default function App() {
  const [myItem, Setadd] = useState(0);
  const [stock, setStock] = useState([{ name: "Add", Add: "10" }]);
  const [shopping, setShopping] = useState([
    { name: "Add", Add: 0, count: 100 }
  ]);

  const moveToCart = (e) => {
    let isadd = true;
    let [name, number] = e.target.innerHTML.split(":");
    // console.log(name);

    const newList = stock.map((item, index) => {
      if (item.name === name) {
        if (item.Add > 0) item.Add--;
        else {
          isadd = false;
          alert("Give A Refresh");
        }
      }
      return item;
    });
    console.log(newList);

    const newcount = shopping.map((item, index) => {
      if (item.name === name && isadd) {
        item.Add++;
        Setadd(myItem + item.count);
      }
      return item;
    });
  };
  const minusCart = (e) => {
    let isadd = true;
    let [name, number] = e.target.innerHTML.split(":");
    const newcount = shopping.map((item, index) => {
      if (item.name === name && item.Add > 0) {
        item.Add--;
        Setadd(myItem - item.count);
      }
      return item;
    });
    const newList = stock.map((item, index) => {
      if (item.name === name) {
        item.Add++;
      }
      return item;
    });
  };

  const updatedlist = stock.map((item, index) => (
    <Button key={index} onClick={moveToCart}>
      {item.name}:{item.Add}
    </Button>
  ));

  const updatedCart = shopping.map((item, index) => (
    <button key={index} onClick={minusCart}>
      {item.name}:{item.Add}
    </button>
  ));

  return (
    <>
      <h1>Give A Add Or Remove</h1>
      <h2>Add</h2>
      <ul>{updatedlist}</ul>
      <h2>Remove</h2>
      <ul>{updatedCart}</ul>
      <h3>
        <p>
          Your Clicked And Remove Result is shown at count + or -{updatedCart}
          {updatedlist}
        </p>
      </h3>
    </>
  );
}
