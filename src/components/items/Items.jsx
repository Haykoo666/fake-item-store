import { Skeleton } from 'antd';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../../features/items/itemsSlice';
import Item from './Item';


const Items = () => {
   const dispatch = useDispatch();
   const status = useSelector(state => state.items.status);
   const {products} = useSelector(state => state.items.value);
      
   useEffect( () => {
      dispatch(getData());
   }, [])


   return (
      <main className='container'>
         {
            status === "loading" && <Skeleton.Image active={ true } />
         }
            {
               products && products.length && 
               products.map(product => {
                  return (
                     // <Col key={product.id} md={3} xs={12} lg={4}>
                        // <Link to={`/hotels/`} className="text-decoration-none text-dark" key={product.id}>
                           <Item product={product} key={product.id} />
                        // </Link>
                     // </Col>
                  )
               })
            }
      </main>
   )
}

export default Items;