import { memo } from 'react';
import { Link } from 'react-router-dom';

const CatogoryBar = () => {
  return (
    <div className='flex p-3 gap-3 border border-gray-300'>
        <select name="ALL CATEGORIES" id="all-categories" className='outline-none'>
          <option value="cars">Cars</option>
          <option value="motorcycles">Motorcycles</option>
          <option value="phones">Phones</option>
        </select>
        <Link className='border rounded-full px-4 py-1'>Cars</Link>
        <Link className='border rounded-full px-4 py-1'>Motorcycle</Link>
        <Link className='border rounded-full px-4 py-1'>Mobile</Link>
        <Link className='border rounded-full px-4 py-1'>Phone</Link>
      </div>
  );
};

export default memo(CatogoryBar);