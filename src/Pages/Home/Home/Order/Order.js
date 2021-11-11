import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';


const Order = () => {
      const { id } = useParams();
      const [product, setProduct] = useState([]);
      // console.log(id);

      useEffect(() => {
            fetch(`http://localhost:5000/products/${id}`)
                  .then(res => res.json())
                  .then(data => setProduct(data))

      }, [])

      return (
            <div>
                  <h2 className="text-info p-3">Detail: {product.name}</h2>
                  <h2 className="text-info p-3"> {product.description}</h2>
            <h2 className="text-white p-3">Id: {id}</h2>
      </div>
      );
};

export default Order;