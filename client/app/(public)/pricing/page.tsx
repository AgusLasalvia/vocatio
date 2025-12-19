"use client"

import { useState } from "react"
import "./page.css"

interface Plan {
    title: string;
    priceMonthly: number;
    priceYearly: number;
    description: string;
    features: string[];
    popular?: boolean;
}

const plans: Plan[] = [
    {
        title: "Gratis",
        priceMonthly: 0,
        priceYearly: 0,
        description: "Perfecto para empezar",
        features: [
            "Hasta 50 personas",
            "Eventos ilimitados",
            "Gestión básica de donaciones",
            "Soporte por email"
        ]
    },
    {
        title: "Básico",
        priceMonthly: 14.99,
        priceYearly: 149.99,
        description: "Ideal para organizaciones pequeñas",
        features: [
            "Hasta 200 personas",
            "Eventos ilimitados",
            "Gestión avanzada de donaciones",
            "Reportes básicos",
            "Soporte prioritario",
            "Integraciones básicas"
        ],
        popular: true
    },
    {
        title: "Profesional",
        priceMonthly: 29.99,
        priceYearly: 299.99,
        description: "Para organizaciones en crecimiento",
        features: [
            "Personas ilimitadas",
            "Eventos ilimitados",
            "Gestión completa de donaciones",
            "Reportes avanzados",
            "Soporte 24/7",
            "Todas las integraciones",
            "API personalizada",
            "Gestión de equipos"
        ]
    }
]

const PricingPage = () => {
    const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

    const getPrice = (plan: Plan) => {
        return billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly
    }

    const getSavings = (plan: Plan) => {
        if (plan.priceYearly === 0) return 0
        const yearlyTotal = plan.priceMonthly * 12
        const savings = yearlyTotal - plan.priceYearly
        return Math.round((savings / yearlyTotal) * 100)
    }

    return (
        <div className="pricing-page">
            <div className="pricing-container">
                <div className="pricing-header">
                    <h1>Elige tu plan</h1>
                    <p className="pricing-subtitle">Selecciona el plan que mejor se adapte a las necesidades de tu organización</p>
                </div>

                <div className="billing-selector">
                    <span className={billingPeriod === "monthly" ? "active" : ""}>Mensual</span>
                    <button
                        className={`billing-toggle ${billingPeriod === "yearly" ? "yearly" : ""}`}
                        onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                        aria-label="Cambiar período de facturación"
                    >
                        <span className="toggle-slider"></span>
                    </button>
                    <span className={billingPeriod === "yearly" ? "active" : ""}>
                        Anual
                        {billingPeriod === "yearly" && <span className="savings-badge">Ahorra hasta 17%</span>}
                    </span>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => {
                        const price = getPrice(plan)
                        const savings = getSavings(plan)

                        return (
                            <div key={plan.title} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
                                {plan.popular && <div className="popular-badge">Popular</div>}

                                <div className="card-header">
                                    <h3>{plan.title}</h3>
                                    <p className="card-description">{plan.description}</p>
                                </div>

                                <div className="card-pricing">
                                    <div className="price-container">
                                        <span className="currency">$</span>
                                        <span className="price">{price.toFixed(2)}</span>
                                    </div>
                                    <span className="period">/ {billingPeriod === "monthly" ? "mes" : "año"}</span>
                                    {billingPeriod === "yearly" && savings > 0 && (
                                        <div className="yearly-savings">Ahorra {savings}%</div>
                                    )}
                                </div>

                                <ul className="features-list">
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="select-button">
                                    {price === 0 ? "Comenzar gratis" : "Seleccionar plan"}
                                </button>
                            </div>
                        )
                    })}
                </div>

                <div className="pricing-footer">
                    <p>Todos los planes incluyen garantía de satisfacción de 30 días</p>
                </div>
            </div>
        </div>
    )
}

export default PricingPage;
