import axios from 'axios';
import React, {useEffect, useState} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

function Homepage({data}) {
  const [products, setProducts] = useState([]);


  useEffect(() => {
   setProducts(data.products || [])
  
  }, [data.products])
  





return (
  <div className="container mt-5">
    <div className="row">
      {/*ikinci parametreyi index yapmak için aldım*/}
      {products.map((product,i)=> (
        <div key={i} className="col-lg-3 col-md-6 col-12 mb-5">
          <ProductCard product={product}/>
        </div>
      ))}
    </div>
  </div>
);
}


export default Homepage