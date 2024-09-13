import React, { useState } from 'react';
import ProductCard from './Components/ProductCard'

const productos = [
  { id: 1, nombre: 'Chocolate', precio: 10, imagen: 'https://img2.freepnges.com/20240327/gvq/transparent-chocolate-stacked-chocolate-bars-various-types-partially-e6604e2f1c66db1.04288974.webp' },
  { id: 2, nombre: 'gaseosa', precio: 5, imagen: 'https://e7.pngegg.com/pngimages/127/963/png-clipart-fanta-coca-cola-and-sprite-soda-bottles-sprite-zero-fanta-coca-cola-fizzy-drinks-sprite-plastic-bottle-cola.png' },
  { id: 3, nombre: 'galletas', precio: 12, imagen: 'https://img.lovepik.com/element/40025/6736.png_860.png' },
  { id: 4, nombre: 'papas', precio: 8, imagen: 'https://mecato.shop/cdn/shop/products/papas-margarita-1_1080x.jpg?v=1643909363' },
];

const TiendaVirtual = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

    const vaciarcarrito = () => {
      setCarrito([]);
  };
  const eliminarelementocarrito = (producto) => {
    const index = carrito.findIndex(item=>item.id===producto);
    if (index!==-1){
      const newcarrito= [...carrito];
      newcarrito.splice(index,1);
      setCarrito(newcarrito);
    }
};


  return (
    <div className="container">
      <h1>Mi Tienda Virtual</h1>
      
      <div className="productos-grid">
        {productos.map((producto) => (
          <ProductCard 
            key={producto.id} 
            producto={producto} 
            onAgregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
      
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="boton-agregar">
          <p>{carrito.length} artículos</p>
          <button onClick={() => vaciarcarrito()}
        className="boton-agregar">vaciar carrito</button>
        </div>
        <ul className="mt-2">
          {carrito.map((item, index) => (
            <div key={index} className="carrito-item ">
              <img 
                src={item.imagen} 
                alt={item.nombre} 
                className="carrito-item-imagen"
              />
              <span>{item.nombre} - ${item.precio}</span>
              <button onClick={() => eliminarelementocarrito(item.id)}>eliminar</button>
            </div>
          ))}
        </ul>
        <p className="carrito-total">
          Total: ${carrito.reduce((sum, item) => sum + item.precio, 0)}
        </p>
      </div>
    </div>
  );
};

export default TiendaVirtual;