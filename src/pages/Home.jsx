import ServiceCard from '../components/ServiceCard/ServiceCard'
import TestimonialCarousel from '../components/TestimonialCarousel/TestimonialCarousel'

const servicioEjemplo = {
  id: 1,
  titulo: 'Acompañamiento Preventivo',
  descripcion: 'Asesorías periódicas para prolongar la vida útil de tu negocio.',
  imagen: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80'
}

const testimonios = [
  { id: 1, nombre: 'María González', empresa: 'Tienda El Rincón', cargo: 'Propietaria', texto: 'Gracias al Centro de Negocios logré ordenar mis finanzas y duplicar mis ventas en 6 meses.', rating: 5 },
  { id: 2, nombre: 'Carlos Muñoz', empresa: 'Panadería Don Carlos', cargo: 'Gerente', texto: 'El acompañamiento fue clave para digitalizarnos y llegar a nuevos clientes.', rating: 5 },
  { id: 3, nombre: 'Ana Martínez', empresa: 'Boutique Ana M.', cargo: 'Fundadora', texto: 'Aprendí a gestionar mejor mi inventario y crear una estrategia de marketing real.', rating: 5 }
]

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ maxWidth: '400px', marginBottom: '3rem' }}>
        <ServiceCard {...servicioEjemplo} />
      </div>
      <TestimonialCarousel testimonios={testimonios} />
    </div>
  )
}

export default Home