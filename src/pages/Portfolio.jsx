import Project from '../components/Project';

const projects = [
  {
    title: 'GitFit',
    description:
      'A full-stack user-friendly and responsive fitness application built using the MERN stack in collaboration with 3 other full-stack web developers that allows users to search for, customize, and save their workout routines, providing a seamless way to create and track personalized fitness plans.',
    imgSrc: '/src/assets/images/gitfit.png',
    repoLink: 'https://github.com/cococnde/git-fit',
    liveLink: 'https://git-fit-2.onrender.com/',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'GraphQL',
    ],
  },
  {
    title: 'MVC Tech Blog',
    description:
      'A CMS-style platform designed for developers to create, edit, and comment on blog posts, structured around the Model-View-Controller (MVC) architecture with built-in authentication.',
    imgSrc: '/src/assets/images/MVC-Tech-Blog-Homepage-image.png',
    repoLink: 'https://github.com/vaughanknouse/MVC-Tech-Blog',
    liveLink: 'https://mvc-tech-blog-hlde.onrender.com/',
    techStack: [
      'Handlebars.js',
      'Node.js',
      'Express.js',
      'Sequelize',
      'PostgreSQL',
    ],
  },
  {
    title: 'Server-Side API: Weather Dashboard',
    description:
      'A dynamic weather dashboard web application that allows users to search for cities and view current and 5-day weather forecasts, leveraging the OpenWeather third-party API as well as localStorage for persistent data.',
    imgSrc: '/src/assets/images/weather-dashboard-image.png',
    repoLink:
      'https://github.com/vaughanknouse/weather-dashboard-server-side-api',
    liveLink:
      'https://vaughanknouse.github.io/weather-dashboard-server-side-api/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API', 'localStorage'],
  },
  {
    title: 'Web API: Personal Blog',
    description:
      'A dynamic two-page personal blog web application that allows users to create, store, and view blog posts with light/dark mode toggle functionality, showcasing practical JavaScript, HTML, CSS, and localStorage usage.',
    imgSrc: '/src/assets/images/Web-API-personal-blog-light-image.png',
    repoLink: 'https://github.com/vaughanknouse/web-apis-personal-blog',
    liveLink: 'https://vaughanknouse.github.io/web-apis-personal-blog/',
    techStack: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
  },
  {
    title: 'SQL: Employee Tracker',
    description:
      'A command-line application that enables business owners to manage and organize employee data, including departments, roles, and employee details.',
    imgSrc: '/src/assets/images/SQL-employee-tracker-gif.gif',
    repoLink: 'https://github.com/vaughanknouse/SQL-employee-tracker',
    liveLink:
      'https://drive.google.com/file/d/1oaf3nUSd0Oe6NN6vLHEg9JHLhRNQaWzq/view?usp=sharing',
    techStack: ['Node.js', 'Inquirer.js', 'PostgreSQL', 'JavaScript'],
  },
  {
    title: 'Social Network API',
    description:
      "A backend API for a social media platform where users can share thoughts, react to friends' posts, and manage friendships.",
    imgSrc: '/src/assets/images/Social-Network-API-gif.gif',
    repoLink: 'https://github.com/vaughanknouse/Social-Network-API',
    liveLink:
      'https://drive.google.com/file/d/105pVmlPufGvbNxV1hqa1WR7tMHdrwhUx/view?usp=sharing',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Insomnia'],
  },
];

function Portfolio() {
  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4'>Portfolio</h2>
      <div className='row'>
        {projects.map((project, index) => (
          <div className='col-md-6 col-lg-4 mb-4' key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
