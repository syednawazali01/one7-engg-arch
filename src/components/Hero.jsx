import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1>One7 Engg & Arch</h1>
      <p>Reimagining architecture with innovative design and engineering solutions.</p>
      <div className="hero-actions">
        <Link className="btn-primary" to="/portfolio">View Portfolio</Link>
        <Link className="btn-secondary" to="/contact">Get in Touch</Link>
      </div>
    </section>
  )
}

export default Hero