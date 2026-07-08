import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { profile, projects } from "@/data/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" }
];

export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <nav className="top-nav" aria-label="Main navigation">
          <p className="brand">{profile.name}</p>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hero-content">
          <h1>Geospatial and Technology Projects.</h1>
          <p>{profile.bio}</p>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              Explore Projects
            </a>
            <a href={profile.links.cv} className="button" target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </header>

      <div className="container">
        <Section id="about" title="About" subtitle={profile.location}>
          <div className="about-grid">
            <img
              src="/img/pic1_colourful_medium.png"
              alt="Portrait of Alin Zohari"
              className="portrait"
              width={520}
              height={520}
              loading="eager"
              decoding="async"
            />
            <div>
              <p>{profile.about}</p>
              <h3>Experience</h3>
              <ul>
                {profile.experience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3>Education</h3>
              <ul>
                {profile.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="projects" title="Selected Projects" subtitle="A curated set of geospatial and engineering case studies.">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Core tools and domains I work with.">
          <ul className="skills-grid">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact" subtitle="Open to collaborations, geospatial roles, and applied data projects.">
          <div className="contact-card">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>{profile.location}</p>
            <div className="socials">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.links.cv} target="_blank" rel="noreferrer">
                CV
              </a>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
