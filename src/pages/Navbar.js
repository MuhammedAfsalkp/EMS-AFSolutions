import './Navbar.css'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function Navbar(){
   const {pathname} = useLocation()
    return(
     <div className="navbar">
        <div className='nav-head'>
            <Link to="/">
                <div className='title'>
                   <h3>EventMS</h3>
                   <p>PoweredBy AFSolutions</p>
                 </div>
            </Link>
        </div>
        <div className='navlinks'>
           <ul>
             <li><Link className={(pathname === '/') ? 'active' : ''} to="/">Home</Link></li>
             <li><Link className={(pathname === '/auth') ? 'active' : ''}to="/auth">Login</Link></li>
           </ul>
        </div>  
     </div>

    )
}

export default Navbar;