import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import styles from './Navbar.module.css'

const links = [
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#testimonios', label: 'Testimonios' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contacto', label: 'Contacto' },
]

function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Navegación principal">
        <Link to="/" className={styles.logo}>
          <span className={styles.logoTexto}>Centro de Negocios</span>
          <span className={styles.logoBadge}>SERCOTEC</span>
        </Link>

        <ul className={`${styles.links} ${abierto ? styles.linksAbierto : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={() => setAbierto(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuBtn}
          onClick={() => setAbierto(v => !v)}
          aria-expanded={abierto}
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          {abierto ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar