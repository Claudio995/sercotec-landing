import { useState, useEffect, useCallback } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import styles from './TestimonialCarousel.module.css'

function TestimonialCarousel({ testimonios }) {
  const [actual, setActual] = useState(0)
  const [pausado, setPausado] = useState(false)

  const anterior = useCallback(() => {
    setActual(i => (i === 0 ? testimonios.length - 1 : i - 1))
  }, [testimonios.length])

  const siguiente = useCallback(() => {
    setActual(i => (i === testimonios.length - 1 ? 0 : i + 1))
  }, [testimonios.length])

  useEffect(() => {
    if (pausado) return
    const timer = setInterval(siguiente, 5000)
    return () => clearInterval(timer)
  }, [pausado, siguiente])

  if (!testimonios || testimonios.length === 0) return null

  const t = testimonios[actual]

  return (
    <section
      className={styles.wrapper}
      aria-label="Carrusel de testimonios"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
    >
      <div
        className={styles.card}
        role="group"
        aria-label={`Testimonio ${actual + 1} de ${testimonios.length}`}
      >
        <div className={styles.estrellas} aria-label={`${t.rating} de 5 estrellas`}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <FaStar key={i} className={styles.estrella} aria-hidden="true" />
          ))}
        </div>

        <blockquote className={styles.texto}>
          <p>"{t.texto}"</p>
        </blockquote>

        <div className={styles.autor}>
          <div className={styles.avatar} aria-hidden="true">
            {t.nombre.charAt(0)}
          </div>
          <div>
            <p className={styles.nombre}>{t.nombre}</p>
            <p className={styles.empresa}>{t.cargo} — {t.empresa}</p>
          </div>
        </div>
      </div>

      <div className={styles.controles}>
        <button onClick={anterior} className={styles.btn} aria-label="Testimonio anterior">
          <FiChevronLeft size={20} aria-hidden="true" />
        </button>

        <div className={styles.dots} role="tablist">
          {testimonios.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === actual}
              aria-label={`Ir al testimonio ${i + 1}`}
              className={`${styles.dot} ${i === actual ? styles.dotActivo : ''}`}
              onClick={() => setActual(i)}
            />
          ))}
        </div>

        <button onClick={siguiente} className={styles.btn} aria-label="Testimonio siguiente">
          <FiChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default TestimonialCarousel