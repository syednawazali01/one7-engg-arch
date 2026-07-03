import './Services.css'

const services = [
  {
    title: "2D Drafting",
    description: "Precise architectural drawings and technical plans, delivered with accuracy and clarity for construction-ready documentation.",
  },
  {
    title: "3D Modelling",
    description: "Detailed three-dimensional visualizations that bring designs to life before construction begins.",
  },
]

function Services() {
  return (
    <section className="services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services