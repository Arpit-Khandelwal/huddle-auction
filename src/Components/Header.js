import React from "react";
const Header = ({logoutPage,IsLogedIn}) => {
    return (<div>
        <img href="../../public/logo192.png"/>
        {IsLogedIn ? <button className="cta-button connect-wallet-button" onClick={() => {logoutPage("Logout")}}>Logout</button>:
        <button className="cta-button connect-wallet-button" onClick={() => {logoutPage("Login")}}>Login</button>}
    </div>)
}
export default Header;