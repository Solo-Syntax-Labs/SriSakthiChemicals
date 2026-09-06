"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) {
        setOpen(false);
        setProductsOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setProductsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-section">
        <div className="containers header-section-gap">
          <div className="header-sec-cont">
            <div className="header-sec-left">
              <div className="logo">
                <Link href="/">
                  <BrandLogo width={160} height={64} priority />
                </Link>
                <h4>{site.legalName}</h4>
              </div>
            </div>

            <div className="header-sec-right">
              <div className="header-top-row">
                <div className="header-sec-contact">
                  <p>
                    For Enquires:{" "}
                    {site.phones.map((phone, index) => (
                      <span key={phone}>
                        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
                        {index < site.phones.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="header-toolbar">
                  <ThemeToggle />
                  <button
                    className={`menu-toggle ${open ? "is-open" : ""}`}
                    aria-label="Toggle Menu"
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                    type="button"
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
              </div>

              <div className="header-sec-menu">
                <button
                  type="button"
                  className={`nav-backdrop ${open ? "is-open" : ""}`}
                  aria-label="Close menu"
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                />

                <nav className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary">
                  <ul>
                    {site.nav.map((item) => {
                      const children = "children" in item ? item.children : undefined;
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                      return (
                        <li
                          key={item.href}
                          className={[
                            children ? "has-children" : "",
                            productsOpen && children ? "is-open" : "",
                          ]
                            .filter(Boolean)
                            .join(" ") || undefined}
                          onMouseEnter={() => {
                            if (window.innerWidth > 1100 && children) setProductsOpen(true);
                          }}
                          onMouseLeave={() => {
                            if (window.innerWidth > 1100 && children) setProductsOpen(false);
                          }}
                        >
                          {children ? (
                            <>
                              <button
                                type="button"
                                className={`nav-link nav-dropdown-trigger${isActive ? " is-active" : ""}`}
                                aria-expanded={productsOpen}
                                onClick={() => setProductsOpen((value) => !value)}
                              >
                                {item.label}
                                <span className="nav-caret" aria-hidden>
                                  ▾
                                </span>
                              </button>
                              <ul className={`sub-menu ${productsOpen ? "is-open" : ""}`}>
                                {children.map((child) => (
                                  <li key={child.href}>
                                    <Link href={child.href} onClick={() => setOpen(false)}>
                                      {child.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={item.href}
                              className={`nav-link${pathname === item.href ? " is-active" : ""}`}
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
