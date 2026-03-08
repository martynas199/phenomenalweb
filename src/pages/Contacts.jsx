import React, { useState } from "react";
import SEO, { pageSEO } from "../components/SEO";

const channels = [
  {
    title: "Email",
    detail: "hello@phenomenalweb.com",
    note: "Best for project briefs and detailed requirements.",
  },
  {
    title: "Phone",
    detail: "+44 (0)20 0000 0000",
    note: "Available Monday to Friday, 9:00 to 18:00.",
  },
  {
    title: "Office",
    detail: "London, United Kingdom",
    note: "Remote-first delivery with in-person workshops available.",
  },
];

const projectTypes = [
  "Brochure website",
  "E-commerce website",
  "Custom software",
  "Website redesign",
  "Ongoing support",
];

const budgetRanges = [
  "Under 10,000",
  "10,000 - 25,000",
  "25,000 - 50,000",
  "50,000+",
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  return (
    <div className="inner-page">
      <SEO {...pageSEO.contacts} />

      <section className="section page-hero">
        <div className="container">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Contact</p>
            <h1>Tell us what you are building.</h1>
            <p className="page-intro">
              Share your goals, constraints, and timeline. We will respond with
              a practical recommendation for scope and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <article className="form-surface" data-reveal>
            <h2>Start your project</h2>
            <form onSubmit={handleSubmit} className="contact-form-grid">
              <div className="input-grid">
                <label>
                  Full name *
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, name: event.target.value }))
                    }
                  />
                </label>

                <label>
                  Email address *
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, email: event.target.value }))
                    }
                  />
                </label>
              </div>

              <label>
                Company
                <input
                  type="text"
                  value={formData.company}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, company: event.target.value }))
                  }
                />
              </label>

              <div className="input-grid">
                <label>
                  Project type
                  <select
                    value={formData.projectType}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        projectType: event.target.value,
                      }))
                    }
                  >
                    <option value="">Select</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  Budget range
                  <select
                    value={formData.budget}
                    onChange={(event) =>
                      setFormData((prev) => ({ ...prev, budget: event.target.value }))
                    }
                  >
                    <option value="">Select</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Project details *
                <textarea
                  rows="6"
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((prev) => ({ ...prev, message: event.target.value }))
                  }
                  placeholder="What are you trying to improve and by when?"
                />
              </label>

              <button type="submit" className="btn btn-primary">
                Send project brief
              </button>

              <p className="form-disclaimer">
                This demo form stores data locally. Connect it to your CRM or
                email service before production use.
              </p>
              {isSubmitted && (
                <p className="form-success" role="status" aria-live="polite">
                  Thanks, your brief has been captured.
                </p>
              )}
            </form>
          </article>

          <aside className="contact-side" data-reveal>
            <div className="contact-side-card">
              <h3>Prefer direct contact?</h3>
              <p>
                If you already have a clear brief, send it directly and we will
                reply with a recommended next step.
              </p>
            </div>

            <div className="channel-list">
              {channels.map((channel) => (
                <article className="channel-card" key={channel.title}>
                  <h4>{channel.title}</h4>
                  <p className="channel-detail">{channel.detail}</p>
                  <p>{channel.note}</p>
                </article>
              ))}
            </div>

            <div className="contact-side-card">
              <h3>What to include</h3>
              <ul className="mini-list" role="list">
                <li>Current website or product links</li>
                <li>Primary goals and metrics</li>
                <li>Required launch timeline</li>
                <li>Key stakeholders involved</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
