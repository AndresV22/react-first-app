import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Car from "./components/Car";

function App() {
  //Producto
  const [products, setProduct] = useState([
    { id: 1, name: "Polera", content: "Color: Azul" },
    { id: 2, name: "Pantalones", content: "Color: Verde" },
    { id: 3, name: "Shorts", content: "Color: Blanco" },
  ]);

  //Carrito
  const [car, addProduct] = useState([]);

  return (
    <Fragment>
      <Header title="Mi primera aplicación en REACT !" />
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          products={products}
          car={car}
          addProduct={addProduct}
        />
      ))}
      <Car car={car} addProduct={addProduct} />
      <Footer date="2019" />
    </Fragment>
  );
}

export default App;
