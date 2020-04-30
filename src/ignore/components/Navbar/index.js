import React, {useState} from 'react';
import { Link, useLocation as location } from 'react-router-dom';
// import { Button } from '../Forms'
import { Collapse } from '../Grid';

export default function Navbar() {
    let [navLinks, showNavLinks] = useState(false)

    const toggleNav = () => showNavLinks(navLinks = !navLinks)

    const { pathname } = location();

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <Collapse navState={navLinks} id={'target-collapse'}>
            <button onClick={toggleNav} className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#target-collapse" >
            <span className="navbar-toggler-icon"></span>
            </button>
              <ul className="navbar-nav mr-auto">
                <li className={pathname === "/" ? "nav-item active" : "nav-item"}>
                    <Link to="/" className={'nav-link'}>
                        Home
                    </Link>    
                </li>
                <li className={pathname === "/projects" ? "nav-item active" : "nav-item"}>
                    <Link to="/projects" className={'nav-link'}>
                        projects
                    </Link>    
                </li>
                <li className={pathname === "/contact" ? "nav-item active" : "nav-item"}>
                    <Link to="/contact" className={'nav-link'}>
                        contact
                    </Link>    
                </li>
              </ul>
                
            </Collapse>
        </nav>
    )
}
