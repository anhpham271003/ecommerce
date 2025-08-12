import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';

const Header = () => {
  return (
    <header>
        {/* top header */}
        <div className="top-strip py-2">
            <div className="container">
                <div className="flex items-center justify-between">
                    
                    <div className="col-1 w-[50%]">
                    <p className="text-[14px] font-extralight">Get up to 50% off, limited time only</p>
                    </div>

                    <div className="col-2 flex items-center justify-end">
                        <ul className ="flex items-center gap-4">
                            <li className="list-none">
                                <Link to="/help-center" className="link text-[14px] font-nata transition">HelpCenter</Link>
                            </li>

                            <li className="list-none">
                                <Link to="/order-tracking" className="link text-[14px] font-nata transition">Order-Tracking</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        {/* main header */}
        <div className="header py-3">
            <div className="container flex items-center justify-between">
                <div className="col-1 w-[25%]">
                    <Link to="/"> <img src="/logo2.png"  className="h-auto rounded-lg" alt="Logo" /> </Link>

                </div>
                <div className="col-2 w-[45%]">
                    <Search />
                </div>
                <div className="col-3 w-[30%]"></div>
            </div>
        </div>


    </header>
  );
};

export default Header;
