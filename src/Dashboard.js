
import React, { useState } from 'react';
import "./App.css";
import img1 from './components/images/leg.png';
import img2 from'./components/images/boneless.jpeg';
import img3 from './components/images/lollipop.jpg';
import img4 from './components/images/drum.jpg';
import SearchModal from './components/SearchModal';
import NewProductModal from './components/NewProductModal';

const Dashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [isOpenProduct, setIsOpenProduct] = React.useState(false);
  const products = [
        {
          title: "Leg Piece",
          image:img1,
        },
        {
          title: "Boneless Chicken",
          image: img2,
        },
        {
          title: "lollipop",
          image: img3,
        },
        {
          title:"drum",
          image:img4,
        }
      ];
      

      
  return (
    <div>
      {/* Your Dashboard component content goes here */}
      <SearchModal isOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <NewProductModal isOpenProduct={isOpenProduct} setIsOpenProduct={setIsOpenProduct} />
      
      <h1>Product Manager</h1>
      <div>
        <button className='button'>Back</button>
        <button className='button'>Up</button>
        <button className='button' onClick={()=>setIsOpen(true)} >Search</button>
        <button className='button'>New Category</button>
        <button className='button' onClick={()=> setIsOpenProduct(true)}>New Product</button>
      </div>
      <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
    </div>
   
    
  );
}

export default Dashboard;
