import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectCard from './components/ProjectCard';
import {
  FaPhp,
  FaJs,
  FaPython,
  FaCuttlefish,
  FaPlus,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaWordpress,
  FaHubspot,
  FaSquare,
} from 'react-icons/fa';
import {
  SiGoogle,
  SiNextdotjs,
  SiTailwindcss,
  SiAwslambda,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiSony,
  SiChartdotjs,
  SiWix,
  SiWoocommerce,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDatabricks,
} from 'react-icons/si';
import { DiSqllite } from 'react-icons/di';

interface Project {
  title: string;
  description: string;
  image?: string;
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const techProficiency: Record<string, number> = {
  gemini: 55,
  php: 95,
  javascript: 90,
  python: 60,
  c: 55,
  cplusplus: 55,
  html: 95,
  css: 90,
  laravel: 85,
  react: 85,
  nextjs: 70,
  tailwind: 90,
  bootstrap: 95,
  mysql: 90,
  postgresql: 50,
  access: 70,
  redis: 65,
  wordpress: 90,
  hubspot: 75,
  wix: 80,
  woocommerce: 75,
  chartjs: 55,
  smoothing: 60,
  photoshop: 90,
  premiere: 60,
  vegas: 75,
};

const TechIcon = ({ name }: { name: string }) => {
  const iconProps = { className: 'tech-icon' };

  switch (name) {
    case 'gemini':
      return <SiGoogle {...iconProps} />;
    case 'php':
      return <FaPhp {...iconProps} />;
    case 'javascript':
      return <FaJs {...iconProps} />;
    case 'python':
      return <FaPython {...iconProps} />;
    case 'c':
      return <FaCuttlefish {...iconProps} />;
    case 'cplusplus':
      return (
        <>
          <FaCuttlefish {...iconProps} />
          <FaPlus className="tech-icon-small" />
        </>
      );
    case 'html':
      return <FaHtml5 {...iconProps} />;
    case 'css':
      return <FaCss3Alt {...iconProps} />;
    case 'laravel':
      return <FaLaravel {...iconProps} />;
    case 'react':
      return <FaReact {...iconProps} />;
    case 'nextjs':
      return <SiNextdotjs {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'bootstrap':
      return <FaBootstrap {...iconProps} />;
    case 'mysql':
      return <SiMysql {...iconProps} />;
    case 'postgresql':
      return <SiPostgresql {...iconProps} />;
    case 'access':
      return <SiDatabricks {...iconProps} />;
    case 'redis':
      return <SiRedis {...iconProps} />;
    case 'wordpress':
      return <FaWordpress {...iconProps} />;
    case 'hubspot':
      return <FaHubspot {...iconProps} />;
    case 'wix':
      return <SiWix {...iconProps} />;
    case 'woocommerce':
      return <SiWoocommerce {...iconProps} />;
    case 'chartjs':
      return <SiChartdotjs {...iconProps} />;
    case 'smoothing':
      return <SiAwslambda {...iconProps} />;
    case 'photoshop':
      return <SiAdobephotoshop {...iconProps} />;
    case 'premiere':
      return <SiAdobepremierepro {...iconProps} />;
    case 'vegas':
      return <SiSony {...iconProps} />;
    case 'sql':
      return <DiSqllite {...iconProps} />;
    default:
      return <FaSquare {...iconProps} />;
  }
};

const TechItem = ({ name, displayName }: { name: string; displayName: string }) => {
  const proficiency = techProficiency[name] || 0;
  return (
    <div className="tech-item" style={{ ['--proficiency' as any]: `${proficiency}%` }}>
      <TechIcon name={name} />
      <span>{displayName}</span>
    </div>
  );
};

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      title: 'KotseAI',
      description: 'Free AI-powered car maintenance checklist for the Philippines.',
      image: '/images/kotseai.png',
      tech: ['NextJS', 'Supabase', 'Vercel', 'Tailwind CSS', 'Gemini'],
      demoUrl: 'https://kotseai.vercel.app/',
      githubUrl: 'https://github.com/zZJoennZz/kotseai',
    },
    {
      title: 'Records Management System with Audit Capabilities',
      description:
        'Developed a secure, hierarchical document management system for a banking consortium featuring complete chain-of-custody tracking across all storage locations and transactions.',
      image: '/images/erms.png',
      tech: ['ReactJS', 'Laravel 10', 'MySQL', 'JWT Auth', 'Tailwind CSS'],
      demoUrl: 'https://www.behance.net/gallery/232439837/Records-Management-System-with-Audit-Capabilities', //preview
      githubUrl: '', //confidential
    },
    {
      title: 'Secured Supply Management System',
      description:
        'Developed an internal supply chain solution for a bank to digitize inventory control while maintaining strict security protocols.',
      image: '/images/lbsi.png',
      tech: ['ReactJS', 'Laravel 10', 'MySQL', 'Tailwind CSS'],
      demoUrl: 'https://www.behance.net/gallery/232435069/Secured-Supply-Management-System', //preview
      githubUrl: 'https://github.com/zZJoennZz/eRMS-app', //confidential
    },
    {
      title: 'University Procurement System with Smart Inventory Forecasting',
      description:
        'Developed a secure university procurement system featuring role-based dashboards per campus/department, purchase workflow documentation, demand forecasting via custom single exponential smoothing, vendor management, and utilization analytics.',
      image: '/images/opis.png',
      tech: ['Laravel 9', 'PHP', 'MySQL', 'JavaScript/jQuery', 'Bootstrap'],
      demoUrl: 'https://www.behance.net/gallery/232429471/OPIS-Online-Procurement', //preview
      githubUrl: '', //confidential
    },
    {
      title: 'Cooperative Web App',
      description: 'Online membership and loan application platform for BSU Multi-Purpose Cooperative',
      image: '/images/systemOffline.png',
      tech: ['PHP', 'Laravel 10', 'JavaScript', 'MySQL', 'Bootstrap'],
      demoUrl: '', // cancelled
      githubUrl: '', // cancelled
    },
    {
      title: 'Inventory & Reporting System',
      description:
        'Developed a complete medication tracking system with real-time reporting for a medicine provider, built with server-side rendering for high-performance inventory management.',
      image: '/images/sell101.png',
      tech: ['Laravel 12', 'MySQL', 'Materialize CSS'],
      demoUrl: 'https://sell101.shift101.solutions/',
      githubUrl: 'https://github.com/zZJoennZz/sell101',
    },
    {
      title: 'Modern Client Management System',
      description: `Built a secure, scalable platform to streamline shift101's client interactions and visit tracking, replacing manual processes with digital solutions.`,
      image: '/images/inf101.png',
      tech: ['ReactJS', 'Vercel', 'MySQL', 'Laravel 9', 'Tailwind CSS'],
      demoUrl: 'https://inf101.vercel.app/', // Internal system
      githubUrl: '', // Private repository
    },
    {
      title: 'Brand & Technology-Focused Website Redesign',
      description: `Redesigned shift101's website to align with our core identity: "Technology Solutions Provider". The goal was to clearly communicate our dual expertise in I.T. Solutions and Wellness Technology while making services like myWeb, my1C, myBody, and myHeart instantly accessible.`,
      image: '/images/shift10123.png',
      tech: ['CSS', 'HTML', 'JavaScript'],
      demoUrl: 'https://www.behance.net/gallery/161150709/shift101-2023-Edition', // inactive
      githubUrl: '', // inactive
    },
    {
      title: 'Website Redesign and Modernizing User Experience with WordPress & Divi',
      description: `OGUSCA needed a complete website overhaul to replace their outdated Flash-based menu with a modern, responsive, and user-friendly design.`,
      image: '/images/ogusca.png',
      tech: ['CSS', 'HTML', 'JavaScript', 'WordPress', 'Divi'],
      demoUrl: 'hhttps://www.behance.net/gallery/136456887/OGUSCA-Web-Design-(WP)', // inactive
      githubUrl: '', // inactive
    },
    {
      title: 'Herbal Crescent - WordPress Redesign & E-Commerce Setup',
      description: `Herbal Crescent required a complete website redesign with a seamless transition to WordPress, including e-commerce functionality for their herbal product line.`,
      image: '/images/herbalcres.png',
      tech: ['CSS', 'HTML', 'JavaScript', 'WordPress', 'Divi', 'WooCommerce'],
      demoUrl: 'https://www.behance.net/gallery/136457063/Herbal-Crescent-Web-Design-(WP)', // inactive
      githubUrl: '', // inactive
    },
    {
      title: 'Accounting Software Port',
      description:
        'Led the modernization of legacy MS Access accounting software to web-based platform. Maintained data integrity while adding real-time collaboration features.',
      image: '/images/systemOffline.png',
      tech: ['PHP', 'JavaScript', 'MySQL', 'CodeIgniter'],
      demoUrl: '',
      githubUrl: '',
    },
  ];

  return (
    <>
      <Head>
        <title>Joenn S. Aquilino - Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer Portfolio specializing in React, Laravel, and modern web technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="container">
          <div className="header-content">
            <div className="core-info">
              <span className="core-label">CORE SYSTEM v6.14.96</span>
              <span className="status-online">● ONLINE</span>
            </div>

            <h1>
              <span className="name-prefix">// </span>
              JOENN S. AQUILINO
            </h1>

            <p className="subtitle">
              <span className="role-highlight">FULL STACK </span>
              DEVELOPER
              <span className="divider">|</span>
              REACT • LARAVEL • NEXT.JS
            </p>

            <div className="system-readout">
              <div className="readout-line">
                <span className="readout-label">SYSTEM STATUS</span>
                <span className="status-bar">
                  <span className="status-fill"></span>
                </span>
                <span className="readout-value">OPERATIONAL</span>
              </div>
              <div className="readout-line">
                <span className="readout-label">CONNECTION</span>
                <span className="status-bar">
                  <span className="status-fill" style={{ width: '100%', animationDelay: '0.3s' }}></span>
                </span>
                <span className="readout-value">AVAILABLE</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="about-section">
          <h2>OVERVIEW</h2>
          <p>
            I'm a software developer with experience building a DBMS application. I currently work as a full stack developer using WordPress and
            various web frameworks/libraries, and also serve as a technical virtual assistant handling content management, backend development, and
            workflow automation (basic Zapier, email drips). My freelance side projects range from small, simple applications to full-scale software
            solutions for company departments. I'm a fast learner who can quickly adapt to different situations.
          </p>
        </section>

        <section className="skills-section" id="tech">
          <h2>TECH STACK</h2>
          <div className="skills-showcase">
            <div className="skill-category">
              <h3>⚡ Core Languages</h3>
              <div className="tech-items">
                <TechItem name="php" displayName="PHP" />
                <TechItem name="javascript" displayName="JavaScript" />
                <TechItem name="python" displayName="Python" />
                <TechItem name="cplusplus" displayName="C/C++" />
                <TechItem name="html" displayName="HTML5" />
                <TechItem name="css" displayName="CSS3" />
              </div>
            </div>

            <div className="skill-category">
              <h3>🚀 Frameworks</h3>
              <div className="tech-items">
                <TechItem name="laravel" displayName="Laravel" />
                <TechItem name="react" displayName="ReactJS" />
                <TechItem name="nextjs" displayName="NextJS" />
                <TechItem name="tailwind" displayName="Tailwind CSS" />
                <TechItem name="bootstrap" displayName="Bootstrap" />
              </div>
            </div>

            <div className="skill-category">
              <h3>🌐 CMS & Platforms</h3>
              <div className="tech-items">
                <TechItem name="wordpress" displayName="WordPress" />
                <TechItem name="hubspot" displayName="HubSpot" />
                <TechItem name="wix" displayName="Wix" />
                <TechItem name="woocommerce" displayName="WooCommerce" />
              </div>
            </div>

            <div className="skill-category">
              <h3>💾 Data Layer</h3>
              <div className="tech-items">
                <TechItem name="mysql" displayName="MySQL" />
                <TechItem name="postgresql" displayName="postgresql" />
                <TechItem name="access" displayName="MS Access" />
              </div>
            </div>

            <div className="skill-category">
              <h3>📊 LLMs, Analytics & Algorithms</h3>
              <div className="tech-items">
                <TechItem name="gemini" displayName="Gemini" />
                <TechItem name="chartjs" displayName="ChartJS" />
                <TechItem name="smoothing" displayName="Simple Exp. Smoothing" />
              </div>
            </div>

            <div className="skill-category">
              <h3>🎨 Creative Tools</h3>
              <div className="tech-items">
                <TechItem name="photoshop" displayName="Photoshop" />
                <TechItem name="premiere" displayName="Premiere Pro" />
                <TechItem name="vegas" displayName="SONY Vegas" />
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="portfolio">
          <h2>PORTFOLIO</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2>PROFESSIONAL TIMELINE</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Full Stack Developer</h3>
              <p className="company">shift101 Solutions</p>
              <p className="date">Jun 2020 - Present</p>

              <div style={{ paddingLeft: '1rem' }}>
                <ul>
                  <li>Designing the main website for the year 2023.</li>
                  <li>Assisting with graphics and video editing for the Skills Camps.</li>
                  <li>Developed small applications for Skills Camp using ReactJS and vanilla PHP for the backend.</li>
                  <li>Developed an information management system for the company using ReactJS and Laravel Framework.</li>
                  <li> Developing and designing websites for different clients using WordPress, Divi, etc.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <h3>Technical Virtual Assistant</h3>
              <p className="company">Carmichael Psychology PLLC</p>
              <p className="date">May 2017 - Present</p>
              <div style={{ paddingLeft: '1rem' }}>
                <ul>
                  <li>Day-to-day administrative tasks of the practice.</li>
                  <li>Setting up and troubleshooting issues in different platforms we will be using.</li>
                  <li>Managing content and maintaining the website using Wix, HubSpot and WordPress (with WooCommerce).</li>
                  <li>Adding new custom features to the website if needed.</li>
                  <li>Managing multiple accounts in QuickBooks for bookkeeping.</li>
                  <li>Preparing multiple spreadsheets and reports.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <h3>Freelance Full Stack Developer</h3>
              <p className="company">Freelance</p>
              <p className="date">Aug 2023 - Present</p>
              <div style={{ paddingLeft: '1rem' }}>
                <ul>
                  <li>Developed an inventory management system for a national bank using ReactJS and Laravel 10.</li>
                  <li>Built a specialized records management system for a national bank using ReactJS and Laravel 10.</li>
                  <li>Designed and implemented the front-end of a restaurant website with e-commerce functionality using Next.js.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <h3>Full Stack Web Developer</h3>
              <p className="company">Bulacan State University</p>
              <p className="date">Oct 2022 - Apr 2023</p>
              <div style={{ paddingLeft: '1rem' }}>
                <ul>
                  <li>
                    Developed the web app for the procurement and supply office for their procurement process and inventory tracking of the procured
                    items using Laravel 9, PHP, JavaScript and MySQL.
                  </li>
                  <li>Applied the Simple Exponential Smoothing algorithm for item-utilization forecasting.</li>
                  <li>Led a team of three by assigning development tasks.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <h3>Web Developer</h3>
              <p className="company">InsightClouds LLC.</p>
              <p className="date">Apr 2016 - Mar 2019</p>
              <div style={{ paddingLeft: '1rem' }}>
                <ul>
                  <li>Lead the development of the port of an accounting software.</li>
                  <li>Maintained the MS Access DBMS accounting software.</li>
                  <li>Developed custom modules for each clients' requests.</li>
                  <li>Helped clients' technical issues with the software.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>ESTABLISH CONNECTION</h2>
          <p>Currently accepting new missions and collaboration opportunities. Available for freelance projects and full-time positions.</p>
          <div className="contact-links">
            <a href="mailto:joennsa@gmail.com?subject=Incoming%20transmission%3A%20Project%20inquiry" className="contact-link primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              SEND TRANSMISSION
            </a>
            <a href="https://linkedin.com/in/joennaquilino/" target="_blank" rel="noopener noreferrer" className="contact-link secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              NETWORK NODE
            </a>
            {/* <a href="tel:+639290225464" className="contact-link secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              DIRECT LINE
            </a> */}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 JOENN S. AQUILINO | SYSTEM.LOG // All protocols active</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>San Rafael, Bulacan, Philippines</p>
      </footer>
    </>
  );
};

export default Home;
