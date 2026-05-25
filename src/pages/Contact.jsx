import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FiSend, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import styles from './Contact.module.css'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un correo electrónico válido'),
  telefono: z.string().regex(/^[0-9+\s-]{7,15}$/, 'Teléfono inválido').optional().or(z.literal('')),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

const servicios = [
  'Acompañamiento Preventivo',
  'Gestión Financiera',
  'Marketing Digital',
  'Innovación y Procesos',
  'Vinculación Empresarial',
  'Acompañamiento Correctivo',
]

function Contact() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const servicio = params.get('servicio')
    if (servicio) setValue('servicio', servicio)
  }, [setValue])

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 1000))
    console.log('Formulario enviado:', data)
    reset()
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.info}>
          <h1 className={styles.titulo}>Contáctanos</h1>
          <p className={styles.subtitulo}>Estamos aquí para ayudarte a hacer crecer tu negocio.</p>

          <div className={styles.datos}>
            <div className={styles.dato}>
              <FiMapPin className={styles.icono} aria-hidden="true" />
              <div>
                <p className={styles.datoTitulo}>Dirección</p>
                <p className={styles.datoTexto}>Manuel Rodríguez Sur 749, Santiago (Metro Toesca)</p>
              </div>
            </div>
            <div className={styles.dato}>
              <FiMail className={styles.icono} aria-hidden="true" />
              <div>
                <p className={styles.datoTitulo}>Email</p>
                <p className={styles.datoTexto}>centro.santiago@centrossercotec.cl</p>
              </div>
            </div>
            <div className={styles.dato}>
              <FiPhone className={styles.icono} aria-hidden="true" />
              <div>
                <p className={styles.datoTitulo}>Horario</p>
                <p className={styles.datoTexto}>Lunes a Viernes, 9:00 - 18:00 hrs</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}>
          {isSubmitSuccessful ? (
            <div className={styles.exito} role="alert">
              <p>✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>

              <div className={styles.campo}>
                <label htmlFor="nombre" className={styles.label}>Nombre completo *</label>
                <input id="nombre" type="text" className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`} placeholder="Tu nombre" aria-describedby={errors.nombre ? 'error-nombre' : undefined} {...register('nombre')} />
                {errors.nombre && <span id="error-nombre" className={styles.error} role="alert">{errors.nombre.message}</span>}
              </div>

              <div className={styles.fila}>
                <div className={styles.campo}>
                  <label htmlFor="email" className={styles.label}>Correo electrónico *</label>
                  <input id="email" type="email" className={`${styles.input} ${errors.email ? styles.inputError : ''}`} placeholder="tu@correo.cl" {...register('email')} />
                  {errors.email && <span className={styles.error} role="alert">{errors.email.message}</span>}
                </div>
                <div className={styles.campo}>
                  <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                  <input id="telefono" type="tel" className={styles.input} placeholder="+56 9 1234 5678" {...register('telefono')} />
                  {errors.telefono && <span className={styles.error} role="alert">{errors.telefono.message}</span>}
                </div>
              </div>

              <div className={styles.campo}>
                <label htmlFor="servicio" className={styles.label}>Servicio de interés *</label>
                <select id="servicio" className={`${styles.input} ${errors.servicio ? styles.inputError : ''}`} {...register('servicio')} defaultValue="">
                  <option value="" disabled>Selecciona un servicio</option>
                  {servicios.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.servicio && <span className={styles.error} role="alert">{errors.servicio.message}</span>}
              </div>

              <div className={styles.campo}>
                <label htmlFor="mensaje" className={styles.label}>Mensaje *</label>
                <textarea id="mensaje" rows={4} className={`${styles.input} ${errors.mensaje ? styles.inputError : ''}`} placeholder="Cuéntanos sobre tu negocio y en qué necesitas ayuda..." {...register('mensaje')} />
                {errors.mensaje && <span className={styles.error} role="alert">{errors.mensaje.message}</span>}
              </div>

              <button type="submit" className={styles.btn} disabled={isSubmitting}>
                <FiSend aria-hidden="true" />
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}

export default Contact