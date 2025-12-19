"use client"

import "./page.css"

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <h1>Acerca de Vocatio</h1>
                    <p className="about-subtitle">Simplificando la gestión de organizaciones</p>
                </div>

                <div className="about-content">
                    <section className="about-section">
                        <h2>Nuestra Misión</h2>
                        <p>
                            Vocatio nace de la necesidad de simplificar la gestión de organizaciones,
                            sin fines de lucro y grupos comunitarios. Creemos que todas las organizaciones,
                            sin importar su tamaño, merecen herramientas profesionales para gestionar
                            personas, eventos y donaciones de manera eficiente.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>¿Qué es Vocatio?</h2>
                        <p>
                            Vocatio es una plataforma SaaS diseñada específicamente para organizaciones
                            que necesitan gestionar múltiples aspectos de su operación diaria. Desde
                            el seguimiento de miembros y voluntarios hasta la organización de eventos
                            y la gestión de donaciones, Vocatio centraliza todo en un solo lugar.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Características Principales</h2>
                        <div className="features-grid">
                            <div className="feature-item">
                                <h3>Gestión de Personas</h3>
                                <p>Administra contactos, miembros, voluntarios y donantes de forma organizada y eficiente.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Eventos</h3>
                                <p>Planifica, organiza y gestiona eventos, reuniones y actividades con herramientas intuitivas.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Donaciones</h3>
                                <p>Rastrea donaciones, pagos y transacciones financieras con reportes detallados.</p>
                            </div>
                            <div className="feature-item">
                                <h3>Reportes</h3>
                                <p>Genera reportes y visualiza estadísticas para tomar decisiones informadas.</p>
                            </div>
                        </div>
                    </section>

                    <section className="about-section">
                        <h2>¿Para quién es Vocatio?</h2>
                        <p>
                            Vocatio está diseñado para organizaciones sin fines de lucro, asociaciones
                            comunitarias, grupos de voluntarios, iglesias, fundaciones y cualquier
                            organización que necesite gestionar personas, eventos y recursos financieros
                            de manera profesional y eficiente.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>Nuestro Compromiso</h2>
                        <p>
                            En Vocatio, nos comprometemos a proporcionar una plataforma confiable,
                            segura y fácil de usar. Entendemos los desafíos únicos que enfrentan las
                            organizaciones y trabajamos continuamente para mejorar nuestras herramientas
                            y servicios.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
