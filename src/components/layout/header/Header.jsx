import { Container, Nav, Navbar } from "react-bootstrap"
import "./header.scss"
import { NavLink } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"


const Header = () => {



    return (
        <div className="header">
            <Navbar>
                <Container fluid>
                    <Nav className="navbar_left">
                        <NavLink to={"/"} className="nav-link">Home</NavLink>
                        <NavLink to={"/about"} className="nav-link">About</NavLink>
                        <NavLink to={"/project"} className="nav-link">Project</NavLink>
                    </Nav>
                    <Nav className="navbar_right">
                        <NavLink to={"/contact"} className="contact nav-link">Contact</NavLink>
                        <NavLink to={"/login"} className="nav-link account">
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default Header