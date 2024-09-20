import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [data,setData]=useState({
    name:"",
    image:"",
    price:"",
    description:""
  });

  const navigate= useNavigate();

  const clickBtn=()=> {
    if (data.name && data.image && data.price) {
      const newTask ={
        id:new Date().getTime(),
        date:new Date().getTime(),
        ...data,
      };
      const arr= JSON.parse(localStorage.getItem("product")) || [];
      arr.push(newTask);
      localStorage.setItem("product",JSON.stringify(arr));
      setData({
        name:"",
        image:"",
        price:"",
        description:""
      });
      navigate("/");

    }else {
      alert ("Заполните все поля!!!");
    }
  };
 
  return (
  <center>
  <div className='create'>
 <div className="mb-3">
    
    <label for="default-input" className="block  text-sm font-medium text-gray-900 dark:text-white">Default input</label>
    <span>Name</span>
    <input value={data.name} onChange={(e)=> setData({...data,name:e.target.value})}
     type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-[50%] p-2.5 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

</div> 
<div className="mb-3">
    
     <label for="default-input" className="block  text-sm font-medium text-gray-900 dark:text-white">Default input</label>
      <span>Image</span>
      <input value={data.image} onChange={(e)=> setData({...data,image:e.target.value})}
      type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-[50%] p-2.5 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

</div> 
<div className="mb-3">
    
     <label for="default-input" 
     className="block  text-sm font-medium text-gray-900 dark:text-white">Default input</label>
     <span>Price</span>
     <input value={data.price} onChange={(e)=>setData({...data,price:e.target.value})}
      type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-[50%] p-2.5 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

</div> 
<div className="mb-3">
    
     <label for="default-input" 
     className="block  text-sm font-medium text-gray-900 dark:text-white">Default input</label>
     <span>Description</span>
     <input value={data.description} onChange={(e)=>setData({...data,description:e.target.value})}
      type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-[50%] p-2.5 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

</div> 

</div> 
 <button onClick={clickBtn} type="button" className="text-gray bg-violet-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg--600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
  </center>

  )
  
}

export default AddProduct