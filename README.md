# Centro de Negocios Santiago — Landing Page

Landing page desarrollada con React + Vite para el Centro de Negocios Santiago de SERCOTEC.

🌐 **Demo en producción:** https://sercotec-landing.vercel.app

---

## Tecnologías utilizadas

- React 18 + Vite
- React Router DOM
- Axios + JSON Server (CMS local)
- React Hook Form + Zod (validación)
- React Icons
- CSS Modules
- Vercel (despliegue)

---

## Estructura del proyecto
sercotec-landing/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FAQ/
│   │   ├── Navbar/
│   │   ├── Nosotros/
│   │   ├── ServiceCard/
│   │   └── TestimonialCarousel/
│   ├── data/
│   │   └── fallback.js
│   ├── hooks/
│   │   └── useFetch.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Contact.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   ├── global.css
│   │   └── variables.css
│   ├── App.jsx
│   └── main.jsx
├── db.json
└── package.json
---

## Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/Claudio995/sercotec-landing.git
cd sercotec-landing

# 2. Instalar dependencias
npm install

# 3. Terminal 1 - Iniciar API (JSON Server)
npm run api

# 4. Terminal 2 - Iniciar app React
npm run dev
```

La app queda en `http://localhost:5173` y la API en `http://localhost:3001`.

---

## Componentes desarrollados

### ServiceCard

Tarjeta reutilizable para mostrar servicios. Al hacer clic en "Contáctanos" redirige al formulario pre-llenando el servicio seleccionado.

```jsx
import ServiceCard from './components/ServiceCard/ServiceCard'

<ServiceCard
  id={1}
  titulo="Acompañamiento Preventivo"
  descripcion="Descripción del servicio"
  imagen="https://url-de-imagen.jpg"
/>
```

**Props:**
| Prop | Tipo | Descripción |
|------|------|-------------|
| id | number | Identificador único |
| titulo | string | Nombre del servicio |
| descripcion | string | Descripción breve |
| imagen | string | URL de la imagen |

---

### TestimonialCarousel

Carrusel accesible y responsive con auto-play. Se pausa al pasar el mouse.

```jsx
import TestimonialCarousel from './components/TestimonialCarousel/TestimonialCarousel'

<TestimonialCarousel testimonios={[
  {
    id: 1,
    nombre: 'María González',
    empresa: 'Tienda El Rincón',
    cargo: 'Propietaria',
    texto: 'Excelente servicio...',
    rating: 5
  }
]} />
```

---

### useFetch (hook)

Hook reutilizable para consumir endpoints con manejo de loading, error y datos de fallback.

```jsx
import useFetch from './hooks/useFetch'
import { getServicios } from './services/api'
import { serviciosFallback } from './data/fallback'

const { data, loading, error } = useFetch(getServicios, serviciosFallback)
```

---

## CMS con JSON Server

El archivo `db.json` actúa como base de datos. Puedes gestionarlo con Postman:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | /servicios | Obtener todos los servicios |
| POST | /servicios | Crear un servicio |
| PUT | /servicios/:id | Actualizar un servicio |
| DELETE | /servicios/:id | Eliminar un servicio |
| GET | /testimonios | Obtener testimonios |
| GET | /nosotros | Obtener info institucional |
| GET | /faq | Obtener preguntas frecuentes |

---

## Ramas Git

| Rama | Descripción |
|------|-------------|
| main | Producción |
| feat/service-card | Componente ServiceCard |
| feat/testimonial-carousel | Carrusel de testimonios |
| feat/api-cms | API, useFetch, Nosotros, FAQ |
| feat/navbar-contact-form | Navbar y formulario de contacto |
| feat/optimization | Lazy loading y optimización |
| docs/readme-buenas-practicas | Documentación |

---

## Equipo

- **Claudio Ramírez** — Desarrollador Frontend  
- Instituto Profesional San Sebastián — Desarrollo Frontend 2026