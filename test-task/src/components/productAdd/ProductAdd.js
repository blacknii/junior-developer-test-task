import React from "react";
import styles from "./ProductAdd.module.css";

function ProductAdd() {
  return (
    <div className={styles["container"]}>
      <form>
        <label for="fname">SKU</label>
        <input type="text" />
        <br />
        <label for="fname">Name</label>
        <input type="text" />
        <br />
        <label for="fname">Price ($)</label>
        <input type="number" />
        <br />
        <label for="fname">Type Switcher</label>
        <select name="select" id="pet-select">
          <option value="size">Size (in MB) for DVD-disc</option>
          <option value="weight">Weight (in Kg) for Book</option>
          <option value="dimensions">Dimensions (HxWxL) for Furniture</option>
        </select>
      </form>
    </div>
  );
}

export default ProductAdd;
