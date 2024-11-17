function Home() {
  return (
    <section
      className='hero text-center d-flex flex-column align-items-center justify-content-center'
      style={{
        height: '80vh',
        background: `
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url('/src/assets/images/blue-banner2.jpg') center/cover no-repeat
    `,
        color: 'white',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
      }}>
      <h1 className='display-4 fw-bold mb-3'>Hello, I&apos;m Vaughan Knouse</h1>
      <h2 className='lead mb-4 fw-bold'>Full-Stack Web Developer</h2>
      <br />
      <p>
        Welcome to my portfolio! Explore my work, learn more about me, or get in
        touch. I&apos;d love to collaborate!
      </p>
      <div>
        <a href='/about' className='btn btn-outline-light me-2'>
          Learn More
        </a>
        <a href='/contact' className='btn btn-primary'>
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Home;
