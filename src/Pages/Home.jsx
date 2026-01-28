import { memo, useContext } from 'react';
import ProductsContext from '../Contexts/ProductsContext';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const {product} = useContext(ProductsContext)
    console.log(product)
  return (
    <div>
        {product.map(val => (
            <ProductCard price={val.price} title={val.title} date={val.date}/>
        ))}
    </div>
  );
};

export default memo(Home);