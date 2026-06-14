"use client";

import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({ text: "Sending message..." });
    Swal.showLoading();

    const payload = {
      ...formData,
      recipientEmail: "davidnnamdiesom@gmail.com",
      websiteName: "DAVENAMTECH CONCEPTS AND SOLUTIONS LTD",
    };

    try {
      const response = await fetch(
        "https://backend-mailer-1.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          text: "Message sent successfully! We will get back to you soon.",
        });

        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire({ icon: "error", text: data.error || "Something went wrong" });
      }
    } catch (error) {
      Swal.fire({ icon: "error", text: "Network error. Try again." });
    }
  };

  return (
    <PageWrapper>

      {/* HERO */}
      <HeroSection>
        <Overlay />

        <HeroContent>
          <HeroTitle>Contact Us</HeroTitle>
          <HeroText>
            We’d love to hear from you. Whether you’re a customer, partner,
            investor, or organization, reach out and let’s build something impactful.
          </HeroText>
        </HeroContent>
      </HeroSection>

      {/* CONTACT SECTION */}
      <ContactSection>

        {/* FORM */}
        <FormCard>
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <TextArea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <Button type="submit">Send Message →</Button>
          </form>
        </FormCard>

        {/* INFO CARDS */}
        <InfoGrid>
          <InfoCard>
            <h3>📍 Location</h3>
            <p>8 Nwosu Terrace Street, Ogui, Enugu, Enugu State, Nigeria </p>
          </InfoCard>

          <InfoCard>
            <h3>📞 Phone</h3>
            <p>+234 813 530 9706</p>
          </InfoCard>

          <InfoCard>
            <h3>✉️ Email</h3>
            <p>davidnnamdiesom@gmail.com</p>
          </InfoCard>
        </InfoGrid>
      </ContactSection>

      {/* FAQ */}
      <FAQSection>
        <h2>Frequently Asked Questions</h2>

        <FAQGrid>
          <FAQCard>
            <h3>What is DAVENAMTECH about?</h3>
            <p>
              We convert organic waste into biogas and organic fertilizer
              for clean energy and sustainable agriculture.
            </p>
          </FAQCard>

          <FAQCard>
            <h3>Who can use your service?</h3>
            <p>
              Households, restaurants, food vendors, farmers, and institutions.
            </p>
          </FAQCard>

          <FAQCard>
            <h3>How does pricing work?</h3>
            <p>
              We offer affordable subscription-based biogas supply and fertilizer sales.
            </p>
          </FAQCard>

          <FAQCard>
            <h3>Do you operate outside Enugu?</h3>
            <p>
              Currently Enugu-focused, but expansion to other states is planned.
            </p>
          </FAQCard>
        </FAQGrid>
      </FAQSection>

    </PageWrapper>
  );
}


const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #0f172a;
  background: #f8fafc;
`;

/* HERO */
const HeroSection = styled.section`
  position: relative;
  padding: 8rem 8%;
  background: linear-gradient(135deg, #0f172a, #1d8f4d);
  color: white;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(255,255,255,0.1), transparent 60%);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 700px;
  margin: auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const HeroText = styled.p`
  opacity: 0.9;
  font-size: 1.1rem;
`;

/* CONTACT */
const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  padding: 6rem 8%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);

  h2 {
    margin-bottom: 2rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  outline: none;

  &:focus {
    border-color: #1d8f4d;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  height: 140px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  outline: none;
  resize: none;

  &:focus {
    border-color: #1d8f4d;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #1d8f4d, #22c55e);
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

/* INFO */
const InfoGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }
`;

/* FAQ */
const FAQSection = styled.section`
  padding: 6rem 8%;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FAQCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  h3 {
    margin-bottom: 1rem;
  }

  p {
    color: #64748b;
  }
`;