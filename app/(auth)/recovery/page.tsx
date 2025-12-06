'use client';

import "./page.css";

const RecoveryPage = () => {
    return (
        <section className="recovery-section">
            <div className="recovery-container">
                <h1>Recovery</h1>
                <p>To reset your password, please enter your email below.</p>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                </div>
            </div>
        </section>
    );
}
export default RecoveryPage;