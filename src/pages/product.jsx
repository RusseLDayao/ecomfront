import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrum } from '../components/Breadcrums/Breadcrum';
import  ProductDisplay  from '../components/ProductDisplay/ProductDisplay';


const Product = () => {
  const {AllProduct} = useContext(ShopContext);
  const{productId} = useParams();
  const product = AllProduct.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product