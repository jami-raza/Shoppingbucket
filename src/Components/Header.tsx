import React from 'react';
import Basket from './Basket'
function Header(){
    return(
      <div>
        <nav>
          <div className="container">
            <h2 data-text="Shoe Venture" className="logo"> Shoe Venture</h2>
              <ul className="navbar-right">
                <li><Basket/></li>
              </ul>
          </div> 
        </nav>
      </div>

    )
}
export default Header;