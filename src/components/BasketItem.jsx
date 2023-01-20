import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { filterProducts, selectProducts } from '../features/basket-products/basketProdSlice';

const BasketItem = () => {

   const products = useSelector(selectProducts);
   const dispatch = useDispatch();
   let allProductsPrice = 0;

   const deleteProduct = (prodId) => {
      const filteredProd = products.filter(elem => {
         return elem.id !== prodId;
      })
      dispatch(filterProducts(filteredProd));
   }
   
   return (
      <div className='shop--card rounded'>
         {
            products && products.length ? products.map(product => {
               allProductsPrice += product.price;
               return (
                  <div className="" key={product.id}>
                     <Row className="align-items-center">
                        <Col md={10} className="d-flex gap-3">
                           <img src={product.images[0]} alt={product.title} width="70px" height="60px"/>
                        <div>
                           <h4>{product.title}</h4>
                           <p className="text-success text-monospace">{product.price}$</p>
                        </div>
                        </Col>
                        <Col md={2}>
                           <FaRegTrashAlt className="text-danger delete--icon" onClick={() => deleteProduct(product.id)}/>
                        </Col>
                     </Row>
                     <hr />
                  </div>
               )
            }) : 
            <h4 className="text-center text-muted">Products not found</h4>
                  
         }
         {
            allProductsPrice === 0 ? null : <span className="text-end font-weight-bold text-primary bg-dark p-1 fs-4 float-end rounded">total - {allProductsPrice}$</span> 
         }
      </div>
   )
}

export default BasketItem