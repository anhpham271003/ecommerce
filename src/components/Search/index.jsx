import React from 'react'
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Search  = () => {
    return (
        <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5]/40 rounded-[10px] flex  items-center relative p-2 group">
            <input type = 'text' placeholder ='Do you want to search products?' className="w-full h-[35px] group-focus: border-amber-700 focus:outline-none p-2 text-[15px] caret-amber-700"></input>
            <Button className = "!absolute top-[5px] right-[5px] !w-[40px] !min-w-[40px] h-[40px] !rounded-full !text-black/50" >
                <FaSearch className ="text-black/50  text-[20px]"/>
            </Button>
        </div>
    )
}

export default Search;