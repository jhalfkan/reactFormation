import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
        <ul>
              <li><Link to='/'>Section 1</Link></li>
              <li><Link to='/1'>Section 2</Link></li>
              <li><Link to='/2'>Section 3</Link></li>
            </ul>
     );
}
 
export default Menu;