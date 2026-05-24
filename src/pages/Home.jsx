import ServiceCard from '../components/ServiceCard/ServiceCard'

const servicioEjemplo = {
  id: 1,
  titulo: 'Acompañamiento Preventivo',
  descripcion: 'Asesorías periódicas para prolongar la vida útil de tu negocio.',
  imagen: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80'
}

function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '400px' }}>
      <ServiceCard {...servicioEjemplo} />
    </div>
  )
}

export default Home