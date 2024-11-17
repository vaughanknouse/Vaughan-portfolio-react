function About() {
  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4'>About Me</h2>
      <div className='row align-items-center'>
        <div className='col-md-4 text-center mb-4 mb-md-0'>
          <img
            src='src/assets/images/VK-image.jpeg'
            alt='Vaughan Knouse'
            className='img-fluid rounded-circle'
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className='col-md-8'>
          <p>
            Welcome to my page! I am a full-stack web developer based in
            Washington, DC, with over 10 years of experience in healthcare
            operations. My journey in the tech world began after years of
            working in healthcare, where I developed a passion for improving
            workflows and patient care through technology.
          </p>
          <p>
            I earned a Full-Stack Web Development certificate from The
            University of Texas at Austin Coding Boot Camp, where I honed my
            skills in the MERN stack (MongoDB, Express.js, React.js, Node.js),
            SQL, and responsive web design. With a strong foundation in
            front-end and back-end development, I focus on creating
            user-friendly applications that streamline processes and enhance
            experiences.
          </p>
          <p>
            Before transitioning into software development, I worked in various
            healthcare roles, including clinical work as an emergency department
            medical scribe, research assistant at the NIH's National Cancer
            Institute, and as part of the administrative team at the NIH's
            Center for Scientific Review. This diverse experience has given me
            valuable insight into the unique challenges of the healthcare field
            and drives my desire to leverage technology to make a meaningful
            impact.
          </p>
          <p>
            I'm passionate about continuing to learn and grow, and I'm excited
            about applying my skills to create innovative solutions that improve
            the healthcare industry. Whether working independently or as part of
            a team, I bring a collaborative mindset, strong problem-solving
            skills, and a commitment to delivering high-quality solutions in
            fast-paced environments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
