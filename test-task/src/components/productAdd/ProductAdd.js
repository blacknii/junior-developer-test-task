import React, { useState } from "react";
import styles from "./ProductAdd.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SKUUpdater,
  nameUpdater,
  priceUpdater,
  typeUpdater,
  sizeUpdater,
  sizePrototypeUpdater,
} from "../../redux/newProduct";

function ProductAdd() {
  const [option, setOption] = useState(0);

  const dispatch = useDispatch();

  const SKUTest = (event) => {
    dispatch(SKUUpdater(event.target.value));
  };

  const nameTest = (event) => {
    dispatch(nameUpdater(event.target.value));
  };

  const priceTest = (event) => {
    dispatch(priceUpdater(event.target.value));
  };

  const sizeTest = (event) => {
    dispatch(sizeUpdater(event.target.value));
  };

  const size2Test = (event) => {
    dispatch(sizePrototypeUpdater([event.target.value, 0]));
  };

  const widthTest = (event) => {
    dispatch(sizePrototypeUpdater([event.target.value, 1]));
  };

  const lenghtTest = (event) => {
    dispatch(sizePrototypeUpdater([event.target.value, 2]));
  };

  const size = (
    <div>
      {" "}
      <label for="fname">Size (MB)</label>
      <input type="number" onChange={sizeTest} />{" "}
    </div>
  );

  const weight = (
    <div>
      {" "}
      <label for="fname">Weight (KG)</label>
      <input type="number" onChange={sizeTest} />{" "}
    </div>
  );

  const dimensions = (
    <div>
      {" "}
      <label for="fname">Size (CM)</label>
      <input type="number" onChange={size2Test} />
      <br />
      <label for="fname">Width (CM)</label>
      <input type="number" onChange={widthTest} />
      <br />
      <label for="fname">Lenght (CM)</label>
      <input type="number" onChange={lenghtTest} />{" "}
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
    dispatch(typeUpdater(e.target.value));
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

  return (
    <div className={styles["container"]}>
      <form>
        <label for="fname">SKU </label>
        <input type="text" onChange={SKUTest} />
        <br />
        <label for="fname">Name </label>
        <input type="text" onChange={nameTest} />
        <br />
        <label for="fname">Price ($) </label>
        <input type="number" onChange={priceTest} />
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
    </div>
  );
}

export default ProductAdd;
