"use client"

import "./page.css"
import Link from "next/link"

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Gestiona tu organización de forma simple</h1>
          <p className="hero-subtitle">
            Vocatio es la plataforma todo-en-uno para gestionar personas, eventos y donaciones.
            Diseñada para organizaciones que buscan eficiencia y simplicidad.
          </p>
          <div className="hero-buttons">
            <Link href="/signup" className="btn-primary">Comenzar gratis</Link>
            <Link href="/pricing" className="btn-secondary">Ver precios</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Todo lo que necesitas en un solo lugar</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 16C19.3137 16 22 13.3137 22 10C22 6.68629 19.3137 4 16 4C12.6863 4 10 6.68629 10 10C10 13.3137 12.6863 16 16 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 28C4 23.5817 7.58172 20 12 20H20C24.4183 20 28 23.5817 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Gestión de Personas</h3>
              <p>Administra contactos, miembros y voluntarios de manera organizada y eficiente.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 12H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Eventos</h3>
              <p>Organiza y gestiona eventos, reuniones y actividades con herramientas intuitivas.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4V28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Donaciones</h3>
              <p>Rastrea donaciones y transacciones financieras con reportes detallados.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>¿Listo para comenzar?</h2>
          <p>Únete a las organizaciones que ya están usando Vocatio</p>
          <Link href="/signup" className="btn-primary large">Crear cuenta gratis</Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage;
