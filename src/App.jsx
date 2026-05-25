import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import './styles/global.css'

const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))

function LoadingPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <p style={{ color: 'var(--color-text-muted)' }}>Cargando...</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  )
}

export default App