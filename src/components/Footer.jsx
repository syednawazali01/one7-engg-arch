import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {year} One7 Engg & Arch. All rights reserved.</p>
    </footer>
  )
}

export default Footer