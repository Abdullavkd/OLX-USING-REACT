import { memo } from 'react';
import ProductsContext from '../Contexts/ProductsContext';
import { Heart } from 'lucide-react';

const ProductCard = ({price, title, date, img}) => {
  return (
    <div className='bg-gray-100 rounded-3xl overflow-hidden border w-64'>
        <div className='h-38 overflow-hidden m-2.5 rounded-2xl relative'>
            <img className='w-full' src={`${img}`} alt="" />
            <div className='absolute top-1 right-1'><Heart className='size-7 bg-white border-4 border-white rounded-full'/></div>
        </div>
        <div className='p-5 pt-0'>
            <div className='font-black text-2xl'>{price}</div>
            <div className='font-black'>{title}</div>
            <div>{date}</div>
        </div>
    </div>
  );
};

export default memo(ProductCard);