import React from "react";
import "./header.css"
import logo from "./Amazon_logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header(){
return (
    <div className="header">
        <div className="header_Logo">
        <img src={logo} width={100}/>
        </div>
        <div className="header_Search">
          <input className="header_SearchInput" type="text"/>
          <SearchIcon className="header_SearchIcon"/>
        </div>
        <div className="header_Nav">
            <div className="header_option">
                 <span className="header_optionLineOne">Hello Guest</span>
                 <span className="header_optionLineTwo">Sign In</span>
            </div>
            <div className="header_option">
                 <span className="header_optionLineOne">Returns</span>
                 <span className="header_optionLineTwo">Order</span>
            </div> 
            <div className="header_option">
                 <span className="header_optionLineOne">Your</span>
                 <span className="header_optionLineTwo">Prime</span>
            </div>
            <div className="header_optionBasket">
                 <ShoppingBasketIcon />
                 <span className="header_optionLineTwo 
                 header_basketCount">0</span>
            </div>
        </div>
    </div>
);
}
export default Header;