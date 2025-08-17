import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from "react-icons/io5";


const CategoryPanel = (props) => {

    //change state open drawer
    const toggleDrawer = (newOpen) => () => {
        props.setOpenDrawerCategory(newOpen);
    };
    //prepare drawer list
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

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