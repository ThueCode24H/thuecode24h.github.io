import { useState } from "react";
import "./sidebar.scss"
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true);

    return (
        <div className="bg-light vh-100 p-4 shadow-sm sidebar_container" style={{ width: "250px", position: "fixed" }}>
            <div className="mb-4 d-flex align-items-center sidebar_brand">
                {/* <FaChartPie className="me-2 text-dark" size={20} /> */}
                <strong>THUECODE DASHBOARD</strong>
            </div>
            <hr />

            <Nav defaultActiveKey="/admin/dashboard" className="flex-column gap-2 sidebar_nav"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin/dashboard" eventKey={"dashboard"}>
                        <div className="nav-link-icon">
                            <FontAwesomeIcon icon={faDashboard} className="icon" />
                        </div>

                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to="/admin/project" eventKey={"project"}>
                        <div className="nav-link-icon">
                            <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
                        </div>

                        Project
                    </Nav.Link>
                </Nav.Item>

                <hr />
                <div className="text-uppercase text-dark fw-bold small">Account Pages</div>

                <Nav.Link href="/profile" className="d-flex align-items-center text-muted">
                    {/* <FaUser className="me-2 text-info" /> Profile */}
                </Nav.Link>
                <Nav.Link href="/signin" className="d-flex align-items-center text-muted">
                    {/* <FaSignInAlt className="me-2 text-info" /> Sign In */}
                </Nav.Link>
                <Nav.Link href="/signup" className="d-flex align-items-center text-muted">
                    {/* <FaRocket className="me-2 text-success" /> Sign Up */}
                </Nav.Link>
            </Nav>
        </div>
    )
}

export default Sidebar