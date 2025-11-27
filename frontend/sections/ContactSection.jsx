import { useState } from "react";
import "../style/Head.css";
import "../style/Contact.css";
import Head from "../component/Head";

const ContactSection = () => {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null); // { type: 'success'|'error', text: string }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        const name = (formData.name || "").trim();
        const email = (formData.email || "").trim();
        const message = (formData.message || "").trim();

        if (!name) newErrors.name = "Please enter your name.";

        if (!email) {
            newErrors.email = "Please enter your email.";
        } else {
            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(email)) newErrors.email = "Please enter a valid email address.";
        }

        if (!message) {
            newErrors.message = "Please enter a message.";
        } else if (message.length < 20) {
            newErrors.message = "Message must be at least 20 characters.";
        }

        setErrors(newErrors);
        setSubmitMessage(null);
        if (Object.keys(newErrors).length > 0) return;

        setIsLoading(true);
        try {
            const response = await fetch("https://my-portfolio-one-gamma-kuwxqw99py.vercel.app/send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitMessage({ type: "success", text: "Thanks — your message has been sent. I will get back to you shortly!" });
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitMessage({ type: "error", text: "Failed to send message. Please try again later." });
                console.error("Server responded with status:", response.status);
            }
        } catch (err) {
            setSubmitMessage({ type: "error", text: "Network error: failed to send message." });
            console.error("Error sending message:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return(
    <>
        <section id="contact">
            <div className="container">
                <Head />
                <div className="container glass-liquid">
                    <div className="container"><h2 className="section-title">Contact Me</h2></div>
                        <div className="contact-wrapper">
                            <form className="contact-form" aria-label="Contact form" onSubmit={handleSubmit}>
                                {submitMessage && submitMessage.type === 'success' && (
                                    <div className="submit-success">{submitMessage.text}</div>
                                )}
                                {submitMessage && submitMessage.type === 'error' && (
                                    <div className="submit-error">{submitMessage.text}</div>
                                )}
                                <div className="form-row">
                                    <label htmlFor="contact-name">Name</label>
                                    <input 
                                        id="contact-name" 
                                        name="name" 
                                        type="text" 
                                        onChange={handleChange} 
                                        value={formData.name}
                                        placeholder="Your name"
                                        disabled={isLoading}
                                    />
                                    {errors.name && <div className="field-error">{errors.name}</div>}
                                </div>

                                <div className="form-row">
                                    <label htmlFor="contact-email">Email</label>
                                    <input 
                                        id="contact-email" 
                                        name="email" 
                                        type="text" 
                                        onChange={handleChange}
                                        value={formData.email}
                                        placeholder="you@example.com"
                                        disabled={isLoading}
                                    />
                                    {errors.email && <div className="field-error">{errors.email}</div>}
                                </div>

                                <div className="form-row">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea 
                                        id="contact-message" 
                                        name="message" 
                                        rows={6} 
                                        onChange={handleChange}
                                        value={formData.message}
                                        placeholder="Write your message..."
                                        disabled={isLoading}
                                    />
                                    {errors.message && <div className="field-error">{errors.message}</div>}
                                </div>
                                <div className="button-row">
                                    <button type="submit" disabled={isLoading} className={isLoading ? 'btn-loading' : 'submit-btn'}>
                                        {isLoading ? (
                                            <><span className="spinner" aria-hidden></span></>
                                        ) : (
                                            'Send'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </section>
    </>
    )
}
export default ContactSection;
