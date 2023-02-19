import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addX, addY, arrRemoveAmount } from "./redux/productsEditor";
import { reset, dateUpdater, size2Updater } from "./redux/newProduct";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductAdd from "./components/productAdd/ProductAdd";
import Tasks from "./components/tasks/Tasks";

function App() {
  const { protucts } = useSelector((state) => state.productsEditor);
  const { addingProduct } = useSelector((state) => state.newProduct);
  const dispatch = useDispatch();

  const isSKUValid = protucts.every((p) => {
    return p.SKU !== addingProduct.SKU;
  });

  const isAmountPrototypeValid =
    addingProduct.Type === "dimensions" &&
    addingProduct.AmountPrototype[0] !== "" &&
    addingProduct.AmountPrototype[1] !== "" &&
    addingProduct.AmountPrototype[2] !== "";

  const isDataValid =
    addingProduct.SKU !== "" &&
    isSKUValid &&
    addingProduct.Name !== "" &&
    addingProduct.Price !== "" &&
    addingProduct.Type !== "" &&
    (isAmountPrototypeValid ||
      (addingProduct.Type !== "dimensions" && addingProduct.Amount !== ""));

  const addingProductDimensions = {
    SKU: addingProduct.SKU,
    Name: addingProduct.Name,
    Price: addingProduct.Price + " $",
    Type: addingProduct.Type,
    Amount:
      addingProduct.AmountPrototype[0] +
      "x" +
      addingProduct.AmountPrototype[1] +
      "x" +
      addingProduct.AmountPrototype[2],
    Ischecked: false,
  };

  const [AddProductVisible, setAddProductVisible] = useState(true);

  const addProductActivator = () => {
    setAddProductVisible(!AddProductVisible);
  };

  const addProductSaveActivator = () => {
    if (isDataValid) {
      if (addingProduct.Type !== "dimensions") {
        dispatch(addX(addingProduct));
      } else {
        console.log("WORKS");
        dispatch(addX(addingProductDimensions));
      }
      dispatch(reset());
      setAddProductVisible(!AddProductVisible);
      console.log("Data is valid");
    } else {
      console.log("Data isn't valid");
    }
  };

  const delateProductActivator = () => {
    console.log("Delete Test");
    dispatch(arrRemoveAmount());
  };

  return (
    <div className={styles.container}>
      <Header
        addProductActivator={addProductActivator}
        addProductSaveActivator={addProductSaveActivator}
        delateProductActivator={delateProductActivator}
        AddProductVisible={AddProductVisible}
      />
      {protucts.length === 0 && AddProductVisible && (
        <p className={styles["empty-list"]}> Product list is empty </p>
      )}
      {AddProductVisible && <Tasks products={protucts} />}
      {!AddProductVisible && <ProductAdd />}
      <Footer />
    </div>
  );
}

export default App;
