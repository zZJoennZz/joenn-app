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
  SiFastapi,
  SiTypescript,
  SiSquarespace,
  SiZapier,
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
  gemini: 70,
  php: 95,
  javascript: 90,
  typescript: 75,
  python: 60,
  c: 55,
  cplusplus: 55,
  html: 95,
  css: 90,
  laravel: 85,
  react: 85,
  nextjs: 70,
  fastapi: 65,
  tailwind: 90,
  bootstrap: 95,
  mysql: 90,
  postgresql: 50,
  pgvector: 50,
  access: 70,
  redis: 65,
  wordpress: 90,
  hubspot: 75,
  wix: 80,
  squarespace: 75,
  woocommerce: 75,
  chartjs: 55,
  smoothing: 60,
  zapier: 80,
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
    case 'typescript':
      return <SiTypescript {...iconProps} />;
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
    case 'fastapi':
      return <SiFastapi {...iconProps} />;
    case 'tailwind':
      return <SiTailwindcss {...iconProps} />;
    case 'bootstrap':
      return <FaBootstrap {...iconProps} />;
    case 'mysql':
      return <SiMysql {...iconProps} />;
    case 'postgresql':
      return <SiPostgresql {...iconProps} />;
    case 'pgvector':
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
    case 'squarespace':
      return <SiSquarespace {...iconProps} />;
    case 'woocommerce':
      return <SiWoocommerce {...iconProps} />;
    case 'chartjs':
      return <SiChartdotjs {...iconProps} />;
    case 'smoothing':
      return <SiAwslambda {...iconProps} />;
    case 'zapier':
      return <SiZapier {...iconProps} />;
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
  return (
    <div className="tech-item">
      <TechIcon name={name} />
      <span>{displayName}</span>
    </div>
  );
};

const Home: NextPage = () => {
  const projects: Project[] = [
    {
      title: 'DepoCo - Medical Malpractice AI Assistant',
      description: 'Real-time Retrieval-Augmented Generation system that analyzes testimony against medical records to detect contradictions. Uses vector search with Supabase PGVector, Gemini embeddings, and FastAPI.',
      image: '/images/depoco.png',
      tech: ['NextJS', 'FastAPI', 'Supabase', 'PGVector', 'Gemini', 'Tailwind CSS'],
      demoUrl: '',
      githubUrl: 'https://github.com/zZJoennZz/depoco',
    },
    {
      title: 'KotseAI',
      description: 'AI-powered car maintenance checklist web app tailored for Philippine vehicles. Uses Google Gemini to generate personalized PMS recommendations and relevant DIY tutorials.',
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
      demoUrl: 'https://www.behance.net/gallery/232439837/Records-Management-System-with-Audit-Capabilities',
      githubUrl: '',
    },
    {
      title: 'Secured Supply Management System',
      description:
        'Developed an internal supply chain solution for a bank to digitize inventory control while maintaining strict security protocols.',
      image: '/images/lbsi.png',
      tech: ['ReactJS', 'Laravel 10', 'MySQL', 'Tailwind CSS'],
      demoUrl: 'https://www.behance.net/gallery/232435069/Secured-Supply-Management-System',
      githubUrl: '',
    },
    {
      title: 'University Procurement System with Smart Inventory Forecasting',
      description:
        'Developed a secure university procurement system featuring role-based dashboards per campus/department, purchase workflow documentation, demand forecasting via custom single exponential smoothing, vendor management, and utilization analytics.',
      image: '/images/opis.png',
      tech: ['Laravel 9', 'PHP', 'MySQL', 'JavaScript/jQuery', 'Bootstrap'],
      demoUrl: 'https://www.behance.net/gallery/232429471/OPIS-Online-Procurement',
      githubUrl: '',
    },
    {
      title: 'Amici Latinae - WordPress Redesign & Optimization',
      description: 'Redesigned and optimized Amici Latinae\'s website for improved performance, user experience, and SEO. Implemented a modern design using Elementor and Tailwind CSS.',
      image: '/images/amici.png',
      tech: ['WordPress', 'PHP', 'Elementor', 'Tailwind CSS'],
      demoUrl: 'https://amicilatinae.com/',
      githubUrl: '',
    },
    {
      title: 'Sunshine Chess - AstroJS & Tailwind CSS Website Redesign',
      description: 'Redesigned and optimized the Sunshine Chess website for improved performance, user experience, and SEO. Implemented a modern design using AstroJS and Tailwind CSS.',
      image: '/images/sunshine.png',
      tech: ['AstroJS', 'Tailwind CSS'],
      demoUrl: 'https://www.sunshinechess.com/',
      githubUrl: '',
    },
    {
      title: 'Modern Client Management System',
      description: `Built a secure, scalable platform to streamline shift101's client interactions and visit tracking, replacing manual processes with digital solutions.`,
      image: '/images/inf101.png',
      tech: ['ReactJS', 'Vercel', 'MySQL', 'Laravel 9', 'Tailwind CSS'],
      demoUrl: 'https://inf101.vercel.app/',
      githubUrl: '',
    },
    {
      title: 'Brand & Technology-Focused Website Redesign',
      description: `Redesigned shift101's website to align with our core identity: "Technology Solutions Provider". The goal was to clearly communicate our dual expertise in I.T. Solutions and Wellness Technology while making services like myWeb, my1C, myBody, and myHeart instantly accessible.`,
      image: '/images/shift10123.png',
      tech: ['CSS', 'HTML', 'JavaScript'],
      demoUrl: 'https://www.behance.net/gallery/161150709/shift101-2023-Edition',
      githubUrl: '',
    },
    {
      title: 'Website Redesign and Modernizing User Experience with WordPress & Divi',
      description: `OGUSCA needed a complete website overhaul to replace their outdated Flash-based menu with a modern, responsive, and user-friendly design.`,
      image: '/images/ogusca.png',
      tech: ['CSS', 'HTML', 'JavaScript', 'WordPress', 'Divi'],
      demoUrl: 'https://www.behance.net/gallery/136456887/OGUSCA-Web-Design-(WP)',
      githubUrl: '',
    },
    {
      title: 'Herbal Crescent - WordPress Redesign & E-Commerce Setup',
      description: `Herbal Crescent required a complete website redesign with a seamless transition to WordPress, including e-commerce functionality for their herbal product line.`,
      image: '/images/herbalcres.png',
      tech: ['CSS', 'HTML', 'JavaScript', 'WordPress', 'Divi', 'WooCommerce'],
      demoUrl: 'https://www.behance.net/gallery/136457063/Herbal-Crescent-Web-Design-(WP)',
      githubUrl: '',
    }
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <header>
        <div className="container">
          <div className="header-content">
            <div className="core-info">
              <span className="status-online">Available for work</span>
              <span className="divider-dot">·</span>
              <a href="mailto:joennsa@gmail.com" className="contact-link-inline">joennsa@gmail.com</a>
              <span className="divider-dot">·</span>
              <a href="tel:+639290225464" className="contact-link-inline">+63 929 022 5464</a>
            </div>

            <h1>
              <span className="name-prefix">//</span>
              Joenn S. Aquilino
            </h1>

            <p className="subtitle">
              <span className="role-highlight">Full Stack</span> Web Developer
              <span className="divider">|</span>
              React · Laravel · Next.js · AI/LLM
            </p>

            <div className="system-readout">
              <div className="readout-line">
                <span className="readout-label">Location</span>
                <span className="readout-value">San Rafael, Bulacan, Philippines</span>
              </div>
              <div className="readout-line">
                <span className="readout-label">Focus</span>
                <span className="readout-value">Web Applications · AI Tools · CMS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="about-section">
          <h2>About</h2>
          <p>
            Full Stack Web Developer experienced building business systems, custom web applications, and AI-enabled tools using Laravel, React, and Next.js. Skilled in backend architecture to responsive front-end design, with experience leading small teams and delivering practical software that improves day-to-day operations. Seeking a role building scalable business applications.
          </p>
        </section>

        <section className="skills-section" id="tech">
          <h2>Technical Skills</h2>
          <div className="skills-showcase">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="tech-items">
                <TechItem name="php" displayName="PHP" />
                <TechItem name="javascript" displayName="JavaScript" />
                <TechItem name="typescript" displayName="TypeScript" />
                <TechItem name="python" displayName="Python" />
                <TechItem name="cplusplus" displayName="C/C++" />
                <TechItem name="html" displayName="HTML5" />
                <TechItem name="css" displayName="CSS3" />
              </div>
            </div>

            <div className="skill-category">
              <h3>Frameworks & Libraries</h3>
              <div className="tech-items">
                <TechItem name="laravel" displayName="Laravel" />
                <TechItem name="react" displayName="ReactJS" />
                <TechItem name="nextjs" displayName="Next.js" />
                <TechItem name="tailwind" displayName="Tailwind CSS" />
                <TechItem name="bootstrap" displayName="Bootstrap" />
              </div>
            </div>

            <div className="skill-category">
              <h3>CMS & Platforms</h3>
              <div className="tech-items">
                <TechItem name="wordpress" displayName="WordPress" />
                <TechItem name="hubspot" displayName="HubSpot" />
                <TechItem name="wix" displayName="Wix" />
                <TechItem name="squarespace" displayName="Squarespace" />
                <TechItem name="woocommerce" displayName="WooCommerce" />
              </div>
            </div>

            <div className="skill-category">
              <h3>Data Layer</h3>
              <div className="tech-items">
                <TechItem name="mysql" displayName="MySQL" />
                <TechItem name="postgresql" displayName="PostgreSQL" />
                <TechItem name="pgvector" displayName="PGVector" />
                <TechItem name="access" displayName="MS Access" />
              </div>
            </div>

            <div className="skill-category">
              <h3>AI, Analytics & Automation</h3>
              <div className="tech-items">
                <TechItem name="gemini" displayName="Google Gemini" />
                <TechItem name="zapier" displayName="Zapier" />
                <TechItem name="chartjs" displayName="ChartJS" />
                <TechItem name="smoothing" displayName="Exp. Smoothing" />
              </div>
            </div>

            <div className="skill-category">
              <h3>Creative Tools</h3>
              <div className="tech-items">
                <TechItem name="photoshop" displayName="Photoshop" />
                <TechItem name="premiere" displayName="Premiere Pro" />
                <TechItem name="vegas" displayName="SONY Vegas" />
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="portfolio">
          <h2>Selected Work</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Web Solutions Developer (Contractor)</h3>
              <p className="company">Selph Marketing</p>
              <p className="date">January 2026 — Present</p>
              <ul>
                <li>Developed custom WordPress themes from scratch with native custom post types, user roles, and tailored functionality without relying on plugins.</li>
                <li>Built and deployed websites using WordPress, Next.js, Tailwind CSS, Wix, and Squarespace.</li>
                <li>Led website migrations, hosting transfers, DNS configuration, SSL setup, and production deployments.</li>
                <li>Performed technical SEO audits and implemented improvements to enhance website performance and search visibility.</li>
                <li>Troubleshot production issues across hosting, domains, and deployments.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Systems Administrator</h3>
              <p className="company">Carmichael Psychology PLLC</p>
              <p className="date">May 2017 — January 2026</p>
              <ul>
                <li>Managed web servers, DNS settings, and performed website troubleshooting for a mental health practice.</li>
                <li>Led platform migrations from WordPress to HubSpot, and later to Wix.</li>
                <li>Built automated workflows using Zapier and custom scripts, reducing administrative workload by ~10 hours per week.</li>
                <li>Handled user account management, backups, and technical operations across multiple platforms.</li>
                <li>Managed multiple accounts in QuickBooks for bookkeeping and prepared spreadsheets and reports.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Full Stack Developer</h3>
              <p className="company">shift101 Solutions</p>
              <p className="date">June 2020 — Present</p>
              <ul>
                <li>Designed the main website for the year 2023.</li>
                <li>Assisted with graphics and video editing for the Skills Camps.</li>
                <li>Developed small applications for Skills Camp using ReactJS and vanilla PHP for the backend.</li>
                <li>Developed an information management system for the company using ReactJS and Laravel Framework.</li>
                <li>Developed and designed websites for different clients using WordPress, Divi, etc.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Lead Developer (Project-Based)</h3>
              <p className="company">Bulacan State University</p>
              <p className="date">October 2022 — April 2023</p>
              <ul>
                <li>Led a 3-person team to develop a procurement and inventory system that reduced manual forecast processing from 3 days to 4 hours using exponential smoothing demand forecasting.</li>
                <li>Developed the web app for the procurement and supply office for their procurement process and inventory tracking of the procured items using Laravel 9, PHP, JavaScript and MySQL.</li>
                <li>Applied the Simple Exponential Smoothing algorithm for item-utilization forecasting.</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Web Developer</h3>
              <p className="company">InsightClouds LLC.</p>
              <p className="date">April 2016 — March 2019</p>
              <ul>
                <li>Led the development of the port of an accounting software.</li>
                <li>Maintained the MS Access DBMS accounting software.</li>
                <li>Developed custom modules for each clients' requests.</li>
                <li>Helped clients' technical issues with the software.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>Currently accepting new projects and collaboration opportunities. Available for freelance work and full-time positions.</p>
          <div className="contact-links">
            <a href="mailto:joennsa@gmail.com?subject=Project%20Inquiry" className="contact-link primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Send Email
            </a>
            <a href="https://linkedin.com/in/joennaquilino/" target="_blank" rel="noopener noreferrer" className="contact-link secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/zZJoennZz" target="_blank" rel="noopener noreferrer" className="contact-link secondary">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Joenn S. Aquilino — San Rafael, Bulacan, Philippines</p>
      </footer>
    </>
  );
};

export default Home;