import { memo } from 'react';
import { Link } from 'react-router-dom';

const Catogories = () => {
  return (
    <div className='flex p-3 gap-3 border border-gray-300'>
        <Link className='border rounded-full px-4 py-1'>Cars</Link>
        <Link className='border rounded-full px-4 py-1'>Motorcycle</Link>
        <Link className='border rounded-full px-4 py-1'>Mobile</Link>
        <Link className='border rounded-full px-4 py-1'>Phone</Link>
      </div>
  );
};

export default memo(Catogories);