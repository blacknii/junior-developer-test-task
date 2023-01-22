import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductAdd from "./components/productAdd/ProductAdd";
import Tasks from "./components/tasks/Tasks";

const DUMMY_DATA = [
  {
    SKU: "JVC200123",
    Name: "Acrne DISC",
    Price: "1.00 $",
    Size: "Size: 750 MB",
  },
  {
    SKU: "JVC25323",
    Name: "Acrne DISC",
    Price: "3.00 $",
    Size: "Size: 1700 MB",
  },
  {
    SKU: "JVC2342343",
    Name: "Acrne DISC",
    Price: "12.00 $",
    Size: "Size: 3320 MB",
  },
  {
    SKU: "JVC523223",
    Name: "Acrne DISC",
    Price: "13.00 $",
    Size: "Size: 70 MB",
  },
  {
    SKU: "JVC2033",
    Name: "Acrne DISC",
    Price: "33.00 $",
    Size: "Size: 2100 MB",
  },
];

function App() {
  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivator = () => {
    setAddProductVisible(!AddProductVisible);
  };

  return (
    <div className={styles.container}>
      <Header addProductActivator={addProductActivator} />
      {AddProductVisible && <Tasks products={DUMMY_DATA} />}
      {!AddProductVisible && <ProductAdd />}
      <Footer />
    </div>
  );
}

export default App;
