import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../fishLogo.svg';

export default function Navbar(props) {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <div className="fw-bold text-bg-primary">
                <Link className="navbar-brand-lg " to="/">
                    <AppLogo alt="" width="60" height="24" className="d-inline-block align-text-top" />
                </Link>
                ZebraFishTracker
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/jobs">Jobs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/model-inspect">Model</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav >;
};
