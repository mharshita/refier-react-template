import React from "react"
import './App.css'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand text-success logo" href="#">Refier</a>

            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-black navtext" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link marketplace" href="#">Marketplace</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-black navtext" href="#">Enterprise</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-primary navtext login" href="#">Login / Sign-Up</a>
                    </li>
                </ul>
            </div>

            {/*<div className="fixed-top">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-black navtext" href="#">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link marketplace" href="#">Marketplace</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-black navtext" href="#">Enterprise</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link text-primary navtext login" href="#">Login / Sign-Up</a>
                    </li>
                </ul>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>*/}

        </nav>
    )
}

export default NavBar;