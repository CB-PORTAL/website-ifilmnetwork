// Create a new file: src/pages/AppPage.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMobile, FaFilm, FaUsers, FaLightbulb, FaSearch, FaBell } from 'react-icons/fa';
import { Section, Container, PageHeader, Card, Button, Form, FormGroup, Label, Input } from '../components/common';

const AppHero = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 8rem 0 5rem;
  color: white;
  text-align: center;
`;

const AppTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AppSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const PhoneMockup = styled.div`
  width: 300px;
  height: 600px;
  background-color: white;
  border-radius: 2rem;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border: 10px solid #333;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 20px;
    background-color: #333;
    border-radius: 0 0 20px 20px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const PhoneHeader = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PhoneContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 5rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: 2rem;
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
  background-color: rgba(var(--primary-rgb), 0.1);
  color: var(--primary);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SignupForm = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SignupTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const EmailInput = styled(Input)`
  margin-bottom: 1rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: #e6f7e6;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

const AppPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your server
    console.log('Email submitted for app notification:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the thank you message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <>
      <AppHero>
        <Container>
          <AppTitle>Finding Your Community</AppTitle>
          <AppSubtitle>
            We're building tools to help connect you with nearby events, resources, 
            and like-minded creative people - all in one place.
          </AppSubtitle>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PhoneMockup>
              <PhoneScreen>
                <PhoneHeader>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaMobile style={{ marginRight: '0.5rem' }} />
                    <span>IFN Connect</span>
                  </div>
                  <FaBell />
                </PhoneHeader>
                <PhoneContent>
                  <div style={{ background: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>Welcome!</h4>
                    <p style={{ fontSize: '0.9rem' }}>Your creative journey continues here.</p>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div style={{ background: 'var(--accent)', borderRadius: '0.5rem', padding: '0.5rem', width: '48%', textAlign: 'center' }}>
                      <FaUsers style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                      <p style={{ fontSize: '0.8rem' }}>Find People</p>
                    </div>
                    <div style={{ background: 'var(--accent)', borderRadius: '0.5rem', padding: '0.5rem', width: '48%', textAlign: 'center' }}>
                      <FaFilm style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                      <p style={{ fontSize: '0.8rem' }}>Projects</p>
                    </div>
                  </div>
                  
                  <div style={{ background: 'rgba(0,0,0,0.05)', padding: '0.75rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                    <h5 style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nearby Events</h5>
                    <div style={{ fontSize: '0.8rem', marginBottom: '0.5rem', padding: '0.5rem', background: 'white', borderRadius: '0.3rem' }}>
                      AI in Film Workshop - Tomorrow
                    </div>
                    <div style={{ fontSize: '0.8rem', padding: '0.5rem', background: 'white', borderRadius: '0.3rem' }}>
                      Atlanta Meetup - Next Week
                    </div>
                  </div>
                </PhoneContent>
              </PhoneScreen>
            </PhoneMockup>
          </motion.div>
        </Container>
      </AppHero>
      
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>
              Solving Real Problems for Creators
            </h2>
          </motion.div>
          
          <FeaturesContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FeatureCard>
                <IconWrapper>
                  <FaUsers />
                </IconWrapper>
                <FeatureTitle>Finding Your People</FeatureTitle>
                <p>
                  Connect with others who share your interests and complement your skills.
                  Build the support network that helps bring your creative vision to life.
                </p>
              </FeatureCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FeatureCard>
                <IconWrapper>
                  <FaFilm />
                </IconWrapper>
                <FeatureTitle>Project Organization</FeatureTitle>
                <p>
                  Keep track of your ideas and works-in-progress with simple tools
                  that help you stay focused on what matters most - your creativity.
                </p>
              </FeatureCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <FeatureCard>
                <IconWrapper>
                  <FaLightbulb />
                </IconWrapper>
                <FeatureTitle>Resource Discovery</FeatureTitle>
                <p>
                  Find tools and techniques that work for your unique approach, whether 
                  they're traditional methods, AI-assisted, or something in between.
                </p>
              </FeatureCard>
            </motion.div>
          </FeaturesContainer>
          
          <div style={{ textAlign: 'center', margin: '3rem 0' }}>
            <h2 style={{ marginBottom: '1rem' }}>Join Our Community Early</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 3rem' }}>
              We're building this together. Sign up to receive updates and be among the first
              to help shape a platform that truly serves the needs of all creators.
            </p>
            
            <SignupForm>
              <SignupTitle>Be Part of What We're Building</SignupTitle>
              
              {!submitted ? (
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="email">Your Email</Label>
                    <EmailInput
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </FormGroup>
                  <SubmitButton primary type="submit">
                    Join the Community
                  </SubmitButton>
                </Form>
              ) : (
                <ThankYouMessage
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>You're in!</h3>
                  <p>We'll keep you updated as we build these community tools together.</p>
                </ThankYouMessage>
              )}
            </SignupForm>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AppPage;