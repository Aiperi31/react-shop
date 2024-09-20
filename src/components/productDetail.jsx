import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const {id} =useParams();
  const [product,setProduct]=useState({});
   useEffect(()=>{
    const data =JSON.parse(localStorage.getItem("product")) || [];
    const foundProduct= data.find((product)=> product.id == id);
    setProduct(foundProduct);
    
  },[id]);


  return (
    
    <div className='blockDetail'>
    <div className='detail'>
    <img src={product.image} alt="" />
    </div>
    <div className='blockName'>
      <h1>Name:{product.name}</h1>
      <h1>Price:{product.price}</h1>
       <p>{product.description}</p> 
       
    </div>
    </div>
  );
}

export default ProductDetail;