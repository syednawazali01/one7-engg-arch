import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2>Get in Touch</h2>
      <p>Have a project in mind? Reach out through Instagram or email.</p>
      <div className="contact-links">
        <a
          href="https://instagram.com/onnee.7"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Instagram
        </a>

        <a
          href="ar208213@gmail.com"
          className="contact-btn"
        >
          Email
        </a>
      </div>
    </section>
  )
}

export default Contact