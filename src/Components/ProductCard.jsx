import { memo } from 'react';

const ProductCard = ({price, title, location}) => {
  return (
    <div>
      <img src="" alt="" />
      <p>{price}</p>
      <p>{title}</p>
      <p>{location}</p>
    </div>
  );
};

export default memo(ProductCard);