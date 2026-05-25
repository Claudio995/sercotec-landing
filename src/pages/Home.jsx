import ServiceCard from '../components/ServiceCard/ServiceCard'
import TestimonialCarousel from '../components/TestimonialCarousel/TestimonialCarousel'
import Nosotros from '../components/Nosotros/Nosotros'
import FAQ from '../components/FAQ/FAQ'
import useFetch from '../hooks/useFetch'
import { getServicios, getTestimonios } from '../services/api'
import { serviciosFallback, testimoniosFallback } from '../data/fallback'
import styles from './Home.module.css'

function Home() {
  const { data: servicios, loading: loadServicios } = useFetch(getServicios, serviciosFallback)
  const { data: testimonios, loading: loadTestimonios } = useFetch(getTestimonios, testimoniosFallback)

  return (
    <>
      <Nosotros />
      <section id="servicios" className={styles.servicios} aria-label="Nuestros servicios">
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Servicios</span>
            <h2 className={styles.titulo}>¿En qué te podemos ayudar?</h2>
          </div>
          {loadServicios ? (
            <p className={styles.loading}>Cargando servicios...</p>
          ) : (
            <div className={styles.grid}>
              {servicios?.map(s => <ServiceCard key={s.id} {...s} />)}
            </div>
          )}
        </div>
      </section>

      <section id="testimonios" className={styles.testimonios} aria-label="Testimonios">
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Testimonios</span>
            <h2 className={styles.titulo}>Lo que dicen nuestros clientes</h2>
          </div>
          {!loadTestimonios && <TestimonialCarousel testimonios={testimonios || []} />}
        </div>
      </section>

      <FAQ />
    </>
  )
}

export default Home