
import { Link } from "react-router-dom";


const MenuDirect = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>

        <Link to="/message">Test home</Link>
      </div>
    </nav>
  );
}
 
export default MenuDirect;