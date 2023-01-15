import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ProductAdd from "./components/productAdd/ProductAdd";
import Tasks from "./components/tasks/Tasks";

const test = true;
function App() {
  return (
    <div className={styles.container}>
      <Header />
      {test && <Tasks />}
      {!test && <ProductAdd />}
      <Footer />
    </div>
  );
}

export default App;
