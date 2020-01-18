import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../../assets/img/medal.svg';
import { isMobileView } from '../../helpers/miscellaneous';

import './Header.css';

const Header = (props) => {

    return (
        <nav
            className={`navbar navbar-expand-md navbar-dark fixed-bottom`}
            style={{ background: '#313648' }}>
            <div className="w-100" id="navbarCollapse">
                <div className="navbar-nav pt-2 pb-2" style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <NavLink to="/" className="nav-item nav-link p-2">
                        {/* <img src={Img} style={{ width: '30px', height: '30px' }} alt="img removed" /><br /> */}
                        Home
                    </NavLink>
                    <NavLink to="/leaders" className="nav-item nav-link p-2">
                        {/* <img src={Img} style={{ width: '30px', height: '30px' }} alt="img removed" /><br /> */}
                        LEADERS
                    </NavLink>
                    <NavLink to="/wallet" className="nav-item nav-link p-2">
                        {/* <img src={Img} style={{ width: '30px', height: '30px' }} alt="img removed" /><br /> */}
                        WALLET
                    </NavLink>
                    <NavLink to="/account" className="nav-item nav-link p-2">
                        {/* <img src={Img} style={{ width: '30px', height: '30px' }} alt="img removed" /><br /> */}
                        ACCOUNT
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;
