import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaAward, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa';
import { Section, Container, PageHeader, TwoColumns, Grid, Card } from '../components/common';

const AboutSection = styled.div`
  margin: 5rem 0;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ValueCard = styled(Card)`
  text-align: center;
  padding: 2.5rem 2rem;
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const TeamMemberCard = styled(Card)`
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  border: 3px solid var(--primary);
`;

const TeamMemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamMemberBio = styled.p`
  color: var(--text-light);
`;

const MissionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StatsSection = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 4rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <Section style={{ paddingTop: '8rem' }}>
        <Container>
          <PageHeader
            title="About Indie Film Network"
            subtitle="Founded at the intersection of traditional filmmaking and cutting-edge AI technology"
          />
          
          <AboutSection>
            <TwoColumns>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2>Our Story</h2>
                <p>
                  The Indie Film Network was born from a vision to bridge the gap between traditional filmmaking craftsmanship and the exciting possibilities offered by emerging technologies. Founded in Atlanta, a growing hub for independent cinema, we recognized the need for a community that embraces both artistic tradition and technological innovation.
                </p>
                <p>
                  In 2025, we're proudly reviving IFN with a bold vision: to empower independent filmmakers with our innovative Human/AI/Hybrid framework that preserves artistic integrity while unlocking new creative possibilities.
                </p>
                <p>
                  What began as a small collaborative of forward-thinking filmmakers has grown into a nationwide network of directors, writers, cinematographers, editors, and other creative professionals who share our passion for the future of independent cinema.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StyledImage src="\images\branding\ifn-logo-silver.png"/> 
              </motion.div>
            </TwoColumns>
          </AboutSection> 
          
          <AboutSection>
            <MissionContent>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2>Our Mission</h2>
                <p>
                  At Indie Film Network, our mission is to revolutionize how independent films are created, financed, and distributed by providing filmmakers with the community, resources, and technological tools they need to bring their artistic visions to life.
                </p>
                <p>
                  We believe that the future of independent cinema lies at the intersection of human creativity and technological innovation. Our Human/AI/Hybrid framework is designed to enhance—never replace—the creative voice of filmmakers while expanding what's possible in independent production.
                </p>
              </motion.div>
            </MissionContent>
          </AboutSection>
          
          <AboutSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Values</h2>
            </motion.div>
            
            <Grid>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ValueCard>
                  <IconWrapper>
                    <FaLightbulb />
                  </IconWrapper>
                  <h3>Creative Integrity</h3>
                  <p>
                    We believe in preserving the unique artistic voice of each filmmaker while enhancing their creative process through innovative tools and techniques.
                  </p>
                </ValueCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ValueCard>
                  <IconWrapper>
                    <FaHandshake />
                  </IconWrapper>
                  <h3>Collaborative Community</h3>
                  <p>
                    We foster meaningful connections between filmmakers, technologists, and industry professionals to create a supportive ecosystem for independent cinema.
                  </p>
                </ValueCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ValueCard>
                  <IconWrapper>
                    <FaAward />
                  </IconWrapper>
                  <h3>Excellence in Craft</h3>
                  <p>
                    We champion high standards in storytelling and production, believing that technology should elevate rather than compromise artistic quality.
                  </p>
                </ValueCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ValueCard>
                  <IconWrapper>
                    <FaRocket />
                  </IconWrapper>
                  <h3>Forward Thinking</h3>
                  <p>
                    We embrace technological innovation and stay ahead of industry trends to empower our community with cutting-edge resources and opportunities.
                  </p>
                </ValueCard>
              </motion.div>
            </Grid>
          </AboutSection>
          
          <AboutSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Team</h2>
            </motion.div>
            
            <Grid>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TeamMemberCard>
                  <TeamMemberImage src="/images/team-1.jpg" alt="Team member" />
                  <TeamMemberName>Alex Martinez</TeamMemberName>
                  <TeamMemberRole>Founder & Director</TeamMemberRole>
                  <TeamMemberBio>
                    With over 15 years of experience in independent filmmaking, Alex brings a unique perspective on blending traditional methods with emerging technologies.
                  </TeamMemberBio>
                </TeamMemberCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TeamMemberCard>
                  <TeamMemberImage src="/images/team-2.jpg" alt="Team member" />
                  <TeamMemberName>Jasmine Wu</TeamMemberName>
                  <TeamMemberRole>Head of Technology</TeamMemberRole>
                  <TeamMemberBio>
                    Jasmine bridges the worlds of cinema and AI, with expertise in developing tools that enhance rather than replace human creativity in filmmaking.
                  </TeamMemberBio>
                </TeamMemberCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TeamMemberCard>
                  <TeamMemberImage src="/images/team-3.jpg" alt="Team member" />
                  <TeamMemberName>Marcus Johnson</TeamMemberName>
                  <TeamMemberRole>Community Director</TeamMemberRole>
                  <TeamMemberBio>
                    With a background in both film production and community building, Marcus focuses on creating meaningful connections between IFN members.
                  </TeamMemberBio>
                </TeamMemberCard>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TeamMemberCard>
                  <TeamMemberImage src="/images/team-4.jpg" alt="Team member" />
                  <TeamMemberName>Sofia Rodriguez</TeamMemberName>
                  <TeamMemberRole>Distribution Strategist</TeamMemberRole>
                  <TeamMemberBio>
                    Sofia specializes in innovative distribution models that help independent filmmakers reach audiences in the evolving digital landscape.
                  </TeamMemberBio>
                </TeamMemberCard>
              </motion.div>
            </Grid>
          </AboutSection>
        </Container>
      </Section>
      
      <StatsSection>
        <Container>
          <StatsGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StatItem>
                <StatNumber>1,500+</StatNumber>
                <StatLabel>Active Members</StatLabel>
              </StatItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StatItem>
                <StatNumber>250+</StatNumber>
                <StatLabel>Projects Supported</StatLabel>
              </StatItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StatItem>
                <StatNumber>12</StatNumber>
                <StatLabel>City Chapters</StatLabel>
              </StatItem>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StatItem>
                <StatNumber>40+</StatNumber>
                <StatLabel>AI Tools Developed</StatLabel>
              </StatItem>
            </motion.div>
          </StatsGrid>
        </Container>
      </StatsSection>
    </>
  );
};

export default AboutPage;