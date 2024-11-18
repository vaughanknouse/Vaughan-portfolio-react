// Import social media icons from react-icons and custom CSS for the Footer component
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer bg-dark text-white py-3'>
      <div className='container d-flex flex-column align-items-center'>
        <p className='mb-2'>
          &copy; {new Date().getFullYear()} Vaughan Knouse. All rights reserved.
        </p>
        <div className='social-links'>
          <a
            href='https://github.com/vaughanknouse'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'>
            <FaGithub size={24} />
            <span className='ms-2'>GitHub</span>
          </a>
          <a
            href='https://www.linkedin.com/in/vaughanknouse/'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'>
            <FaLinkedin size={24} />
            <span className='ms-2'>LinkedIn</span>
          </a>
          <a
            href='https://stackoverflow.com/users/25171022/vaughan-knouse'
            target='_blank'
            rel='noopener noreferrer'
            className='social-link'>
            <FaStackOverflow size={24} />
            <span className='ms-2'>Stack Overflow</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
