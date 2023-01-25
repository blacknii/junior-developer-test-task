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
    Type: "size",
    Amount: "750",
    Ischecked: false,
  },
  {
    SKU: "JVC25323",
    Name: "Acrne DISC",
    Price: "5.00 $",
    Type: "size",
    Amount: "1700",
    Ischecked: false,
  },
  {
    SKU: "JVC2342343",
    Name: "Acrne DISC",
    Price: "110.00 $",
    Type: "weight",
    Amount: "3",
    Ischecked: false,
  },
  {
    SKU: "JVC523223",
    Name: "Acrne DISC",
    Price: "21.00 $",
    Type: "weight",
    Amount: "7",
    Ischecked: false,
  },
  {
    SKU: "JVC2033",
    Name: "Acrne DISC",
    Price: "12.00 $",
    Type: "dimensions",
    Amount: "24x45x15",
    Ischecked: false,
  },
];

function App() {
  const [protucts, setProtucts] = useState(DUMMY_DATA);

  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivator = () => {
    setAddProductVisible(!AddProductVisible);
  };

  const addProductSaveActivator = () => {
    console.log("SAVE Test");
    // setAddProductVisible(!AddProductVisible);
  };

  const delateProductActivator = () => {
    console.log("Delete Test");
    setProtucts(protucts.filter((product) => !product.Ischecked));
  };

  return (
    <div className={styles.container}>
      <Header
        addProductActivator={addProductActivator}
        addProductSaveActivator={addProductSaveActivator}
        delateProductActivator={delateProductActivator}
      />
      {AddProductVisible && <Tasks products={protucts} />}
      {!AddProductVisible && <ProductAdd />}
      <Footer />
    </div>
  );
}

export default App;
