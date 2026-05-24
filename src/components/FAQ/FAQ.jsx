import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import useFetch from '../../hooks/useFetch'
import { getFaq } from '../../services/api'
import styles from './FAQ.module.css'

function FAQ() {
  const { data, loading, error } = useFetch(getFaq)
  const [abierto, setAbierto] = useState(null)

  const toggle = (id) => setAbierto(prev => prev === id ? null : id)

  if (loading) return <div className={styles.loading}>Cargando preguntas...</div>
  if (error) return <div className={styles.error}>Error al cargar preguntas</div>

  return (
    <section id="faq" className={styles.section} aria-label="Preguntas frecuentes">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.titulo}>Preguntas frecuentes</h2>
          <p className={styles.subtitulo}>Todo lo que necesitas saber sobre nuestros servicios</p>
        </div>

        <div className={styles.lista}>
          {data?.map(item => (
            <div key={item.id} className={styles.item}>
              <button
                className={styles.pregunta}
                onClick={() => toggle(item.id)}
                aria-expanded={abierto === item.id}
                aria-controls={`respuesta-${item.id}`}
              >
                <span>{item.pregunta}</span>
                <FiChevronDown
                  className={`${styles.icono} ${abierto === item.id ? styles.iconoAbierto : ''}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`respuesta-${item.id}`}
                className={`${styles.respuesta} ${abierto === item.id ? styles.respuestaAbierta : ''}`}
                role="region"
              >
                <p>{item.respuesta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ