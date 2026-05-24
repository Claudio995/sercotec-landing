import styles from './ServiceCard.module.css'

function ServiceCard({ id, imagen, titulo, descripcion }) {
  const handleContactar = () => {
    const params = new URLSearchParams({ servicio: titulo })
    window.location.href = `/contacto?${params.toString()}`
  }

  return (
    <article className={styles.card} aria-label={`Servicio: ${titulo}`}>
      <div className={styles.imageWrapper}>
        <img
          src={imagen}
          alt={`Imagen del servicio ${titulo}`}
          loading="lazy"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <button
          className={styles.btn}
          onClick={handleContactar}
          aria-label={`Contáctanos por el servicio ${titulo}`}
        >
          Contáctanos
        </button>
      </div>
    </article>
  )
}

export default ServiceCard