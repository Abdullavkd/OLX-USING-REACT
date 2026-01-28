import { memo, useState } from 'react';
import ProductsContext from '../Contexts/ProductsContext';

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
  return <ProductsContext.Provider value={{products, setProducts}}>
        {children}
  </ProductsContext.Provider>
};

export default memo(ProductsProvider);