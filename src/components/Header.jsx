// Link and useLocation components
import { Link, useLocation } from 'react-router-dom';

// Import icons from react-icons and custom CSS for the Header component
import { FaUser, FaBriefcase, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className='bg-dark text-white'>
      <nav className='navbar navbar-expand-lg'>
        <div className='container'>
          <Link
            className='navbar-brand fw-bold d-flex align-items-center'
            to='/'>
            <img
              src='/assets/images/vk-favicon.ico'
              alt='favicon'
              className='me-2'
              style={{ width: '30px', height: '28px' }}
            />
            Vaughan Knouse
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/about' ? 'active' : ''
                  }`}
                  to='/about'>
                  <FaUser className='me-1' /> About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/portfolio' ? 'active' : ''
                  }`}
                  to='/portfolio'>
                  <FaBriefcase className='me-1' /> Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/resume' ? 'active' : ''
                  }`}
                  to='/resume'>
                  <FaFileAlt className='me-1' /> Resume
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/contact' ? 'active' : ''
                  }`}
                  to='/contact'>
                  <FaEnvelope className='me-1' /> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
