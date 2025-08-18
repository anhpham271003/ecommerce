import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IoCloseSharp  } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegMinusSquare, FaLaptop  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./style.css"

const CategoryPanel = (props) => {
    //useState for open submenu and bottom submenu
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openBottomSubmenu, setOpenBottomSubmenu] = useState(null);

    //change state open drawer
    const toggleDrawer = (newOpen) => () => {
        props.setOpenDrawerCategory(newOpen);
    };

    //Change state open submenu
    const openSubmenuHandler = (newState) => {
        if(openSubmenu === newState) {
            setOpenSubmenu(null);
        }
        else{
            setOpenSubmenu(newState);
        }
    }
    //Change state open bottom submenu
    const openBottomSubmenuHandler = (newState) => {
        if(openBottomSubmenu === newState) {
            setOpenBottomSubmenu(null);
        }
        else{
            setOpenBottomSubmenu(newState);
        }
    }

    //prepare drawer list
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation">
            <div className="scroll">
                {/* ul lever 1 */}
                <ul className = "w-full">
                    {/* //phone */}
                    <li className="list-none flex relative items-center categoryPanel flex-col">
                        <Link to="/" className = "w-full">
                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)] gap-[2px]">
                                <MdOutlinePhoneAndroid className="!text-[18px]"/>
                            Phone</Button>
                        </Link>
                        {openSubmenu === 0 ? (
                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={() => openSubmenuHandler(0)}/>
                        )
                        : (
                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={() => openSubmenuHandler(0)}/>
                        )}
                        {
                            openSubmenu === 0  &&(
                                //  {/* ul lever 2 */}
                                <ul className = " pl-8 w-full">
                                    {/* samsung */}
                                    <li className="list-none flex relative flex-col">
                                        <Link to="/" className = "w-full">
                                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)]">SAMSUNG</Button>
                                        </Link>
                                        {openBottomSubmenu === 0 ? (
                                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(0)}/>
                                        )
                                        : (
                                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(0)}/>
                                        )}                            

                                        { openBottomSubmenu === 0 && (
                                            // {/* ul lever 3 */}
                                            <ul className = " a pl-7 w-full">
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber  !mb-1">Galaxy Ultra</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Galaxy S</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Galaxy Note</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Galaxy Z</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                    {/* iphone */}
                                    <li className="list-none flex relative flex-col">
                                        <Link to="/" className = "w-full">
                                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)]">IPHONE</Button>
                                        </Link>
                                        {openBottomSubmenu === 1 ? (
                                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(1)}/>
                                        )
                                        : (
                                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(1)}/>
                                        )}                            

                                        { openBottomSubmenu === 1 && (
                                            // {/* ul lever 3 */}
                                            <ul className = " a pl-7 w-full">
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber  !mb-1">iPhone 15 series</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">iPhone 14 series</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">iPhone 13 series</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">iPhone 12 series</Link>
                                                </li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            )
                        }
                    </li>

                    {/* //laptop */}
                    <li className="list-none flex relative items-center categoryPanel flex-col">
                        <Link to="/" className = "w-full">
                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)] gap-[2px]">
                                <FaLaptop className="!text-[18px]"/>
                            Laptop</Button>
                        </Link>
                        {openSubmenu === 2 ? (
                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={() => openSubmenuHandler(2)}/>
                        )
                        : (
                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={() => openSubmenuHandler(2)}/>
                        )}
                        {
                            openSubmenu === 2  &&(
                                //  {/* ul lever 2 */}
                                <ul className = " pl-8 w-full">
                                    {/* //LAPTOP GAMING */}
                                    <li className="list-none flex relative flex-col">
                                        <Link to="/" className = "w-full">
                                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)]">LAPTOP GAMING</Button>
                                        </Link>
                                        {openBottomSubmenu === 2 ? (
                                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(2)}/>
                                        )
                                        : (
                                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(2)}/>
                                        )}                                        

                                        { openBottomSubmenu === 2 && (
                                            // {/* ul lever 3 */}
                                            <ul className = " a pl-7 w-full">
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber  !mb-1">Asus Gaming</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">MSI Gaming</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Acer Gaming</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Lenovo Gaming</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">HP Gaming</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Dell Gaming</Link>
                                                </li>
                                            </ul>
                                        )}

                                    </li>
                                    {/* //LAPTOP OFFICE */}
                                    <li className="list-none flex relative flex-col">
                                        <Link to="/" className = "w-full">
                                            <Button className= " w-full !justify-start !text-[rgba(0,0,0,0.7)]">LAPTOP OFFICE</Button>
                                        </Link>
                                        {openBottomSubmenu === 3 ? (
                                            <FaRegMinusSquare className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(3)}/>
                                        )
                                        : (
                                            <FaRegSquarePlus className="absolute top-[10px] right-[10px] cursor-pointer" onClick={()=>openBottomSubmenuHandler(3)}/>
                                        )}                                        

                                        { openBottomSubmenu === 3 && (
                                            // {/* ul lever 3 */}
                                            <ul className = " a pl-7 w-full">
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber  !mb-1">Dell</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">HP</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Asus</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Lenovo</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Acer</Link>
                                                </li>
                                                <li className="list-none flex relative">
                                                    <Link to="/category/samsung" className= "hover:text-[#ff5252] transition w-full !justify-start !text-[16px] font-liber !mb-1">Apple</Link>
                                                </li>
                                            </ul>
                                        )}

                                    </li>
                                </ul>
                            )
                        }
                    </li>

                </ul>
            </div>
        </Box>
    );
        
    return(
        <div>
            {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
            <Drawer open={props.openDrawerCategory} onClose={toggleDrawer(false)}>
                <div className ="flex justify-around items-center py-[16px] px-[12px]  border-b-[3px] border-[#e5e7eb]" >
                    <h1 className = "text-[18px] font-bold">Shop By Categories</h1>
                        <IoCloseSharp className="text-[20px] cursor-pointer" onClick={() => props.setOpenDrawerCategory(false)} />
                </div>
                {DrawerList}
            </Drawer>
        </div>
    )
}

export default CategoryPanel;