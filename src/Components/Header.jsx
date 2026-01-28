import { memo } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between p-5 bg-blue-100'>
        <div>Logo</div>
        <div>Search</div>
        <div>Search</div>
        <Link>🔖</Link>
        <Link>🗨</Link>
        <Link>🛰</Link>
        <Link>➕</Link>
        <Link>🔔</Link>
    </div>
  );
};

export default memo(Header);