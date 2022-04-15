
import { useState, useEffect } from "react";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";

   
function App() {

    const [products, setProducts] = useState ([
      { id: 1, title: 'product 1', price:899 },
      { id: 2, title: 'product 2', price:769 },
      { id: 3, title: 'product 3', price:989 },
      { id: 4, title: 'product 4', price:879 },
      { id: 5, title: 'product 5', price:459 }
    ])

    const deleteProduct= (productId) => {
      const newProduct = products.filter(products => products.id !== productId);
      setProducts(newProduct);
    }


    useEffect(() => {
      console.log('Use Effect Running')
    }, []);
    
    return ( 
      <div >
        <Router>
          <Routes>
            <Route path="/">
            <ProductList products={products} deleteProduct={deleteProduct}/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path="/Contact">
              <Contact/>
            </Route>
          </Routes>
        </Router>
      </div >
    );
}

// menit 22.40 lanjutan 10 april 2022
// menit 25.00 lanjutan 14 april 2022
// menit 33.30 lanjutan 14 april 2022 react router
export default App;