import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="index.html">Todo App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-link" to="/">Add </Link>
                            <Link className="nav-link" to="/search">Search </Link>
                            <Link className="nav-link" to="/delete">Delete  </Link>
                            <Link className="nav-link" to="/viewall">View All</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
  )
}

export default Navbar