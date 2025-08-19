import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Navigation from './Navigation';
//cartshop
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -2,
    top: 3,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className = "!bg-white">
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
        <div className="header py-3 border-b-[1px] border-gray-300">
            <div className="container flex items-center justify-between">
                <div className="col-1 w-[25%]">
                    <Link to="/"> <img src="/logo2.png"  className="h-auto rounded-lg" alt="Logo" /> </Link>

                </div>
                <div className="col-2 w-[45%]">
                    <Search />
                </div>
                <div className="col-3 w-[30%] flex items-center ">
                    <ul className = "flex items-center gap-2 w-full justify-end">
                        <li className="list-none">
                            <Link to="/login" className="link transition font-[500]">Login</Link> |&nbsp;
                            <Link to="/register" className="link transition font-[500]">Register</Link>
                        </li>
                        <li className="list-none">
                            <Tooltip title="Compare" arrow placement = "bottom">
                                <IconButton aria-label="compare">
                                     <StyledBadge badgeContent={4} sx={{
                                        '& .MuiBadge-badge': {
                                        backgroundColor: '#ff5252',
                                        color: '#fff'
                                        }
                                    }}>
                                      <IoGitCompareOutline />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                        <li className="list-none">
                            <Tooltip title="WishList" arrow placement = "bottom">
                                <IconButton aria-label="heart">
                                    <StyledBadge badgeContent={4} sx={{
                                        '& .MuiBadge-badge': {
                                        backgroundColor: '#ff5252',
                                        color: '    #fff'
                                        }
                                    }}>
                                      <FaRegHeart />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                        <li className="list-none">
                             <Tooltip title="Cart" arrow placement = "bottom">
                                <IconButton aria-label="cart">
                                     <StyledBadge badgeContent={4} sx={{
                                        '& .MuiBadge-badge': {
                                        backgroundColor: '#ff5252',
                                        color: '#fff'
                                        }
                                    }}>
                                        <MdOutlineShoppingCart />
                                    </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        {/* navigation */}
        <Navigation/>
    </header>
  );
};

export default Header;
