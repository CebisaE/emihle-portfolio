import { useEffect, useState } from 'react'
import './App.css'

const labs = [
  {
    title: 'A+ IT Support Lab',
    category: 'WINDOWS & LINUX SUPPORT',
    description:
      'Investigating system performance and documenting a clear way forward.',
    tasks: [
      'Used Windows diagnostic tools to record system resources and performance.',
      'Documented troubleshooting steps and upgrade recommendations.',
      'Practised Linux directories, package installation and SSH service checks.',
    ],
    tools: 'Windows · Ubuntu · Task Manager · systemctl',
    repository: 'A-plus-it-support-lab',
  },
  {
    title: 'Campus Networking Lab',
    category: 'NETWORKING',
    description:
      'Segmenting a simulated campus network and testing connectivity.',
    tasks: [
      'Configured Staff and Student VLANs and assigned switch ports.',
      'Planned IPv4 subnets and documented DHCP scope requirements.',
      'Built a routed topology and recorded ping and traceroute tests.',
    ],
    tools: 'Cisco Packet Tracer · VLANs · IPv4 · Routing',
    repository: 'networking-campus-lab',
  },
  {
    title: 'Penetration Testing Lab',
    category: 'AUTHORISED SECURITY TESTING',
    description:
      'Mapping an attack surface in an isolated training environment.',
    tasks: [
      'Connected Kali Linux, Metasploitable and DVWA in a virtual lab.',
      'Used Nmap to investigate hosts, ports and service versions.',
      'Documented application security demonstrations and mitigations.',
    ],
    tools: 'VirtualBox · Kali Linux · Nmap · DVWA',
    repository: 'penetration-testing-lab',
  },
  {
    title: 'Windows Security Lab',
    category: 'ENDPOINT SECURITY',
    description:
      'Hardening a Windows workstation and checking access controls.',
    tasks: [
      'Configured local accounts, groups and security policies.',
      'Tested folder permissions using different role accounts.',
      'Analysed Wireshark captures and documented firewall tests.',
    ],
    tools: 'Windows · Local policies · Firewall · Wireshark',
    repository: 'windows-security-lab',
  },
  {
    title: 'Linux Desktop Fundamentals',
    category: 'LINUX',
    description:
      'Getting hands-on with Ubuntu and everyday command-line work.',
    tasks: [
      'Configured an Ubuntu virtual machine and recorded system information.',
      'Practised terminal commands, file operations and vi editing.',
      'Completed desktop tasks using LibreOffice and GIMP.',
    ],
    tools: 'Ubuntu · VirtualBox · Bash · vi · GIMP',
    repository: 'linux-desktop-fundamentals',
  },
]

const projects = [
  {
    title: 'Accents',
    type: 'web',
    label: 'WORDPRESS DEVELOPMENT',
    description:
      'Contributed to website development using WordPress.',
    tools: 'WordPress · Development',
    url: 'https://accents.co.za/',
    image: 'accents.png',
    mark: 'Aa',
  },
  {
    title: 'Lifechoices',
    type: 'web',
    label: 'WORDPRESS DEVELOPMENT',
    description:
      'Contributed to the development of the Lifechoices website.',
    tools: 'WordPress · Development',
    url: 'https://lifechoices.co.za/',
    image: 'lifechoices.png',
    mark: 'LC',
  },
  {
    title: 'LC Studio',
    type: 'web',
    label: 'WORDPRESS DEVELOPMENT',
    description:
      'Contributed to the development of the LC Studio website.',
    tools: 'WordPress · Development',
    url: 'https://lcstudio.co.za/',
    image: 'lcstudio.png',
    mark: 'LC.',
  },
  {
    title: 'Password Generator',
    type: 'web',
    label: 'PERSONAL WEB PROJECT',
    description:
      'An interactive password generation application.',
    tools: 'HTML · CSS · JavaScript',
    url: 'https://strong-password-generator1.netlify.app/',
    repository: 'password-generator',
    image: 'password.png',
    mark: '•••',
  },
  {
    title: 'Weather App',
    type: 'web',
    label: 'PERSONAL WEB PROJECT',
    description:
      'A weather application from my front-end development portfolio.',
    tools: 'HTML · CSS · JavaScript',
    url: 'https://emihle-shecodes-app.netlify.app/',
    repository: 'my-weather-app',
    image: 'weather.png',
    mark: '☀',
  },
  {
    title: 'Dictionary App',
    type: 'web',
    label: 'PERSONAL WEB PROJECT',
    description:
      'A React application for looking up words.',
    tools: 'React',
    repository: 'my-dictionary-app',
    image: 'dictionary.png',
    mark: 'abc',
  },
  {
    title: 'React Admin Dashboard',
    type: 'web',
    label: 'TUTORIAL-BASED PROJECT',
    description:
      'Built to practise React components and interface development.',
    tools: 'React · Interface development',
    url: 'https://react-admin-dashboard-01.netlify.app/',
    repository: 'react-admin-dashboard',
    image: 'dashboard.png',
    mark: '▦',
  },
  {
    title: 'World Clock',
    type: 'web',
    label: 'PERSONAL WEB PROJECT',
    description:
      'A web application displaying the time in different cities.',
    tools: 'HTML · CSS · JavaScript',
    repository: 'world-clock',
    image: 'world-clock.png',
    mark: '◷',
  },
  {
    title: 'LCS Wireframe',
    type: 'design',
    label: 'COLLABORATIVE DESIGN',
    description:
      'Participated in a team website wireframing project using Figma.',
    tools: 'Figma · Wireframing · Team project',
    url: 'https://www.figma.com/file/NQLmSAh0xwJfPlQE4UW3IA/LCS-Wireframe-Team-2?node-id=419%3A2',
    image: 'figma.png',
    mark: '↗',
  },
]

const github = 'https://github.com/CebisaE'

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

function ProjectVisual({ project }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`project-visual visual-${project.type}`}>
      {project.image && !failed ? (
        <img
          src={`/images/${project.image}`}
          alt={`${project.title} project preview`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="visual-placeholder" aria-hidden="true">
          <span>{project.mark}</span>
          <small>{project.title}</small>
        </div>
      )}
    </div>
  )
}

function AnimatedTerminal() {
  const [text, setText] = useState('')

  useEffect(() => {
    const steps = [
      { text: '$ whoami', type: true },
      { text: '\nEmihle Cebisa\n', type: false },
      { text: '$ focus', type: true },
      { text: '\nsystems / support / security\n', type: false },
      { text: '$ status', type: true },
      { text: '\nbuilding. testing. learning.', type: false },
    ]

    let cancelled = false
    let timer
    let releaseWait

    const wait = (milliseconds) =>
      new Promise((resolve) => {
        releaseWait = resolve
        timer = window.setTimeout(resolve, milliseconds)
      })

    async function play() {
      while (!cancelled) {
        let output = ''
        setText('')

        for (const step of steps) {
          if (cancelled) return

          if (step.type) {
            for (const character of step.text) {
              await wait(90)
              if (cancelled) return

              output += character
              setText(output)
            }

            await wait(450)
          } else {
            await wait(300)
            if (cancelled) return

            output += step.text
            setText(output)
          }
        }

        await wait(3500)
      }
    }

    const preference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (preference.matches) {
      setText(steps.map((step) => step.text).join(''))
    } else {
      play()
    }

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      releaseWait?.()
    }
  }, [])

  return (
    <div className="terminal">
      <div className="terminal-top">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>learning in progress</span>
      </div>

      <pre className="terminal-output" aria-hidden="true">
        {text}
        <span className="typing-cursor">▌</span>
      </pre>

      <span className="sr-only">
        Emihle Cebisa. Focus: systems, support and security.
        Building, testing and learning.
      </span>
    </div>
  )
}

function App() {
  const [filter, setFilter] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleProjects = projects.filter(
    (project) => filter === 'all' || project.type === filter,
  )

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header id="home">
  <a
    className="brand"
    href="#home"
    onClick={() => setMenuOpen(false)}
  >
    EC <span>Emihle Cebisa</span>
  </a>

  <button
    className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
    type="button"
    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
    aria-expanded={menuOpen}
    aria-controls="main-navigation"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    <span />
    <span />
    <span />
  </button>

  <nav
    id="main-navigation"
    className={menuOpen ? 'mobile-open' : ''}
    aria-label="Main navigation"
    onClick={(event) => {
      if (event.target.closest('a')) {
        setMenuOpen(false)
      }
    }}
    onKeyDown={(event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        event.currentTarget
          .closest('header')
          .querySelector('.menu-toggle')
          ?.focus()
      }
    }}
  >
    <a href="#labs">IT & Security</a>
    <a href="#work">Web & Design</a>
    <a href="#about">About</a>
    <a className="nav-contact" href="#contact">
      Let’s connect ↗
    </a>
  </nav>
</header>

      <main id="main">
        <section className="hero">
          <div>
            <div className="eyebrow">
              <i aria-hidden="true" /> CAPE TOWN, SOUTH AFRICA
            </div>

            <h1>
              Curious by nature.<br />
              <em>Technical</em><br />
              by practice.
            </h1>

            <p className="hero-copy">
              I’m Emihle. A cybersecurity student with a web development
              background and a hands-on approach to building,
              troubleshooting and learning.
            </p>

            <div className="actions">
              <a className="button dark" href="#labs">
                Explore my work ↓
              </a>
              <ExternalLink className="button outline" href={github}>
                Explore GitHub ↗
              </ExternalLink>
            </div>

            <p className="hero-caption">
              CYBERSECURITY & IT <span>+</span> WEB DEVELOPMENT & DESIGN
            </p>
          </div>

          <aside className="hero-art" aria-label="My areas of practice">
            <div className="art-top">
              <span>THE PRACTICE LAB</span>
              <span>EC / 01</span>
            </div>

            <div className="orbit">
              <div className="orb-core">
                ec <span>build. test. learn.</span>
              </div>
              <span className="orbit-tag tag-linux">Linux</span>
              <span className="orbit-tag tag-networks">Networks</span>
              <span className="orbit-tag tag-security">Security</span>
              <span className="orbit-tag tag-web">Web</span>
            </div>

          <AnimatedTerminal />  

            <div className="art-bottom">
              PRACTICAL THINKING. CLEAR DOCUMENTATION.
            </div>
          </aside>
        </section>

        <div className="skills-strip">
          {[
            'Windows & Linux', 'IT Support', 'VirtualBox',
            'Networking', 'WordPress', 'React',
          ].map((skill) => <span key={skill}>{skill}</span>)}
        </div>

        <section id="labs" className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">01 / CYBERSECURITY & IT</p>
              <h2>From the lab.<br /><em>Into practice.</em></h2>
            </div>
            <p>
              Completed coursework showing the setup, the investigation
              and the reasoning behind each task.
            </p>
          </div>

          <div className="lab-list">
            {labs.map((lab, index) => (
              <article className="lab-case" key={lab.repository}>
                <div className="lab-heading">
                  <span className="lab-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="eyebrow">{lab.category}</p>
                    <h3>{lab.title}</h3>
                    <p className="lab-description">{lab.description}</p>
                  </div>
                </div>

                <ul className="lab-tasks">
                  {lab.tasks.map((task) => <li key={task}>{task}</li>)}
                </ul>

                <div className="lab-bottom">
                  <p className="tags">{lab.tools}</p>
                  <ExternalLink
                    className="text-link"
                    href={`${github}/${lab.repository}`}
                  >
                    Documentation & evidence ↗
                  </ExternalLink>
                </div>
              </article>
            ))}
          </div>

          <div className="learning-note">
            <div>
              <p className="eyebrow">BUILT THROUGH PRACTICE</p>
              <h3>Learning, testing and documenting.</h3>
              <p>
                Security testing was performed in authorised training
                environments. These projects demonstrate coursework
                and practical learning.
              </p>
            </div>
            <p className="certification-note">
              CompTIA-aligned coursework.<br />
              <strong>External certifications not yet earned.</strong>
            </p>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / WEB DEVELOPMENT & DESIGN</p>
              <h2>Things I’ve helped<br /><em>bring to life.</em></h2>
            </div>
            <p>
              WordPress development, personal applications and
              collaborative wireframing.
            </p>
          </div>

          <div className="filters" role="group" aria-label="Filter projects">
            {[
              ['all', 'All work'],
              ['web', 'Web development'],
              ['design', 'Design'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={filter === value ? 'active' : ''}
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="result-count" role="status">
            Showing {visibleProjects.length} projects
          </p>

          <div className="projects">
            {visibleProjects.map((project) => (
              <article className="project" key={project.title}>
                <ExternalLink
                  href={project.url || `${github}/${project.repository}`}
                  className="project-preview"
                >
                  <ProjectVisual project={project} />
                  <span className="preview-link">View project ↗</span>
                </ExternalLink>

                <div className="project-copy">
                  <small>{project.label}</small>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tools}</div>

                  {project.repository && (
                    <ExternalLink
                      className="text-link"
                      href={`${github}/${project.repository}`}
                    >
                      View source ↗
                    </ExternalLink>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="small-note">
            Linked websites may have changed since my contribution.
          </p>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="eyebrow">03 / THE PERSON BEHIND THE WORK</p>
            <h2>
              A developer’s curiosity.<br />
              A security mindset.<br />
              <em>Always learning.</em>
            </h2>
            <p>
              I’m Emihle Cebisa, based in Cape Town, South Africa.
              I’m a full-time student working towards a Higher Certificate
              in Information Systems (Cybersecurity).
            </p>
            <p>
              My portfolio connects practical IT and security coursework
              with my web development background. I enjoy understanding
              how systems work, solving problems and documenting what
              I learn.
            </p>
            <ExternalLink className="text-link" href={github}>
              Find me on GitHub ↗
            </ExternalLink>
          </div>

          <div className="timeline">
            <div>
              <small>CURRENT STUDIES</small>
              <h3>Information Systems (Cybersecurity)</h3>
              <p>
                Networking, operating systems, security analysis
                and penetration-testing coursework.
              </p>
            </div>
            <div>
              <small>PRACTICAL LEARNING</small>
              <h3>Five documented labs</h3>
              <p>
                IT support, networking, Linux desktop fundamentals,
                Windows security and authorised security testing.
              </p>
            </div>
            <div>
              <small>DEVELOPMENT & DESIGN</small>
              <h3>Building for the web</h3>
              <p>
                WordPress development, JavaScript applications,
                React projects and team wireframing in Figma.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">04 / NEXT CHAPTER</p>
          <h2>Let’s build<br /><em>what’s next.</em></h2>
          <p>
            Have an internship, junior IT opportunity or web project
            in mind? I’d love to hear from you.
          </p>

          <a className="email" href="mailto:emihlekcebisa@gmail.com">
            emihlekcebisa@gmail.com ↗
          </a>

          <div className="contact-links">
            <ExternalLink href={github}>GitHub ↗</ExternalLink>
            <a href="#work">Explore my work ↑</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Emihle Cebisa</span>
        <span>Cybersecurity & IT / Web & Design</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App