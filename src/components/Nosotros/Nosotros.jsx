import useFetch from '../../hooks/useFetch'
import { getNosotros } from '../../services/api'
import styles from './Nosotros.module.css'

function Nosotros() {
  const { data, loading, error } = useFetch(getNosotros)

  if (loading) return <div className={styles.loading}>Cargando...</div>
  if (error) return <div className={styles.error}>Error al cargar información</div>
  if (!data) return null

  return (
    <section id="nosotros" className={styles.section} aria-label="Sobre nosotros">
      <div className={styles.container}>
        <div className={styles.texto}>
          <span className={styles.badge}>Quiénes somos</span>
          <h2 className={styles.titulo}>{data.titulo}</h2>
          <p className={styles.subtitulo}>{data.subtitulo}</p>
          <p className={styles.descripcion}>{data.descripcion}</p>
        </div>

        <div className={styles.stats} role="list">
          {data.stats.map((stat, i) => (
            <div key={i} className={styles.stat} role="listitem">
              <span className={styles.statValor}>{stat.valor}</span>
              <span className={styles.statEtiqueta}>{stat.etiqueta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nosotros