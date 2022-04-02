import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Nav = () => {

    const navigate = useNavigate();

    function hapus() {
        //menghapus sessionstorage
        sessionStorage.clear();
        navigate('/login');
    }

    return (
        <div>
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/admin/home' className="text-decoration-none">
                        <a className="navbar-brand">DASHBOARD</a>
                    </Link>

                    <li className='nav-item list-unstyled text-light ms-auto me-4'>User : {sessionStorage.getItem('email')}</li>
                    <li className='nav-item list-unstyled text-light me-3'>Level : {sessionStorage.getItem('level')}</li>
                    
                    <button onClick={hapus} className="btn btn-outline-primary" type="submit">LogOut</button>
                </div>
            </nav>

        </div>
    );
}

export default Nav;
