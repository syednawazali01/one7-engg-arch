import { projects } from '../data/projects'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <span className="portfolio-category">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio