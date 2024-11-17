function Footer() {
  return (
    <footer className='bg-dark text-white text-center py-3'>
      <p>
        &copy; {new Date().getFullYear()} Vaughan Knouse. All rights reserved.
      </p>
      <div>
        <a
          href='https://github.com/vaughanknouse'
          target='_blank'
          className='text-white me-3'>
          <i className='fab fa-github' style={{ marginRight: '5px' }}></i>
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/vaughanknouse/'
          target='_blank'
          className='text-white me-3'>
          <i className='fab fa-linkedin' style={{ marginRight: '5px' }}></i>
          LinkedIn
        </a>
        <a
          href='https://stackoverflow.com/users/25171022/vaughan-knouse'
          target='_blank'
          className='text-white'>
          <i
            className='fab fa-stack-overflow'
            style={{ marginRight: '5px' }}></i>
          Stack Overflow
        </a>
      </div>
    </footer>
  );
}

export default Footer;
