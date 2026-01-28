import { memo } from 'react';
import Header from './Header';
import Catogories from './Catogories';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Catogories/>
    </div>
  );
};

export default memo(Layout);