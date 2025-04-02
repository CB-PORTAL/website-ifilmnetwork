import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFilm, FaUsers, FaRobot, FaLightbulb } from 'react-icons/fa';
import { Section, Container, TwoColumns, Button, Card, Grid } from '../components/common';

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('/images/branding/sarah-filmmaker-bg.jpg') center/cover no-repeat;
  color: white;
  margin-top: -64px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/textures/film-grain.png');
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(192, 58, 40, 0.3) 0%, rgba(37, 150, 190, 0.3) 100%);
    opacity: 0.5;
    pointer-events: none;
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

// Positioning adjustment to make sure the camera points to the center text
const HeroImageAdjustment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: 65% center;
  background-size: cover;
  z-index: 0;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const FrameworkBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  
  .human {
    color: var(--accent);
    font-weight: 600;
  }
  
  .ai {
    color: var(--secondary);
    font-weight: 600;
  }
  
  .hybrid {
    color: var(--hybrid);
    font-weight: 600;
  }
  
  .separator {
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0.25rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
 
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`;

const StyledButton = styled(Button)`
  padding: 1rem 2rem;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  font-size: 2.5rem;
  
  &.human {
    background-color: var(--accent);
    color: var(--primary);
    box-shadow: 0 5px 15px rgba(192, 58, 40, 0.2);
  }
  
  &.ai {
    background-color: rgba(37, 150, 190, 0.1);
    color: var(--secondary);
    box-shadow: 0 5px 15px rgba(37, 150, 190, 0.2);
  }
  
  &.hybrid {
    background: linear-gradient(135deg, var(--accent), rgba(37, 150, 190, 0.1));
    color: var(--hybrid);
    box-shadow: 0 5px 15px rgba(141, 153, 174, 0.3);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-light);
`;

const TestimonialCard = styled(Card)`
  padding: 2rem;
  text-align: center;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 1rem;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
`;

const Author = styled.div`
  font-weight: 600;
`;

const Role = styled.div`
  color: var(--text-light);
  font-size: 0.9rem;
`;

const BrandStatement = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 0;
`;

const StatementTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  .traditional {
    color: var(--primary);
    margin-right: 0.5rem;
  }
  
  .plus {
    margin: 0 0.5rem;
    color: var(--hybrid);
  }
  
  .future {
    color: var(--secondary);
    margin-left: 0.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StatementText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: var(--text);
`;

const StatementCTA = styled.div`
  margin-top: 1rem;
`;

const ctaVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <FrameworkBadge>
            <span className="human">Human</span>
            <span className="separator">/</span>
            <span className="ai">AI</span>
            <span className="separator">/</span>
            <span className="hybrid">Hybrid</span>
          </FrameworkBadge>
          
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Revolutionizing Independent Filmmaking
          </HeroTitle>
          
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connecting filmmakers through our innovative Human/AI/Hybrid framework. Join our community where creativity meets technology.
          </HeroSubtitle>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <StyledButton as={motion.button} variants={ctaVariants} whileHover="hover" primary>
              <Link to="/community" style={{ color: 'white', textDecoration: 'none' }}>
                Join Our Community
              </Link>
            </StyledButton>
            <StyledButton as={motion.button} variants={ctaVariants} whileHover="hover">
              <Link to="/about" style={{ textDecoration: 'none' }}>
                Learn More
              </Link>
            </StyledButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>

      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Our Human/AI/Hybrid Framework
            </h2>
          </motion.div>
         
          <Grid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <IconWrapper className="human">
                  <FaFilm />
                </IconWrapper>
                <FeatureTitle>Traditional Filmmaking</FeatureTitle>
                <FeatureDescription>
                  We honor the timeless craft of storytelling and visual artistry that has defined cinema since its inception.
                </FeatureDescription>
              </Card>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <IconWrapper className="ai">
                  <FaRobot />
                </IconWrapper>
                <FeatureTitle>AI Technology</FeatureTitle>
                <FeatureDescription>
                  We leverage cutting-edge AI tools to enhance creativity, streamline production, and open new possibilities for indie filmmakers.
                </FeatureDescription>
              </Card>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <IconWrapper className="human">
                  <FaUsers />
                </IconWrapper>
                <FeatureTitle>Community Collaboration</FeatureTitle>
                <FeatureDescription>
                  We connect passionate filmmakers across disciplines, fostering collaboration and knowledge sharing within our growing network.
                </FeatureDescription>
              </Card>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <IconWrapper className="hybrid">
                  <FaLightbulb />
                </IconWrapper>
                <FeatureTitle>Hybrid Innovation</FeatureTitle>
                <FeatureDescription>
                  Our unique approach combines human creativity with technological advancements, creating a framework that respects artistic vision.
                </FeatureDescription>
              </Card>
            </motion.div>
          </Grid>
        </Container>
      </Section>
      
      <Section bgColor="var(--background-alt)">
        <Container>
          <BrandStatement>
            <StatementTitle>
              <span className="traditional">Traditional Craft</span>
              <span className="plus">+</span>
              <span className="future">Future Innovation</span>
            </StatementTitle>
            
            <StatementText>
              At IFN, we believe in preserving the human artistry that makes cinema special, 
              while embracing the technological advancements that expand what's possible. 
              Our Human/AI/Hybrid framework ensures filmmakers can engage with AI on their own terms - 
              using it as a tool to enhance creativity, never replace it.
            </StatementText>
            
            <StatementCTA>
              <Button primary>Our Approach</Button>
            </StatementCTA>
          </BrandStatement>
        </Container>
      </Section>
     
      <Section bgColor="var(--background)">
        <Container>
          <TwoColumns>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>About Indie Film Network</h2>
              <p>
                Founded at the intersection of traditional filmmaking and cutting-edge AI technology,
                the Indie Film Network is revolutionizing how independent films are created, financed,
                and distributed.
              </p>
              <p>
                In 2025, we're proudly reviving IFN with a bold vision: to empower filmmakers with our
                innovative Human/AI/Hybrid framework that preserves artistic integrity while unlocking
                new creative possibilities.
              </p>
              <Button primary style={{ marginTop: '1rem' }}>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                  Learn More About Us
                </Link>
              </Button>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/images/about-image.jpg" alt="Filmmaking team" style={{ width: '100%', borderRadius: '0.5rem' }} />
            </motion.div>
          </TwoColumns>
        </Container>
      </Section>
     
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>
              What Filmmakers Are Saying
            </h2>
          </motion.div>
         
          <Grid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  IFN changed the game for my documentary project. Their AI script analysis tools helped me refine my storytelling, and the community connected me with a brilliant cinematographer.
                </Quote>
                <Author>Sarah Johnson</Author>
                <Role>Documentary Director, Atlanta</Role>
              </TestimonialCard>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  As a tech-forward filmmaker, I was searching for a community that embraces innovation. IFN's hybrid approach perfectly balances artistic vision with technological possibilities.
                </Quote>
                <Author>Michael Chen</Author>
                <Role>Independent Director, New York</Role>
              </TestimonialCard>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  The resources and connections I've gained through IFN have been invaluable. Their distribution strategy workshop helped me secure streaming deals I never thought possible.
                </Quote>
                <Author>Elena Rodriguez</Author>
                <Role>Producer, Los Angeles</Role>
              </TestimonialCard>
            </motion.div>
          </Grid>
        </Container>
      </Section>
     
      <Section bgColor="var(--primary)" style={{ color: 'white' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <h2>Join the Indie Film Network Today</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Connect with filmmakers, access innovative resources, and be part of the movement revolutionizing independent cinema in 2025 and beyond.
            </p>
            <Button as={motion.button} variants={ctaVariants} whileHover="hover" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2rem' }}>
              <Link to="/community" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
                Join Our Community
              </Link>
            </Button>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;