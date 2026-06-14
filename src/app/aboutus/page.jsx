"use client";

import styled from "styled-components";

export default function AboutPage() {
  return (
    <PageWrapper>

      {/* HERO */}
      <HeroSection>
        <Overlay />

        <HeroContent>
          <HeroTag>♻️ About DAVENAMTECH</HeroTag>

          <HeroTitle>
            Building a <span>Cleaner Future</span> Through Waste Innovation
          </HeroTitle>

          <HeroText>
            DAVENAMTECH CONCEPTS AND SOLUTIONS LTD is a clean energy startup
            focused on converting organic waste into biogas and organic fertilizer,
            helping communities transition to a sustainable circular economy.
          </HeroText>
        </HeroContent>
      </HeroSection>

      {/* MISSION / VISION */}
      <Section>
        <SectionHeader>
          <SectionTag>OUR PURPOSE</SectionTag>
          <SectionTitle>Mission & Vision</SectionTitle>
        </SectionHeader>

        <Grid>
          <Card>
            <Icon>🎯</Icon>
            <h3>Our Mission</h3>
            <p>
              To convert organic waste into affordable clean energy and sustainable
              agricultural products while reducing environmental pollution.
            </p>
          </Card>

          <Card>
            <Icon>🌍</Icon>
            <h3>Our Vision</h3>
            <p>
              To become a leading waste-to-energy company in Africa, powering homes
              and businesses with renewable energy solutions.
            </p>
          </Card>

          <Card>
            <Icon>♻️</Icon>
            <h3>Our Goal</h3>
            <p>
              To build a fully circular economy where waste becomes a valuable resource.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* STORY */}
      <Section $gray>
        <SectionHeader>
          <SectionTag>OUR STORY</SectionTag>
          <SectionTitle>Why We Exist</SectionTitle>
        </SectionHeader>

        <StoryBox>
          <p>
            In many Nigerian communities, organic waste is often discarded improperly,
            contributing to pollution, flooding, and health risks.
          </p>

          <p>
            DAVENAMTECH was created to solve this problem by transforming waste into
            usable energy and agricultural inputs.
          </p>

          <p>
            We believe that waste is not waste — it is an opportunity for energy,
            jobs, and environmental transformation.
          </p>
        </StoryBox>
      </Section>

      {/* VALUES */}
      <Section>
        <SectionHeader>
          <SectionTag>CORE VALUES</SectionTag>
          <SectionTitle>What Drives Us</SectionTitle>
        </SectionHeader>

        <Grid>
          <Card>
            <Icon>🌱</Icon>
            <h3>Sustainability</h3>
            <p>We prioritize long-term environmental balance in every solution.</p>
          </Card>

          <Card>
            <Icon>⚡</Icon>
            <h3>Innovation</h3>
            <p>We use modern waste-to-energy technology to solve local problems.</p>
          </Card>

          <Card>
            <Icon>🤝</Icon>
            <h3>Community Impact</h3>
            <p>We empower communities through clean energy and job creation.</p>
          </Card>

          <Card>
            <Icon>📈</Icon>
            <h3>Scalability</h3>
            <p>Our model is designed to grow across cities and states.</p>
          </Card>
        </Grid>
      </Section>

      {/* IMPACT */}
      <StatsSection>
        <Stat>
          <h2>600kg+</h2>
          <p>Biogas Target Output</p>
        </Stat>

        <Stat>
          <h2>400kg+</h2>
          <p>Fertilizer Production</p>
        </Stat>

        <Stat>
          <h2>15</h2>
          <p>Jobs Created</p>
        </Stat>

        <Stat>
          <h2>₦29M+</h2>
          <p>Projected Revenue</p>
        </Stat>
      </StatsSection>

      {/* APPROACH */}
      <Section $gray>
        <SectionHeader>
          <SectionTag>OUR APPROACH</SectionTag>
          <SectionTitle>How We Operate</SectionTitle>
        </SectionHeader>

        <Steps>
          <Step>
            <Number>01</Number>
            <h3>Collect Waste</h3>
            <p>We partner with households, markets, and food vendors.</p>
          </Step>

          <Step>
            <Number>02</Number>
            <h3>Process Energy</h3>
            <p>Organic waste is converted into biogas through digestion.</p>
          </Step>

          <Step>
            <Number>03</Number>
            <h3>Deliver Energy</h3>
            <p>We supply clean cooking gas to households and businesses.</p>
          </Step>

          <Step>
            <Number>04</Number>
            <h3>Produce Fertilizer</h3>
            <p>By-products are converted into organic fertilizer.</p>
          </Step>
        </Steps>
      </Section>

      {/* CTA */}
      <CTASection>
        <h2>Let’s Build a Sustainable Future Together</h2>
        <p>
          Partner with DAVENAMTECH to transform waste into clean energy and
          create lasting environmental impact.
        </p>
      </CTASection>

    </PageWrapper>
  );
}

/* ================= STYLES ================= */

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  color: #111;
`;

/* HERO */
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
  background: rgba(0,0,0,0.3);
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 800px;
`;

const HeroTag = styled.p`
  color: #a7f3d0;
  font-weight: 600;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;

  span {
    color: #22c55e;
  }
`;

const HeroText = styled.p`
  margin-top: 1rem;
  line-height: 1.6;
  color: #e5e7eb;
`;

/* SECTIONS */
const Section = styled.section`
  padding: 5rem 8%;
  background: ${(p) => (p.$gray ? "#f8fafc" : "white")};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTag = styled.p`
  color: #1d8f4d;
  font-weight: bold;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
`;

/* GRID */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
`;

const Icon = styled.div`
  font-size: 2rem;
`;

/* STORY */
const StoryBox = styled.div`
  max-width: 800px;
  margin: auto;
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: #555;
  }
`;

/* STATS */
const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background: #1d8f4d;
  color: white;
  padding: 4rem 8%;
  text-align: center;
`;

const Stat = styled.div`
  h2 {
    font-size: 2.5rem;
  }
`;

/* STEPS */
const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Step = styled.div`
  text-align: center;
`;

const Number = styled.div`
  width: 50px;
  height: 50px;
  margin: auto;
  background: #1d8f4d;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

/* CTA */
const CTASection = styled.section`
  text-align: center;
  padding: 5rem 8%;
  background: #0f172a;
  color: white;

  h2 {
    font-size: 2.5rem;
  }

  p {
    margin-top: 1rem;
    color: #cbd5e1;
  }
`;