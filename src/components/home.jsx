import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {   
const [products,setProducts] =useState([]);
const [sort,setSort]= useState("");
const [search,setSearch]=useState("");

useEffect(()=>{
  const data=JSON.parse(localStorage.getItem("product")) || [];
  setProducts(data);
  
},[]);


 function handleSort(option) {
  setSort(option);

  let sorted=[...products];
 

  if (option==="priceAsc") {
    sorted.sort((a,b)=> +a.price - +b.price);
    
  }else if (option==="priceDesc") {
    sorted.sort((a,b)=> +b.price - +a.price);

  }else if (option==="dateNewest") {
    sorted.sort((a,b)=> b.date - a.date);

  }else if (option==="dateOldest") {
    sorted.sort((a,b)=> a.date - b.date);

  }
setProducts(sorted);

}

 function addToBasket(product) {
  const basket= JSON.parse(localStorage.getItem("basket")) || [];
  const isBasket=basket.some((item)=> item.id===product.id);
  if(isBasket){
   alert("Этот продукт уже в корзине");
  }else{
    basket.push(products);
    localStorage.setItem("basket", JSON.stringify(products));
    alert("продукт добавлен в корзину");
  }
}

  const filteredProducts=products.filter((product)=>
    product.name.toLowerCase().includes(search.toLowerCase())
 );

return (
<div className='container'>
 <div className='mainHome'> 
 <form className='max-w-sm mb-[30px]'>
 <select id="countries" class="bg-gray-50 border border-gray-300 text-grey-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-gray-400 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
 onChange={(e)=> handleSort(e.target.value)}
>

<option value={""} selected>Выберите опцию</option>
<option value="priceAsc">Цена (по возрастанию)</option> 
<option value="priceDesc">Цена (по убыванию)</option>   
<option value="dateNewest">Дата (сначала новые)</option> 
<option value="dateOldest">Дата (сначала старые)</option> 
</select>
</form>
</div>
<input 
type="search"
 id="default-search" 
 class="block w-[500px] p-4 ps-10 text-sm text-grey-900 border border-gray-300 rounded-lg bg-grey-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-violet-400 dark:border-gray-600 dark:placeholder-violet-900 dark:text-red dark:focus:ring-blue-500 dark:focus:border-blue-500"
 placeholder="Search product..."
 onChange={(e)=> setSearch(e.target.value)} 
 required />
     
<div className="container flex items-center space-between gap-3">
  {filteredProducts.map((product)=>{
  return (
     
  <div className="max-w-sm mb-[20px] bg-white border border-gray-200 rounded-lg shadow dark:bg-violet-400 dark:border-gray-900">
    <a href="#">
    <img className="rounded-t-lg" src={product.image} alt="" />
    </a>
    <div class="p-5">
    <a href="#">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-grey">{product.name}</h5>
    </a>
    <p class="font-normal text-gray-700 dark:text-gray-800">{product.description.slice(0,25) +"..."}</p>
  <a href="#" className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-center text-grey bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <Link to={`/product/ ${product.id}`}>
     {product.price}
     </Link> 
     </a>
  <button onClick={addToBasket} type="button" class="focus:outline-none text-grey bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">basket</button>
  </div>
  </div>
  
)

})}

</div>

</div>
    
)
} 
   
export default Home
