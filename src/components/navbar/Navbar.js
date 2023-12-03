
import {navbar} from "../../helper/data"
import "./Navbar.css"



const Navbar = () => {
  return (
    <div className="containerN">
        <img src="img/logo.png" alt="logo" />
        <div className="buttons">
            {navbar.map((navbar) => (
                <button key={navbar}>{navbar}</button>
            ))}
        </div>
    </div>
  )
}

export default Navbar