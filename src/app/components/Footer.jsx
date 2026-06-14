"use client";

import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterWrapper>

      <FooterTop>

        {/* BRAND SECTION */}
        <BrandSection>
          <Logo>🌿 DAVENAMTECH</Logo>

          <p>
            Transforming organic waste into clean energy and sustainable fertilizer
            for a greener Nigeria and a cleaner planet.
          </p>

          <Socials>
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">🐦</a>
            <a href="#">📸</a>
          </Socials>
        </BrandSection>

        {/* QUICK LINKS */}
        <Column>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/aboutus">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contactus">Contact</Link>
        </Column>

        {/* SERVICES */}
        <Column>
          <h3>Our Services</h3>
          <Link href="/services">Biogas Production</Link>
          <Link href="/services">Waste Collection</Link>
          <Link href="/services">Organic Fertilizer</Link>
          <Link href="/contactus">Consulting</Link>
        </Column>

        {/* CONTACT */}
        <Column>
          <h3>Contact</h3>
          <p>📍 8 Nwosu Terrace Street, Ogui, Enugu, Enugu State, Nigeria</p>
          <p>📞 +234 813 530 9706</p>
          <p>✉️ davidnnamdiesom@gmail.com</p>
        </Column>

        {/* NEWSLETTER */}
        <Newsletter>
          <h3>Newsletter</h3>
          <p>Subscribe for updates on clean energy innovation.</p>

          <InputWrapper>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </InputWrapper>
        </Newsletter>

      </FooterTop>

      {/* BOTTOM BAR */}
      <FooterBottom>
        <p>
          © {new Date().getFullYear()} DAVENAMTECH CONCEPTS AND SOLUTIONS LTD.
          All rights reserved.
        </p>
      </FooterBottom>

    </FooterWrapper>
  );
}

/* ===================== STYLES ===================== */

const FooterWrapper = styled.footer`
  background: #0b1220;
  color: #ddd;
  padding: 4rem 8% 2rem;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

/* BRAND */
const BrandSection = styled.div`
  p {
    margin-top: 1rem;
    line-height: 1.7;
    color: #aaa;
  }
`;

const Logo = styled.h2`
  color: #22c55e;
  font-size: 1.4rem;
`;

const Socials = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  a {
    font-size: 1.2rem;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

/* COLUMNS */
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h3 {
    color: white;
    margin-bottom: 0.5rem;
  }

  a {
    color: #aaa;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: #22c55e;
    }
  }

  p {
    color: #aaa;
    margin: 0;
  }
`;

/* NEWSLETTER */
const Newsletter = styled.div`
  h3 {
    color: white;
  }

  p {
    color: #aaa;
    margin-bottom: 1rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    outline: none;
  }

  button {
    padding: 0.8rem;
    border: none;
    background: #22c55e;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #16a34a;
    }
  }
`;

/* BOTTOM */
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #888;
`;