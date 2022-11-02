import { FaGithub } from "react-icons/fa";
import { ReactPropTypes } from "react";
import { Link } from "react-router-dom";


export default function Navbar({title}) {
        return (
                <nav className="navbar">
                        <div className="container nav-content">
                                <div className="nav__left">
                                        <FaGithub className="git-icon" />
                                        <Link className="nav__link"  to='/'>
                                        {title}
                                        </Link>
                                </div>
                                <div className="nav__right">
                                        <Link className="nav__link nav-l" to='/'>
                                        Home 
                                        </Link>
                                        <Link className="nav__link nav-l" to='/about'>
                                        About Me 
                                        </Link>
                                </div>
                        </div>
                </nav>
        )
}

Navbar.defaultProps = {
        title: 'Github Finder'
}
