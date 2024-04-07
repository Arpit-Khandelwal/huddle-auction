const Header = ({logoutPage,IsLogedIn}) => {
    return (<div>
        <img href="../../public/logo192.png"/>
        {IsLogedIn ? <button onClick={() => {logoutPage("Logout")}}>Logout</button>:
        <button onClick={() => {logoutPage("Login")}}>Login</button>}
    </div>)
}
export default Header;