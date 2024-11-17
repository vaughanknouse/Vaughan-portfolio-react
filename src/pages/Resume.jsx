function Resume() {
  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4'>Resume</h2>
      <p className='text-center'>
        Download my resume for a detailed view of my experiences and skills.
      </p>
      <div className='text-center mb-4'>
        <a
          href='/src/assets/documents/VK_Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-primary'>
          Download My Resume
        </a>
      </div>
      <h3 className='text-center'>Skills</h3>
      <div className='row text-center'>
        <div className='col-md-3 mb-5'>
          <h4>Front-End</h4>
          <ul className='list-unstyled'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Handlebars.js</li>
            <li>Bootstrap</li>
            <li>Responsive Web Design</li>
          </ul>
        </div>
        <div className='col-md-3 mb-5'>
          <h4>Back-End</h4>
          <ul className='list-unstyled'>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>PostgreSQL</li>
            <li>REST APIs</li>
            <li>OpenWeather API</li>
          </ul>
        </div>
        <div className='col-md-3'>
          <h4>Tools & Platforms</h4>
          <ul className='list-unstyled'>
            <li>Version Control/Git</li>
            <li>GitHub</li>
            <li>Visual Studio (VS) Code</li>
            <li>Chrome DevTools</li>
            <li>Insomnia</li>
            <li>Render</li>
            <li>JWT</li>
          </ul>
        </div>
        <div className='col-md-3'>
          <h4>Software</h4>
          <ul className='list-unstyled'>
            <li>EMR Systems: Epic, CRIS, PACS</li>
            <li>Microsoft Office Suite</li>
            <li>SharePoint</li>
            <li>IMPAC</li>
            <li>NIDAP</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
