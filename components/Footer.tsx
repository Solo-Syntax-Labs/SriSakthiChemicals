import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="container">
          <div className="footer-cont">
            <div className="footer-sec-top">
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/01-e1726215296786.png"
                    alt={`${site.name} logo`}
                    width={90}
                    height={90}
                  />
                </Link>
              </div>
              <div className="footer-content">
                <p>
                  At {site.name}, we are driven by a commitment to quality,
                  economy, and environmental responsibility. Every product we
                  manufacture undergoes rigorous testing to ensure that it meets
                  the highest industry standards.
                </p>
              </div>
            </div>

            <div className="footer-sec-bottom">
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-links">
                <h4>Products</h4>
                <ul>
                  {site.productLinks.map((product) => (
                    <li key={product.href}>
                      <Link href={product.href}>{product.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="footer-links">
                <h4>Contact Details</h4>
                <ul>
                  <li>
                    <span>
                      {site.address.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </span>
                  </li>
                  <li>
                    <span>
                      {site.phones.map((phone) => (
                        <span key={phone}>
                          <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                          <br />
                        </span>
                      ))}
                      <a href={`tel:${site.landline.replace(/\s/g, "")}`}>
                        {site.landline}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>
                      {site.emails.map((email) => (
                        <span key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                          <br />
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-social-links">
              <div className="social-icons-section">
                <hr />
                <div className="social-icons">
                  <a href="#" aria-label="Instagram">
                    <Image
                      src="/images/1725819461instagram-logo.png"
                      width={28}
                      height={28}
                      alt="Instagram"
                    />
                  </a>
                </div>
                <div className="social-icons">
                  <a href="#" aria-label="LinkedIn">
                    <Image
                      src="/images/linkdin.png"
                      width={32}
                      height={32}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="copy-right-section">
              <div className="copy-right">
                <p>
                  Copy right ©{" "}
                  <Link href="/">{site.legalName}</Link>
                </p>
              </div>
              <div className="designed-by">
                <p>Designed for Indigon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
