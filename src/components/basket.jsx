import React, {useEffect,useState } from 'react';


 function Basket(){
   const [data,setData]=useState([])
   useEffect(()=>{
    
 const localData= JSON.parse(localStorage.getItem("basket")) || [] 
  setData(localData);

}, []);

return (
<div className='basket'>
  <div>
    {data.map((el)=>{
    
    return <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-violet-400 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
    src={el.image} alt="img"/>
    <div class="flex flex-col justify-between p-6 leading-normal">
        <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray">{el.name}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-900">{el.description}</p> 
    </div>
</a>
    
})}
              
</div>
</div>


);
    
}

export default Basket