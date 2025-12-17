import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/learning-react"><li>Learning React</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
    </nav>
  )
}
export default Navbar