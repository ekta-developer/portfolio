import { useState } from "react";
import "./connectionform.css";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  contact: "",
  message: "",
};

const ConnectForm = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit the form.");
      }

      setStatus({
        type: "success",
        message: result.message,
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to connect to the server. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="connect-section" id="connect">
      <div className="connect-container">
        <h2>Connect With Me</h2>

        <p className="connect-description">
          Have a project in mind or want to discuss an opportunity?
          Send me a message!
        </p>

        <form className="connect-form" onSubmit={handleSubmit}>
          <div className="connect-field">
            <label htmlFor="visitor-name">Full Name</label>
            <input
              id="visitor-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              maxLength={100}
              autoComplete="name"
              required
            />
          </div>

          <div className="connect-field">
            <label htmlFor="visitor-email">Email Address</label>
            <input
              id="visitor-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              maxLength={255}
              autoComplete="email"
              required
            />
          </div>

          <div className="connect-field">
            <label htmlFor="visitor-contact">Contact Number</label>
            <input
              id="visitor-contact"
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
              maxLength={150}
              autoComplete="tel"
              required
            />
          </div>

          <div className="connect-field">
            <label htmlFor="visitor-subject">Subject</label>
            <input
              id="visitor-subject"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What would you like to discuss?"
              maxLength={150}
              required
            />
          </div>

          <div className="connect-field">
            <label htmlFor="visitor-message">Message</label>
            <textarea
              id="visitor-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={5}
              required
            />
          </div>

          {status.message && (
            <p
              className={`connect-status ${status.type}`}
              role="status"
            >
              {status.message}
            </p>
          )}

          <button
            className="connect-submit"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectForm;