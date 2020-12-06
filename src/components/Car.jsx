import React from 'react';
import "./car.css";
import Product from "./Product"

const Car = ({car, addProduct}) => {
    return ( 
        <div className="carrito">
            <h2>Carro de compras: </h2>
            
            {car.length === 0
            ? <p>No hay elementos en el carrito</p>
            : car.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    car={car}
                    addProduct={addProduct}
                />
            ))}
        </div>
     );
}
 
export default Car;