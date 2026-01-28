import { memo, useContext } from 'react';
import ProductsContext from '../Contexts/ProductsContext';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const {product} = useContext(ProductsContext)
    console.log(product)
  return (
    <div>
        <div className='m-auto grid gap-5 mt-13 w-full sm:w-133 sm:grid-cols-2 md:w-203 md:grid-cols-3 lg:w-271 lg:grid-cols-4 xl:grid-cols-5 xl:w-331'>
            {product.map(val => (
                <ProductCard price={val.price} title={val.title} date={val.date} img={val.image}/>
            ))}
        </div>
    </div>
  );
};

export default memo(Home);