import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../features/basket-products/basketProdSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';


const Item = (data) => {
   
   const dispatch  = useDispatch();
   const prod = useSelector(state => state.basketProducts)
   const {product: {id, title, description, price, category, images, brand}} = data;

   const addProd = () => {
      let isSame = false;

      prod.find((elem) => {
         if(elem.id == data.product.id){
            isSame = true;
            console.log("same prod found");
         }
      })
      if(!isSame){
         dispatch(addProduct(data.product)); 
         toast.success(`${data.product.title} is add in basket`);
         setTimeout(() => {
            toast.dismiss();
         }, 2600);
      }
   }

   // const presentAnimation = {
   //    hidden: {
   //       x: -100,
   //       opacity: 0,
   //    },
   //    visible: custom => ({
   //       x: 0,
   //       opacity: 1,
   //       transition: { delay: custom * 0.2, duration: 3 }
   //    }),
   // } 

   return (
      <Card style={{ width: '19rem', margin: "0 auto" }} className="mb-4">
         <Card.Img variant="top" src={images[0]} alt={title} height="240px" className="product--img" loading="lazy"/>
         <Card.Body>
         <Card.Text className="text-center">{brand}</Card.Text>
         <Card.Title>{title}</Card.Title>
         <hr />
         <Card.Text className="text-muted">
            {description}
         </Card.Text>
         <hr />
         <Card.Text className="text-warning bg-dark text-center p-1 rounded">
            {category}
         </Card.Text>
         <Card.Text className=" text-success">
            {price}$
         </Card.Text>
         <Button variant="danger" className="add--to--card rounded-circle font-weight-bold" onClick={addProd}>+</Button>
         </Card.Body>
      </Card>
   )
}

export default Item