import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-success fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button
                    className="navbar-toggler btn-outline-*"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                aria-current="page"
                                to="/Link1">
                                Link1
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                aria-current="page"
                                to="/Link2">
                                Link2
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item active-bg-success" href="#">Action</Link></li>
                                <li><div className="dropdown-item" href="#">Another action</div></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><div className="dropdown-item" href="#">Something else here</div></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;