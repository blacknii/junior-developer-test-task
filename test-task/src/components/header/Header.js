import React, { useState } from "react";
import styles from "./Header.module.css";

function Header(props) {
  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivatorActivator = () => {
    props.addProductActivator();
    setAddProductVisible(!AddProductVisible);
  };

  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      <div className={styles.buttons}>
        {AddProductVisible && (
          <button onClick={addProductActivatorActivator}>ADD</button>
        )}
        {AddProductVisible && <button>MASS DELETE</button>}
        {!AddProductVisible && <button>Save</button>}
        {!AddProductVisible && (
          <button onClick={addProductActivatorActivator}>Cancel</button>
        )}
      </div>
    </div>
  );
}

export default Header;
