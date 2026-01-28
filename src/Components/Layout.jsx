import { memo } from 'react';
import Header from './Header';
import CatogoryBar from './CatogoryBar';

const Layout = () => {
  return (
    <div>
      <Header/>
      <CatogoryBar/>
    </div>
  );
};

export default memo(Layout);