import React from "react";

const worldImg = "https://cdn-icons-png.flaticon.com/512/44/44386.png";
const Navbar = () =>{
    return(
        <div className="navbar-div">
            <nav>
                <img src={worldImg} alt="world"/>
                <span>My Travel Journal</span>
            </nav>
        </div>
    );
}
export default Navbar;