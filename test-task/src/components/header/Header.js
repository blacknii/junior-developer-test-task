import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Product List</h1>
      <div className={styles.buttons}>
        <button>ADD</button>
        <button>MASS DELETE</button>
      </div>
    </div>
  );
}

export default Header;
