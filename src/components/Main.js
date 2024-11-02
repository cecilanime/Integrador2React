import React, { useState } from 'react';
import Card from './Card';
import CardHorizontal from './CardHorizontal';
import Modal from './Modal';

function Main() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  // Función para abrir el modal con los datos del producto
  const abrirModal = (title, price, image, description) => {
    setSelectedProduct({ title, price, image, description });
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalOpen(false);
    setSelectedProduct({});
  };

  return (
    <main style={{ position: 'relative' }}> {/* Posición relativa para control de superposición */}
      <h2>¡Bienvenidos a lo mejor de Venezuela!</h2>
      <h2>Conoce nuestro menú</h2>
      <h3>!!Productos más vendidos &#x1F4F8; fotos reales!!</h3>
      
      <div className="main-container">
        <div className="cards-container">
          <Card 
            title="¡Arepa bien abundante: $2500 la unidad!" 
            image="./imagenes/ArepaCarneDesmechadayQueso.png" 
            description="Arepa de carne desmechada, cocción cuidada, productos de primera calidad."
            price={2500}
            onClick={abrirModal}
          />
          <Card 
            title="¡Empanada riquísima: $2000 la unidad!" 
            image="./imagenes/Empanadas_carne.png" 
            description="Empanada venezolana de carne, cortada a cuchillo, productos de primera calidad."
            price={2000}
            onClick={abrirModal}
          />
          <Card 
            title="Tequeños de queso vaquero + salsa de ajo." 
            image="./imagenes/tequeños.png" 
            description="12 Tequeños por $4500, con el mejor queso venezolano. Salsa de ajo incluida."
            price={4500}
            onClick={abrirModal}
          />
        </div>
      </div>

      <h3>Arepas generosas &#x1F389;</h3>
      <div className="card-wrapper">
        <CardHorizontal 
          title="Arepa de carne desmechada" 
          image="./imagenes/ArepaCarneDesmechadayQueso.png" 
          description="Promoción a $2500 cada unidad. Carne desmechada con vegetales."
          price={2500}
          onClick={abrirModal}
        />
        <CardHorizontal 
          title="Arepa de Chorizo y salsa criolla" 
          image="./imagenes/ArepaChorizo.png" 
          description="Promoción a $2500 cada unidad. Chorizo vacuno con salsa criolla y queso."
          price={2500}
          onClick={abrirModal}
        />
      </div>

      {/* Modal para mostrar el producto seleccionado */}
      <Modal isOpen={isModalOpen} onClose={cerrarModal} product={selectedProduct} />
    </main>
  );
}

export default Main;
