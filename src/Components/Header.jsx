import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Plus, Bell, MessageCircle } from 'lucide-react'; // Example icons

const Header = () => {
  return (
    <header className="sticky top-0 bg-gray-100 shadow-sm">
      {/* Main Navbar */}
      <div className="flex items-center gap-5 py-3 px-6 bg-blue-100">
        <div className="text-2xl font-bold text-teal-900">OLX</div>
        
        {/* Location Search */}
        <div className="flex items-center border-2 border-black rounded-full p-2 bg-white w-64">
           <MapPin size={21} />
           <input className="outline-none ml-3 w-full" placeholder="Select your country" />
        </div>

        {/* Product Search */}
        <div className="flex grow items-center border-2 border-black rounded-full bg-white overflow-hidden">
           <input className="outline-none p-2 grow" placeholder="Find Cars, Mobile Phones and more..." />
           <div className="bg-teal-900 p-3 text-white cursor-pointer">
             <Search size={20} />
           </div>
        </div>

        {/* Icons & Sell */}
        <div className="flex items-center gap-6 ml-4">
          <Link to="/chat"><MessageCircle size={24} /></Link>
          <Link to="/notifications"><Bell size={24} /></Link>
          <Link to="/sell" className="flex items-center gap-1 border-4 border-t-yellow-400 border-l-blue-400 border-b-blue-600 border-r-teal-500 rounded-full px-4 py-1 font-bold shadow-md hover:bg-gray-50 bg-white">
            <Plus size={20} /> SELL
          </Link>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);