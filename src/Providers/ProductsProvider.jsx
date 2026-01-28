import { memo, useState } from 'react';
import ProductsContext from '../Contexts/ProductsContext';
import { products } from '../Data/DummyData';

const ProductsProvider = ({children}) => {
    const [product, setProducts] = useState(products);
  return <ProductsContext.Provider value={{product, setProducts}}>
        {children}
  </ProductsContext.Provider>
};

export default memo(ProductsProvider);