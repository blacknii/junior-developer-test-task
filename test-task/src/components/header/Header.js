import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./Header.module.css";

function Header(props) {
  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivatorActivator = () => {
    props.addProductActivator();
    setAddProductVisible(!AddProductVisible);
  };

  const delateProductActivatorActivator = () => {
    props.delateProductActivator();
  };

  const productAdd = () => {
    props.addProductSaveActivator();
    props.addProductActivator();
    setAddProductVisible(!AddProductVisible);
  };

  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      <div className={styles.buttons}>
        {AddProductVisible && (
          <Button onClick={addProductActivatorActivator}>ADD</Button>
        )}
        {AddProductVisible && (
          <Button onClick={delateProductActivatorActivator}>MASS DELETE</Button>
        )}
        {!AddProductVisible && <Button onClick={productAdd}>Save</Button>}
        {!AddProductVisible && (
          <Button onClick={addProductActivatorActivator}>Cancel</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
