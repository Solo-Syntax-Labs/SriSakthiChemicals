import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.7140086387876!2d77.79763647505054!3d11.367905788819096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba967fce7ee92d3%3A0xf1ee0b141cc3d8f4!2sAmezoltech%20India%20Private%20Limited!5e1!3m2!1sen!2sin!4v1726491325706!5m2!1sen!2sin";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="20" height="20">
      <path
        fill="currentColor"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="20" height="20">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.05 15.05 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 2c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden width="20" height="20">
      <path
        fill="currentColor"
        d="M2 4h20v16H2V4zm10 9 8-6H4l8 6zm0 2.2L4 9.5V18h16V9.5l-8 5.7z"
      />
    </svg>
  );
}

export default function ContactPageContent() {
  return (
    <section className="contact-section">
      <div className="contact-section-overlay">
        <div className="container">
          <div className="contact-sec-cont">
            <div className="panel-title">
              <h2>Get In Touch</h2>
            </div>

            <div className="contact-sec-left">
              <ContactForm />
            </div>

            <div className="contact-sec-right">
              <div className="contact-page-address-box">
                <h4>Our Location</h4>
                <div className="footer-contacts">
                  <div className="footer-icon">
                    <LocationIcon />
                  </div>
                  <div className="footer-content">
                    <p>
                      {site.legalName}
                      <br />
                      {site.address.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-page-address-box">
                <h4>Contact</h4>
                <div className="footer-contacts">
                  <div className="footer-icon">
                    <PhoneIcon />
                  </div>
                  <div className="footer-content">
                    {site.phones.map((phone) => (
                      <span key={phone}>
                        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                        <br />
                      </span>
                    ))}
                    <a href={`tel:${site.landline.replace(/\s/g, "")}`}>
                      {site.landline.replace(/\s/g, "")}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-page-address-box">
                <h4>E mail</h4>
                <div className="footer-contacts">
                  <div className="footer-icon">
                    <EmailIcon />
                  </div>
                  <div className="footer-content">
                    {site.emails.map((email) => (
                      <span key={email}>
                        <a href={`mailto:${email}`}>{email}</a>
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="google-map">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${site.name} location map`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
