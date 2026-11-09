"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection>
        <Overlay />

        <HeroContent>
          <HeroTag>♻️ Waste to Energy Solutions</HeroTag>

          <HeroTitle>
            Transforming Organic Waste Into <span>Biogas for cooking</span> & Sustainable Fertilizer
          </HeroTitle>

          <HeroText>
            DAVENAMTECH CONCEPTS AND SOLUTIONS LTD converts food and organic waste into
            affordable biogas and organic fertilizer, building cleaner communities and
            sustainable energy systems.
          </HeroText>

          <ButtonGroup>
             <Link href="/contactus">
            <PrimaryButton>Get Started</PrimaryButton>   
             </Link>
          
          <Link  href="/contactus">
          <SecondaryButton>Learn More</SecondaryButton>
          </Link>
            
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      {/* ABOUT */}
      <Section>
        <SectionHeader>
          <SectionTag>ABOUT US</SectionTag>
          <SectionTitle>Building a Circular Economy</SectionTitle>
          <SectionSubtitle>
            Turning waste into value through innovation and sustainability
          </SectionSubtitle>
        </SectionHeader>

        <Grid>
          <Card>
            <Icon>⚡</Icon>
            <h3>Clean Energy</h3>
            <p>Affordable biogas for homes, restaurants, and businesses.</p>
          </Card>

          <Card>
            <Icon>🚛</Icon>
            <h3>Waste Management</h3>
            <p>We collect and process organic waste from communities.</p>
          </Card>

          <Card>
            <Icon>🌱</Icon>
            <h3>Organic Fertilizer</h3>
            <p>High-quality fertilizer produced from digestion by-products.</p>
          </Card>
        </Grid>
      </Section>

      {/* SERVICES */}
    <Section $gray>
        <SectionHeader>
          <SectionTag>OUR SERVICES</SectionTag>
          <SectionTitle>What We Do</SectionTitle>
        </SectionHeader>

        <Grid>
          <Card>
            <h3>Biogas Production</h3>
            <p>Clean, renewable cooking fuel alternative to LPG and charcoal.</p>
          </Card>

          <Card>
            <h3>Waste Collection</h3>
            <p>Efficient organic waste pickup from homes and markets.</p>
          </Card>

          <Card>
            <h3>Organic Fertilizer</h3>
            <p>Nutrient-rich fertilizer for sustainable farming.</p>
          </Card>

          <Card>
            <h3>Consulting</h3>
            <p>Helping organizations adopt circular economy systems.</p>
          </Card>
        </Grid>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeader>
          <SectionTag>PROCESS</SectionTag>
          <SectionTitle>How It Works</SectionTitle>
        </SectionHeader>

        <Steps>
          {[
            ["01", "Collect Waste", "Organic waste is gathered from sources."],
            ["02", "Process", "Anaerobic digestion converts waste to gas."],
            ["03", "Energy", "Biogas is distributed for clean cooking."],
            ["04", "Fertilizer", "By-product becomes organic fertilizer."]
          ].map(([num, title, text]) => (
            <Step key={num}>
              <Number>{num}</Number>
              <h3>{title}</h3>
              <p>{text}</p>
            </Step>
          ))}
        </Steps>
      </Section>

      {/* STATS */}
      <StatsSection>
        <Stat>
          <h2>500+</h2>
          <p>Target Customers</p>
        </Stat>
        <Stat>
          <h2>15</h2>
          <p>Jobs Created</p>
        </Stat>
        <Stat>
          <h2>29M+</h2>
          <p>Projected Revenue (₦)</p>
        </Stat>
        <Stat>
          <h2>100%</h2>
          <p>Waste Utilization</p>
        </Stat>
      </StatsSection>

      {/* CTA */}
      <CTASection>
        <h2>Join The Clean Energy Revolution</h2>
        <p>
          Partner with DAVENAMTECH to build cleaner communities and access renewable energy.
        </p>
        <Link href="/contactus">
        <PrimaryButton >Contact Us</PrimaryButton>
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

/* ===================== LAYOUT ===================== */

const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #111;
  overflow-x: hidden;
  padding-top:50px;
`;

/* ===================== HERO ===================== */

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 8%;
  position: relative;
  background: linear-gradient(135deg, #0f172a, #1d8f4d);
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 60%);
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
  animation: ${fadeUp} 0.8s ease-out;
`;

const HeroTag = styled.span`
  display: inline-block;
  padding: 6px 14px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  font-size: 0.9rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  margin: 1rem 0;

  span {
    color: #a7f3d0;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const PrimaryButton = styled.button`
  background: #22c55e;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    background: #16a34a;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.1);
  }
`;

/* ===================== SECTIONS ===================== */



const Section = styled.section`
  padding: 6rem 8%;
  background: ${(p) => (p.$gray ? "#f8fafc" : "white")};
`;


const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTag = styled.p`
  color: #1d8f4d;
  font-weight: 600;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
`;

const SectionSubtitle = styled.p`
  color: #666;
  margin-top: 0.5rem;
`;

/* ===================== CARDS ===================== */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.06);
  transition: 0.3s;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
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

/* ===================== STATS ===================== */

const StatsSection = styled.section`
  background: linear-gradient(135deg, #1d8f4d, #16a34a);
  color: white;
  padding: 5rem 8%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const Stat = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  p {
    opacity: 0.9;
  }
`;

/* ===================== CTA ===================== */

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 8%;
  background: #0f172a;
  color: white;

  h2 {
    font-size: 2.8rem;
  }

  p {
    max-width: 600px;
    margin: 1rem auto 2rem;
    opacity: 0.8;
  }
`;

/* ===================== FOOTER ===================== */

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background: #0b1220;
  color: #aaa;
`;