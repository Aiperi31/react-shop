import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import AddProduct from "./components/addProduct";
import Home from "./components/home";
import ProductDetail from "./components/productDetail";
import Basket from "./components/basket";


function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
  path:"createProduct",
  element: <AddProduct/>
  },
  {
  path:"/product/:id",
  element: <ProductDetail/>
  },
  {
    path:"/basket",
    element:<Basket/>
    },
])

  return <>
    <Header/>
    <addProduct/>  
     <RouterProvider router={router}/>
   
    </>
  
}

export default App
