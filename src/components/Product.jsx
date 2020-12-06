import React, {Fragment} from 'react';

const Product = ({product, products, car, addProduct}) => {

    const {name, id, content} = product;

    const selectProduct = id => {
        const product = products.filter(product => product.id === id)[0];
        addProduct([
            ...car,
            product
        ]);
        console.log([...car, product]);
    }   

    const deleteProduct = id => {
        const newProducts = car.filter(product => product.id !== id);
        addProduct(newProducts);
    }

    return ( 
        <Fragment>
            <h2>
                {name}
            </h2>   
            <h3>
                {content}
            </h3>
            {
            products 
            ?
            (<button 
                type="button"
                onClick={() => (selectProduct(id))}
            >
            Añadir al carrito
            </button>)
            :
            (<button 
                type="button"
                onClick={() => (deleteProduct(id))}
            >
            Eliminar
            </button>)
            }
        </Fragment>
        
     );
}
 
export default Product;