"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";

export default function ServicesPage() {
  return (
    <PageWrapper>

      {/* HERO */}
      <HeroSection>
        <Overlay />
        <HeroContent>
          <HeroTag>⚡ Our Services</HeroTag>
          <HeroTitle>
            Sustainable Energy Solutions for a Cleaner Future
          </HeroTitle>
          <HeroText>
            We transform organic waste into valuable energy and fertilizer
            through innovative, scalable biogas technology.
          </HeroText>
        </HeroContent>
      </HeroSection>

      {/* SERVICES GRID */}
      <Section>
        <SectionHeader>
          <SectionTag>WHAT WE OFFER</SectionTag>
          <SectionTitle>Core Services</SectionTitle>
        </SectionHeader>

        <Grid>
          <Card>
            <Icon>🔥</Icon>
            <h3>Biogas Production</h3>
            <p>
              We convert organic waste into clean cooking gas for households,
              restaurants, and small businesses.
            </p>
          </Card>

          <Card>
            <Icon>🚛</Icon>
            <h3>Waste Collection</h3>
            <p>
              Efficient collection of food and organic waste from markets,
              homes, and commercial centers.
            </p>
          </Card>

          <Card>
            <Icon>🌱</Icon>
            <h3>Organic Fertilizer</h3>
            <p>
              We produce nutrient-rich organic fertilizer as a by-product of
              biogas digestion.
            </p>
          </Card>

          <Card>
            <Icon>🏭</Icon>
            <h3>System Installation</h3>
            <p>
              Design and installation of small and medium-scale biogas systems
              for homes and institutions.
            </p>
          </Card>

          <Card>
            <Icon>📊</Icon>
            <h3>Consulting</h3>
            <p>
              We help organizations adopt circular economy and waste-to-energy
              systems.
            </p>
          </Card>

          <Card>
            <Icon>♻️</Icon>
            <h3>Sustainability Solutions</h3>
            <p>
              End-to-end solutions for reducing environmental waste and carbon
              emissions.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* PROCESS */}
      <Section $gray>
        <SectionHeader>
          <SectionTag>HOW IT WORKS</SectionTag>
          <SectionTitle>Simple 4-Step Process</SectionTitle>
        </SectionHeader>

        <Steps>
          <Step>
            <Number>01</Number>
            <h3>Waste Collection</h3>
            <p>We collect organic waste from households and businesses.</p>
          </Step>

          <Step>
            <Number>02</Number>
            <h3>Processing</h3>
            <p>Waste is fed into anaerobic digesters for gas production.</p>
          </Step>

          <Step>
            <Number>03</Number>
            <h3>Energy Output</h3>
            <p>Biogas is purified and distributed as clean cooking energy.</p>
          </Step>

          <Step>
            <Number>04</Number>
            <h3>Fertilizer Output</h3>
            <p>Residual slurry is converted into organic fertilizer.</p>
          </Step>
        </Steps>
      </Section>

      {/* VALUE SECTION */}
      <ValueSection>
        <ValueBox>
          <h2>Why Choose DAVENAMTECH?</h2>

          <ul>
            <li>✔ Affordable alternative to LPG and charcoal</li>
            <li>✔ Dual revenue system (gas + fertilizer)</li>
            <li>✔ Environmental impact reduction</li>
            <li>✔ Locally sourced waste conversion</li>
            <li>✔ Scalable community-based model</li>
          </ul>
        </ValueBox>
      </ValueSection>

      {/* CTA */}
      <CTASection>
        <h2>Ready to Join the Clean Energy Movement?</h2>
        <p>
          Partner with us to build sustainable communities powered by waste-to-energy innovation.
        </p>
        <Link href="/contactus">
         <PrimaryButton>Contact Us</PrimaryButton>
        </Link>
       
      </CTASection>

    </PageWrapper>
  );
}

/* ===================== ANIMATION ===================== */

const fadeUp = keyframes`
  from {opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
`;

/* ===================== BASE ===================== */

const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #111;
`;

/* ===================== HERO ===================== */

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 6rem 8%;
  background: linear-gradient(135deg, #0f172a, #1d8f4d);
  color: white;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 60%);
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
  animation: ${fadeUp} 0.8s ease;
`;

const HeroTag = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.1);
  font-size: 0.9rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin: 1rem 0;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

/* ===================== SECTIONS ===================== */

const Section = styled.section`
  padding: 6rem 8%;
  background: ${(p) => (p.gray ? "#f8fafc" : "white")};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTag = styled.p`
  color: #1d8f4d;
  font-weight: 600;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
`;

/* ===================== GRID ===================== */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
  }

  h3 {
    margin-top: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
`;

/* ===================== STEPS ===================== */

const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Step = styled.div`
  text-align: center;
`;

const Number = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #1d8f4d, #22c55e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

/* ===================== VALUE ===================== */

const ValueSection = styled.section`
  padding: 6rem 8%;
  background: #0f172a;
  color: white;
`;

const ValueBox = styled.div`
  max-width: 800px;
  margin: auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  ul {
    list-style: none;
    line-height: 2.2;
    font-size: 1.1rem;
  }
`;

/* ===================== CTA ===================== */

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 8%;
  background: #1d8f4d;
  color: white;

  h2 {
    font-size: 2.5rem;
  }

  p {
    max-width: 600px;
    margin: 1rem auto 2rem;
    opacity: 0.9;
  }
`;

const PrimaryButton = styled.button`
  background: white;
  color: #1d8f4d;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;