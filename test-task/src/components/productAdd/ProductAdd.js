import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../redux/counter";
import Button from "../UI/Button";
import styles from "./ProductAdd.module.css";

function ProductAdd() {
  const [option, setOption] = useState(0);

  const size = (
    <div>
      {" "}
      <label for="fname">Size (MB)</label>
      <input type="number" />{" "}
    </div>
  );

  const weight = (
    <div>
      {" "}
      <label for="fname">Weight (KG)</label>
      <input type="number" />{" "}
    </div>
  );

  const dimensions = (
    <div>
      {" "}
      <label for="fname">Size (CM)</label>
      <input type="number" />
      <br />
      <label for="fname">Width (CM)</label>
      <input type="number" />
      <br />
      <label for="fname">Lenght (CM)</label>
      <input type="number" />{" "}
    </div>
  );

  let selectedOption = "";

  switch (option) {
    case 0:
      selectedOption = "";
      break;
    case 1:
      selectedOption = size;
      break;
    case 2:
      selectedOption = weight;
      break;
    case 3:
      selectedOption = dimensions;
      break;
    default:
      break;
  }

  const typeSwitcher = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "empty":
        setOption(0);
        break;
      case "size":
        setOption(1);
        break;
      case "weight":
        setOption(2);
        break;
      case "dimensions":
        setOption(3);
        break;
      default:
        break;
    }
  };

  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className={styles["container"]}>
      <form>
        <label for="fname">SKU </label>
        <input type="text" />
        <br />
        <label for="fname">Name </label>
        <input type="text" />
        <br />
        <label for="fname">Price ($) </label>
        <input type="number" />
        <br />
        <label for="fname">Type Switcher </label>
        <select name="select" id="pet-select" onChange={typeSwitcher}>
          <option value="empty"></option>
          <option value="size">Size (in MB) for DVD-disc</option>
          <option value="weight">Weight (in Kg) for Book</option>
          <option value="dimensions">Dimensions (HxWxL) for Furniture</option>
        </select>
        {selectedOption}
      </form>
      <h3> The count is: {value}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(33))}>
        increment by 33
      </button>
    </div>
  );
}

export default ProductAdd;
