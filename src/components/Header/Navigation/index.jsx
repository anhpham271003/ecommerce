import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Navigation = () =>{
    return (
        <nav className = "py-2">
            {/* navigation left */}
            <div className="container flex items-center justify-end ">
                <div className="col-1 w-[20%] ">
                    <Button className = "!text-black gap-2 w-full">
                       <HiOutlineMenuAlt2 className ="text-[18px]"/> SHOP BY CATEGORIES
                       <FaCaretDown className = "text-[18px]"/>
                    </Button>
                </div>
                {/* navigation center */}
                <div className="col-2 w-[60%] flex justify-center">
                    <ul className="flex items-center !ml-[20px] gap-4">
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-bold">
                                <Button className = "!text-black !font-bold hover:!text-[red]">HOME</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">PHONE</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">LAPTOP</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">DESKTOP</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">EARPHONE</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">KEYBOARD</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">MOUSE</Button>
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to= "/" className = "link transition text-[15px] font-[500]">
                                <Button className = "!text-black !font-[500] hover:!text-[red] ">SCREEN</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* navigation right */}
                <div className="col-3 w-[20%] flex justify-end ">
                    <p className=" text-[15px] font-[500] flex gap-2 items-center">
                        <MdOutlineRocketLaunch className ="text-[15px]"/>
                        Hot Deals – Free Shipping!
                    </p>
                </div>
            </div>
        </nav>

        // categories dropdown
    )
}

export default Navigation;
