"use client"

import { useState } from "react"
import "./page.css"

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "¿Qué es Vocatio?",
        answer: "Vocatio es una plataforma SaaS diseñada para ayudar a las organizaciones a gestionar personas, eventos y donaciones de manera eficiente. Centraliza todas las herramientas necesarias en un solo lugar."
    },
    {
        question: "¿Cuánto cuesta usar Vocatio?",
        answer: "Ofrecemos un plan gratuito para organizaciones pequeñas y planes de pago para organizaciones que necesitan más funcionalidades. Puedes ver todos los precios en nuestra página de precios."
    },
    {
        question: "¿Necesito conocimientos técnicos para usar Vocatio?",
        answer: "No, Vocatio está diseñado para ser intuitivo y fácil de usar. No necesitas conocimientos técnicos para comenzar a gestionar tu organización."
    },
    {
        question: "¿Mis datos están seguros?",
        answer: "Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de extremo a extremo y cumplimos con los estándares de seguridad más altos de la industria."
    },
    {
        question: "¿Puedo cancelar mi suscripción en cualquier momento?",
        answer: "Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones. Tu cuenta permanecerá activa hasta el final del período de facturación actual."
    },
    {
        question: "¿Ofrecen soporte técnico?",
        answer: "Sí, ofrecemos soporte técnico por email para todos los usuarios. Los planes de pago incluyen soporte prioritario y los planes profesionales incluyen soporte 24/7."
    },
    {
        question: "¿Puedo importar mis datos existentes?",
        answer: "Sí, ofrecemos herramientas de importación para ayudarte a migrar tus datos existentes a Vocatio. Contacta con nuestro equipo de soporte para más información."
    },
    {
        question: "¿Hay límites en el plan gratuito?",
        answer: "El plan gratuito permite gestionar hasta 50 personas y eventos ilimitados. Para más funcionalidades y límites más altos, puedes actualizar a uno de nuestros planes de pago."
    }
]

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="faq-page">
            <div className="faq-container">
                <div className="faq-header">
                    <h1>Preguntas Frecuentes</h1>
                    <p className="faq-subtitle">Encuentra respuestas a las preguntas más comunes sobre Vocatio</p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                            <button 
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg 
                                    width="20" 
                                    height="20" 
                                    viewBox="0 0 20 20" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="faq-icon"
                                >
                                    <path 
                                        d="M5 7.5L10 12.5L15 7.5" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <h2>¿No encuentras lo que buscas?</h2>
                    <p>Contacta con nuestro equipo de soporte y te ayudaremos</p>
                    <a href="/contact" className="btn-primary">Contactar Soporte</a>
                </div>
            </div>
        </div>
    )
}

export default FAQPage;

