import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

import {Link} from "react-router-dom";
function ProductCard({product}) {
const{id,title,description,thumbnail,price} = product;


  return (
    <>
     <Card style={{ width: '300px', height: '300px' }}>
         <Card.Content>
           <Image style={{ width: '120px', height: '120px' }}
           className="w-full h-48 object-cover"
             floated='right'
             size='small'
             src={thumbnail}
           />
           <Card.Header className='ui header'>{title} </Card.Header>
           <p className="text-gray-700 text-base">Price: ${price}</p>
           <Card.Description>
           {description}
           </Card.Description>
         </Card.Content>
         <Card.Content extra>
           <div className='ui two buttons'>
             <Button className='' basic color='green' as={Link} to={`/detail/${id}`}>
             
               Details
             </Button>
             <Button basic color='red'>
               Delete
             </Button>
           </div>
         </Card.Content>
       </Card>
      
   
   
   </>
  )
}

export default ProductCard