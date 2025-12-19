"use client";

import { useState, useEffect } from "react";
import "./page.css";
import Image from "next/image";

const UserMainDashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={`dashboard-section ${sidebarOpen ? 'sidebar-open' : ''}`} data-page="dashboard">
            <div className="dashboard-header">
                <h1>Panel de Control</h1>
                <p>Gestiona personas, eventos y donaciones desde un solo lugar</p>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <div className="dashboard-card-icon">
                        <img src="/icons/group.png" alt="Personas" />
                    </div>
                    <h3>Personas</h3>
                    <p>Administra contactos, miembros y voluntarios de tu organización.</p>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon">
                        <img src="/icons/calendar.png" alt="Eventos" />
                    </div>
                    <h3>Eventos</h3>
                    <p>Organiza y gestiona eventos, reuniones y actividades programadas.</p>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon">
                        <img src="/icons/currency.png" alt="Donaciones" />
                    </div>
                    <h3>Donaciones</h3>
                    <p>Rastrea donaciones, pagos y transacciones financieras.</p>
                </div>

                <div className="dashboard-card">
                    <div className="dashboard-card-icon">
                        <img src="/icons/home.png" alt="Reportes" />
                    </div>
                    <h3>Reportes</h3>
                    <p>Visualiza estadísticas y genera reportes de tu organización.</p>
                </div>
            </div>
        </section>
    );
}

export default UserMainDashboardPage;