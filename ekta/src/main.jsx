// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  Mail,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2
} from 'lucide-react'
// import { Github } from 'lucide-react'
import './style.css'
import { FaLinkedin, FaGithub, FaCode, FaYoutube, FaWordpress , FaExternalLinkAlt } from 'react-icons/fa'

const skills = [
  {
    level: 5,
    label: 'Core expertise',
    items: [
      ['Frontend Development', 'React.js, Next.js, JavaScript ES6+, JSX'],
      ['UI Development', 'HTML5, CSS3, Tailwind CSS, Bootstrap, Material UI'],
      [
        'React Ecosystem',
        'Hooks, Context API, Redux, React Router, React Query'
      ]
    ]
  },
  {
    level: 4,
    label: 'Proficient',
    items: [
      ['Backend Development', 'Node.js, Express.js, REST APIs, Middleware'],
      ['Authentication', 'JWT, Role-Based Access Control'],
      ['Databases', 'PostgreSQL, MongoDB, MySQL, Sequelize']
    ]
  },
  {
    level: 3,
    label: 'Experienced',
    items: [
      [
        'APIs & Integrations',
        'Axios, Razorpay, Webhooks, Meta/Instagram API, FCM'
      ],
      [
        'DevOps & Deployment',
        'Git, GitHub, Linux, Ubuntu, Nginx, PM2, DigitalOcean'
      ],
      ['SEO & Performance', 'Technical SEO, SSR, Dynamic Metadata, XML Sitemap']
    ]
  },
  {
    level: 2,
    label: 'Additional skills',
    items: [
      ['Programming Languages', 'Python, PHP, SQL'],
      ['Development Tools', 'VS Code, Postman, pgAdmin, Chrome DevTools'],
      ['Cloud & Hosting', 'AWS, Vercel, Render, MongoDB Atlas, Certbot']
    ]
  }
]

const experience = [
  {
    role: 'MERN Stack Developer',
    company: 'Binazy Pvt. Ltd.',
    years: 'Jan 2026 — Oct 2026',
    icon: BriefcaseBusiness,
    intro:
      'Worked on full-stack web applications, backend APIs, authentication, database operations, and production-oriented application architecture.',
    bullets: [
      'Developed full-stack features using React.js, Node.js, Express.js, and MongoDB.',
      'Designed RESTful APIs, JWT-based authentication, middleware workflows, and database operations.',
      'Worked on API integrations, backend functionality, and application workflows for business platforms.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Quaere Etechnologies Pvt. Ltd.',
    years: 'Nov 2023 — Dec 2025',
    icon: Code2,
    intro:
      'Contributed to multiple large-scale, dashboard-based web projects in a team of 4–5 developers, building responsive interfaces and API-driven application features.',
    bullets: [
      'Improved application performance by 30% through API response handling and React state optimization.',
      'Built a multi-step wizard form with structured validation and dynamic linked tables for complex workflows.',
      'Developed reusable, responsive UI components using React.js, JavaScript, Tailwind CSS, and Bootstrap.',
      'Integrated REST APIs using Axios and contributed to full-stack features across multiple projects.',
      'Handled production deployment and troubleshooting, resolving build, routing, API integration, and server issues.'
    ]
  },
  {
    role: 'PHP Intern',
    company: 'Zoopup Technologies Pvt. Ltd.',
    years: 'Dec 2022',
    icon: GraduationCap,
    intro:
      'Worked on web application development and database-driven functionality using PHP and MySQL.',
    bullets: [
      'Created responsive UI components using templates.',
      'Developed CRUD operations and integrated MySQL database functionality.'
    ]
  }
]

const projects = [
  {
    name: 'DUSOL Admission Portal',
    description:
      'Built and maintained a scalable DU SOL admission portal with dynamic course and blog modules, REST API integration, multi-tenant theming, responsive interfaces, SSR, and technical SEO.',
    url: 'https://dusol.distanceeducationlearning.com/',
    tag: 'Next.js · React · SEO'
  },
  {
    name: 'Clo — Fashion E-commerce',
    description:
      'Developed an e-commerce platform with authentication, product management, shopping cart, and order workflows using secure APIs and optimized state management.',
    url: 'https://clo.co.in/',
    tag: 'MERN Stack · Redux · JWT'
  },
  {
    name: 'Collaby — Mobile Collaboration',
    description:
      'Built backend APIs for a mobile collaboration application, including authentication, user management, real-time chat, database operations, and Socket.io communication.',
    url: 'https://getcollaby.com/',
    tag: 'Node.js · Express · Socket.io'
  },
  {
    name: 'UPSOSB Portal',
    description:
      'Developed an education management portal featuring student registration, nodal officer verification workflows, application tracking, and responsive administrative dashboards.',
    url: 'https://upsosb.demoquaeretech.in/',
    tag: 'React · Axios · Encryption'
  },
  {
    name: 'ALIMCO Inventory Management',
    description:
      'Developed inventory and stock management modules, role-based dashboards, and dispatch monitoring features for internal business workflows.',
    url: 'https://alimco.demoquaeretech.in/login',
    tag: 'React · Bootstrap · Axios'
  },
  // {
  //   name: 'Edumall — E-commerce UI',
  //   description:
  //     'Built a responsive e-commerce frontend with reusable UI components and global state management using React Context API.',
  //   url: 'https://github.com/ekta-developer',
  //   tag: 'React · Context API'
  // },
  // {
  //   name: 'PGICH Healthcare Portal',
  //   description:
  //     'Developed responsive healthcare-related frontend modules with REST API integration and dynamic data rendering.',
  //   url: 'https://github.com/ekta-developer',
  //   tag: 'React · Axios'
  // },
  {
    name: 'TMDB CLI Tool',
    description:
      'Created a Node.js CLI tool using REST APIs to fetch and display popular, top-rated, and upcoming movie information.',
    url: 'https://github.com/ekta-developer',
    tag: 'Node.js · Express · REST APIs'
  },
  // {
  //   name: 'Demo Chat-bot',
  //   description:
  //     'Developed a real-time chat application with socket-based communication and live messaging.',
  //   url: 'https://github.com/ekta-developer',
  //   tag: 'Node.js · Express · Socket.io'
  // }
]

const hobbies = [
  {
    title: 'YouTube — ShareNNcare',
    description:
      'Explore my YouTube channel and the content I share through ShareNNcare.',
    url: 'https://www.youtube.com/@shareNNcare',
    label: 'Visit YouTube',
    icon: FaYoutube
  },
  {
    title: 'WordPress — The Start of Journeys',
    description: 'Visit my blog for personal writing, ideas, and reflections.',
    url: 'https://thestartofjourneys.wordpress.com/',
    label: 'Read my blog',
    icon: FolderGit2
  },
  {
    title: 'LinkedIn',
    description:
      'Connect with me professionally and follow my software development journey.',
    url: 'https://www.linkedin.com/in/ekta-srivastava-b65064277/',
    label: 'Connect with me',
    icon: FaLinkedin
  }
]

function SectionHeading ({ eyebrow, title, icon: Icon }) {
  return (
    <div className='section-heading'>
      <div className='section-icon'>
        <Icon size={18} />
      </div>
      <div>
        <span className='eyebrow'>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function Header () {
  return (
    <header className='topbar'>
      <a className='wordmark' href='#home'>
        <span className='mark'>EK</span>
        <span>
          Ekta Srivastava<small>Software Engineer</small>
        </span>
      </a>
      <nav>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
        {/* <a href='#hobbies'>Hobbies</a> */}
        <a className='contact-link' href='#contact'>
          Get in touch <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  )
}

function Hero () {
  return (
    <section className='hero' id='home'>
      <div className='hero-copy'>
        <div className='availability'>
          <span className='status-dot' /> FULL-STACK DEVELOPER · Lucknow, UP
        </div>
        <h1>
          Building thoughtful
          <br />
          <span>digital experiences.</span>
        </h1>
        <p className='hero-text'>
          I'm Ekta Srivastava, a software engineer focused on client-side
          solutions, JavaScript libraries, and reusable components. I care about
          clean code, useful tools, and making technology easier to understand.
        </p>
        <div className='hero-actions'>
          <a className='primary-btn' href='#experience'>
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className='text-btn' href='#contact'>
            Let's connect <span>↗</span>
          </a>
        </div>
        <div className='hero-stats'>
          <div>
            <strong>2.10+</strong>
            <span>Years building</span>
          </div>
          <div>
            <strong>4</strong>
            <span>Core skill levels</span>
          </div>
          <div>
            <strong>Open</strong>
            <span>Source contributor</span>
          </div>
        </div>
      </div>
      <div className='hero-art' aria-label='Abstract developer illustration'>
        <div className='art-orbit orbit-one' />
        <div className='art-orbit orbit-two' />
        <div className='art-card card-back'>
          <span className='mini-dot red' />
          <span className='mini-dot yellow' />
          <span className='mini-dot green' />
          <div className='code-lines'>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className='art-card card-front'>
          <div className='avatar'>EK</div>
          <span className='art-name'>Ekta Srivastava</span>
          <span className='art-role'>Software Engineer</span>
          <div className='art-divider' />
          <div className='code-row'>
            <b>const</b> problem_solver = <em>true</em>
          </div>
          <div className='code-row'>
            <b>skills</b>: [<em>React</em>, <em>JS</em>]
          </div>
          <div className='art-badge'>
            <Code2 size={15} /> Thoughtful by design
          </div>
        </div>
        <div className='floating-chip chip-react'>◈ React</div>
        <div className='floating-chip chip-js'>JS</div>
        <div className='floating-chip chip-bracket'>{'{ }'}</div>
        <div className='art-spark spark-a'>✳</div>
        <div className='art-spark spark-b'>✦</div>
      </div>
    </section>
  )
}

function About () {
  return (
    <section className='about section' id='about'>
      <SectionHeading
        eyebrow='A LITTLE ABOUT ME'
        title='Curious by nature. Problem solver by design.'
        icon={Code2}
      />
      <div className='about-grid'>
        <p className='about-lead'>
          I’m a full-stack developer based in Lucknow, Uttar Pradesh, with
          degrees in Bachelor of Vocational Studies in Software Development .
        </p>
        <div className='about-detail'>
          <p>
            My focus is on client-side solutions, JavaScript libraries, and
            reusable components. I enjoy untangling complex problems and turning
            them into practical, maintainable software.
          </p>
          <p>
            I’m also passionate about computing education and have launched
            computing programs at two schools over the past five years.
          </p>
          <div className='social-links'>
            <a
              href='https://www.linkedin.com/in/ekta-srivastava-b65064277/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a
              href='https://github.com/ekta-developer'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={16} /> GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills () {
  return (
    <section className='skills-section section' id='skills'>
      <SectionHeading
        eyebrow='WHAT I BRING'
        title='Skills & expertise'
        icon={Code2}
      />
      <p className='section-intro'>
        A broad toolkit built through years of shipping software, leading teams,
        and exploring new technologies.
      </p>
      <div className='skills-grid'>
        {skills.map(group => (
          <article className='skill-card' key={group.level}>
            <div className='skill-top'>
              <div className='skill-level'>
                {group.level}
                <span>/5</span>
              </div>
              <span className='skill-label'>{group.label}</span>
            </div>
            <div className='skill-meter'>
              {[1, 2, 3, 4, 5].map(n => (
                <i key={n} className={n <= group.level ? 'filled' : ''} />
              ))}
            </div>
            <div className='skill-items'>
              {group.items.map(([name, detail]) => (
                <div className='skill-item' key={name}>
                  <strong>{name}</strong>
                  {detail && <span>{detail}</span>}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience () {
  return (
    <section className='experience section' id='experience'>
      <SectionHeading
        eyebrow='THE JOURNEY'
        title='Selected experience'
        icon={BriefcaseBusiness}
      />
      <p className='section-intro'>
        A mix of consulting, education, freelance work, and research — all
        connected by a love of solving problems.
      </p>
      <div className='timeline'>
        {experience.map((job, index) => {
          const Icon = job.icon
          return (
            <article className='experience-item' key={job.role}>
              <div className='timeline-marker'>
                <Icon size={17} />
              </div>
              <div className='experience-card'>
                <div className='job-top'>
                  <div>
                    <h3>{job.role}</h3>
                    <span className='company'>{job.company}</span>
                  </div>
                  <span className='years'>{job.years}</span>
                </div>
                <p>{job.intro}</p>
                {job.bullets.length > 0 && (
                  <ul>
                    {job.bullets.map(b => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Projects () {
  return (
    <section className='projects section' id='projects'>
      <SectionHeading
        eyebrow="THINGS I'VE MADE"
        title='Selected projects'
        icon={FolderGit2}
      />
      <p className='section-intro'>
        A few projects and tools from my work across open source, education, and
        software development.
      </p>
      <div className='projects-grid'>
        {projects.map((p, i) => (
          <a
            className='project-card'
            href={p.url}
            target='_blank'
            rel='noreferrer'
            key={p.name}
          >
            <div className={`project-visual visual-${i + 1}`}>
              <div className='project-window'>
                <div className='window-dots'>
                  <i />
                  <i />
                  <i />
                </div>
                <span>
                  {
                    [
                      '&lt;html2pdf /&gt;',
                      'document.pdf',
                      'allotment.app',
                      'onphysics'
                    ][i]
                  }
                </span>
                <div className='visual-mark'>{['PDF', '↗', '▦', '∑'][i]}</div>
              </div>
            </div>
            <div className='project-content'>
              <span className='project-tag'>{p.tag}</span>
              <div className='project-title'>
                <h3>{p.name}</h3>
                <ArrowUpRight size={17} />
              </div>
              <p>{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact () {
  return (
    <section className='contact-section' id='contact'>
      <div className='contact-glow' />
      <div className='contact-content'>
        <span className='eyebrow'>HAVE A GOOD CHALLENGE?</span>
        <h2>
          Let's build something
          <br />
          <span>meaningful together.</span>
        </h2>
        <p>
          Interested in working together, talking JavaScript, or sharing ideas
          about computing education? I'd love to hear from you.
        </p>
        <a className='primary-btn' href='mailto:eekta.srivastava2000@gmail.com'>
          <Mail size={17} /> Get in touch <ArrowUpRight size={16} />
        </a>
        <div className='contact-location'>
          <MapPin size={15} /> Lucknow, Uttar Pradesh, India
        </div>
      </div>
      <div className='contact-decoration'>
        <div className='deco-circle' />
        <div className='deco-square' />
        <span>
          let's
          <br />
          make it
          <br />
          <b>work.</b>
        </span>
      </div>
    </section>
  )
}

function Hobbies () {
  const hobbies = [
    {
      title: 'Coding & Development',
      description:
        'I enjoy solving problems, building web applications, exploring new technologies, and improving my development skills.',
      url: 'https://github.com/ekta-developer',
      label: 'Explore my projects',
      icon: FaCode
    },
    {
      title: 'YouTube — ShareNNcare',
      description:
        'Explore my YouTube channel and the content I share through ShareNNcare.',
      url: 'https://www.youtube.com/@shareNNcare',
      label: 'Visit YouTube',
      icon: FaYoutube
    },
    {
      title: 'WordPress — The Start of Journeys',
      description:
        'Visit my blog for personal writing, ideas, and reflections.',
      url: 'https://thestartofjourneys.wordpress.com/',
      label: 'Read my blog',
      icon: FaWordpress
    },
    {
      title: 'LinkedIn',
      description:
        'Connect with me professionally and follow my software development journey.',
      url: 'https://www.linkedin.com/in/ekta-srivastava-b65064277/',
      label: 'Connect with me',
      icon: FaLinkedin
    }
  ]

  return (
    <section className='hobbies-section section' id='hobbies'>
      <SectionHeading
        eyebrow='BEYOND CODING'
        title='My interests & hobbies'
        icon={FaCode}
      />

      <p className='section-intro'>
        A little more about what I enjoy creating, exploring, and sharing beyond
        my everyday development work.
      </p>

      <div className='hobbies-grid'>
        {hobbies.map(hobby => {
          const Icon = hobby.icon

          return (
            <a
              className='hobby-card'
              href={hobby.url}
              target='_blank'
              rel='noopener noreferrer'
              key={hobby.title}
            >
              <div className='hobby-icon'>
                <Icon size={23} />
              </div>

              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>

              <span className='hobby-visit'>
                {hobby.label} <FaExternalLinkAlt size={15} />
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

function Footer () {
  return (
    <footer className='footer'>
      <a className='wordmark' href='#home'>
        <span className='mark'>EK</span>
        <span>
          Ekta Srivastava<small>Software Engineer</small>
        </span>
      </a>

      <span className='footer-note'>
        Designed with curiosity. Built with care.
      </span>

      <div className='footer-social'>
        <a
          href='https://github.com/ekta-developer'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
        >
          <FaGithub size={22} />
        </a>

        <a
          href='https://www.linkedin.com/in/ekta-srivastava-b65064277/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href='mailto:eekta.srivastava2000@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Email'
        >
          <Mail size={18} />
        </a>
      </div>

      <span className='copyright'>
        © {new Date().getFullYear()} Ekta Srivastava
      </span>
    </footer>
  )
}

function App () {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className='page-wrap'>
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
        <Contact />
        <Hobbies />
      </main>
      <Footer />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
