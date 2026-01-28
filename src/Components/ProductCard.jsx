import { memo } from 'react';
import ProductsContext from '../Contexts/ProductsContext';
import { Heart } from 'lucide-react';

const ProductCard = ({price, title, date}) => {
  return (
    <div>
        <div><img src="" alt="" /></div>
        <div>{price}</div>
        <div>{title}</div>
        <div>{date}</div>
        <div><Heart/></div>
    </div>
  );
};

export default memo(ProductCard);