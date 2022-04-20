import React, { useState } from "react";
import AddProduct from "./Components/AddProduct/AddProduct";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard/ProductCard";
import ProductList from "./Components/ProductList/ProductList";


function App() {
  // Модалка для добавления товаров
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // состояние для общего массива с продуктами
  const [products, setProducts] = useState([])
  console.log(products);


  // функция для добавления нового продукта
  const handleProduct = (newObj) =>{
    let newProducts = [...products]
    newProducts.push(newObj)
    setProducts(newProducts)

  }
  return (
    <div>
      <Header handleShow={handleShow} />
      <AddProduct 
      handleClose={handleClose} 
      show={show} 
      handleProduct={handleProduct}
      />
      <ProductList products={products}/>
      
    </div>
  );
}

export default App;
