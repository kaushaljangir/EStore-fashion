
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success toast
    toast.success("Message submitted successfully!");
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-overlay" />

      <section className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">CONTACT US</span>

          <h1>
            We’d Love
            <br />
            to Hear
            <br />
            From You
          </h1>

          <p className="contact-intro">
            Have a question, suggestion or need support?
            Our team is always here to help. Reach out
            to us anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <Mail />
              </div>

              <div>
                <h3>Email Us</h3>
                <a href="mailto:support@estore.com">
                  support@estore.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Phone />
              </div>

              <div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210">
                  +91 12345 67890
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin />
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>123 Fashion Street, Jaipur, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <Clock />
              </div>

              <div>
                <h3>Working Hours</h3>
                <p>Mon - Sat, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send Us a Message</h2>

          <p className="contact-form-description">
            Fill in the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-input-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                aria-label="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Subject
              </option>
              <option value="Order Inquiry">Order Inquiry</option>
              <option value="Product Information">
                Product Information
              </option>
              <option value="Shipping and Delivery">
                Shipping and Delivery
              </option>
              <option value="Returns and Refunds">
                Returns and Refunds
              </option>
              <option value="Payment Issue">Payment Issue</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <ArrowRight size={21} />
            </button>

          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
