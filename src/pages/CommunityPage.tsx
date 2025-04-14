import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaGlobe, FaCalendarAlt, FaComments } from 'react-icons/fa';
import { Section, Container, PageHeader, Card, Button, Form, FormGroup, Label, Input } from '../components/common';

const JoinSection = styled.div`
  margin-bottom: 5rem;
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(Card)`
  text-align: center;
  padding: 2.5rem 2rem;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BenefitDescription = styled.p`
  color: var(--text-light);
`;

const JoinFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormSubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
`;

const EventsSection = styled.div`
  margin-bottom: 5rem;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EventCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const EventDate = styled.div`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const EventLocation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--text-light);
  
  svg {
    margin-right: 0.5rem;
  }
`;

const EventTime = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--text-light);
  
  svg {
    margin-right: 0.5rem;
  }
`;

const EventDescription = styled.p`
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TestimonialsSection = styled.div`
  margin-bottom: 5rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(Card)`
  position: relative;
  padding-top: 3rem;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -40px;
  left: 2rem;
  border: 3px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: var(--background-alt);
  z-index: 0;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Author = styled.div`
  font-weight: 600;
`;

const Role = styled.div`
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: #e6f7e6;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

const CommunityPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interests: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server
    console.log('Join form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      interests: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <Section style={{ paddingTop: '8rem' }}>
      <Container>
        <PageHeader
          title="Join Our Community"
          subtitle="Connect with fellow filmmakers and embrace the future of independent cinema"
        />
        
        <JoinSection>
          <BenefitsContainer>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BenefitCard>
                <IconWrapper>
                  <FaUsers />
                </IconWrapper>
                <BenefitTitle>Network & Collaborate</BenefitTitle>
                <BenefitDescription>
                  Connect with directors, cinematographers, editors, and other film professionals to form your dream team.
                </BenefitDescription>
              </BenefitCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BenefitCard>
                <IconWrapper>
                  <FaLightbulb />
                </IconWrapper>
                <BenefitTitle>Access Innovation</BenefitTitle>
                <BenefitDescription>
                  Get early access to cutting-edge tools, techniques, and resources developed through our Human/AI/Hybrid framework.
                </BenefitDescription>
              </BenefitCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BenefitCard>
                <IconWrapper>
                  <FaHandshake />
                </IconWrapper>
                <BenefitTitle>Growth Opportunities</BenefitTitle>
                <BenefitDescription>
                  Participate in exclusive events, workshops, and mentorship programs designed to advance your filmmaking career.
                </BenefitDescription>
              </BenefitCard>
            </motion.div>
          </BenefitsContainer>
          
          <JoinFormContainer>
            <FormTitle>Become a Member</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="role">Your Role in Filmmaking</Label>
                <Input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="e.g. Director, Cinematographer, Writer"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="interests">Areas of Interest</Label>
                <Input
                  type="text"
                  id="interests"
                  name="interests"
                  placeholder="e.g. AI in Post-Production, Virtual Production"
                  value={formData.interests}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormSubmitButton primary type="submit">
                Join the Community
              </FormSubmitButton>
            </Form>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Welcome to IFN!</h3>
                <p>Your application has been received. We'll be in touch soon with next steps.</p>
              </SuccessMessage>
            )}
          </JoinFormContainer>
        </JoinSection>
        
        <EventsSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Upcoming Events</h2>
          </motion.div>
          
          <EventsGrid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <EventCard>
                <EventDate>April 15, 2025</EventDate>
                <EventTitle>AI-Assisted Filmmaking Workshop</EventTitle>
                <EventLocation>
                  <FaGlobe /> Virtual Event
                </EventLocation>
                <EventTime>
                  <FaCalendarAlt /> 2:00 PM - 4:00 PM EST
                </EventTime>
                <EventDescription>
                  Join us for a hands-on workshop exploring practical applications of AI tools in independent filmmaking, from pre-production to distribution.
                </EventDescription>
                <Button primary>Register</Button>
              </EventCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <EventCard>
                <EventDate>April 22, 2025</EventDate>
                <EventTitle>Atlanta Filmmaker Meetup</EventTitle>
                <EventLocation>
                  <FaGlobe /> Atlanta, GA
                </EventLocation>
                <EventTime>
                  <FaCalendarAlt /> 7:00 PM - 9:30 PM EST
                </EventTime>
                <EventDescription>
                  Network with local filmmakers and industry professionals in a casual setting. Share ideas, discuss projects, and form new collaborations.
                </EventDescription>
                <Button primary>RSVP</Button>
              </EventCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <EventCard>
                <EventDate>May 5-7, 2025</EventDate>
                <EventTitle>Future of Film Summit 2025</EventTitle>
                <EventLocation>
                  <FaGlobe /> Virtual Conference
                </EventLocation>
                <EventTime>
                  <FaCalendarAlt /> 9:00 AM - 5:00 PM EST (Daily)
                </EventTime>
                <EventDescription>
                  A three-day virtual summit featuring keynotes, panels, and masterclasses on emerging technologies and innovative storytelling in independent cinema.
                </EventDescription>
                <Button primary>Learn More</Button>
              </EventCard>
            </motion.div>
          </EventsGrid>
        </EventsSection>
        
        <TestimonialsSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 style={{ textAlign: 'center', marginBottom: '5rem' }}>Community Voices</h2>
          </motion.div>
          
          <TestimonialsGrid>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <Avatar src="/images/testimonial-1.jpg" alt="David Rodriguez" />
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  IFN has completely transformed my approach to filmmaking. The community helped me embrace AI tools that streamlined my post-production workflow, saving me both time and money.
                </Quote>
                <Author>David Rodriguez</Author>
                <Role>Independent Director</Role>
              </TestimonialCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <Avatar src="/images/testimonial-2.jpg" alt="Jennifer Park" />
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  As a cinematographer, I was skeptical about how AI could enhance my work. Through IFN's workshops, I discovered tools that complement my visual style while expanding creative possibilities.
                </Quote>
                <Author>Jennifer Park</Author>
                <Role>Cinematographer</Role>
              </TestimonialCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TestimonialCard>
                <Avatar src="/images/testimonial-3.jpg" alt="Marcus Thompson" />
                <QuoteIcon>"</QuoteIcon>
                <Quote>
                  The connections I've made through IFN have been game-changing. I found my producer, DP, and editor here—now we're about to premiere our first feature at a major festival!
                </Quote>
                <Author>Marcus Thompson</Author>
                <Role>Writer/Director</Role>
              </TestimonialCard>
            </motion.div>
          </TestimonialsGrid>
        </TestimonialsSection>

        <Section bgColor="var(--background-alt)">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Connect Online Too</h2>
            </motion.div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
              gap: '2rem',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <Card>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'var(--primary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>Indie Film Network (Official)</h3>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Our main community group open to all creative people - from first-timers to veterans.
                    Ask questions, share what you've learned, and find collaborators.
                  </p>
                  <Button primary as="a" href="https://www.facebook.com/groups/indiefilmnetwork" target="_blank">
                    Join Group
                  </Button>
                </div>
              </Card>
              
              <Card>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'var(--secondary)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '2rem',
                    color: 'white'
                  }}>
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  <h3 style={{ marginBottom: '1rem' }}>IFN App (Official)</h3>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Help us build better tools for our community. Share your ideas, test early features,
                    and connect with others who are passionate about creating together.
                  </p>
                  <Button 
                    style={{ background: 'var(--secondary)', borderColor: 'var(--secondary)' }} 
                    primary 
                    as="a" 
                    href="https://www.facebook.com/groups/ifnapp" 
                    target="_blank"
                  >
                    Join App Group
                  </Button>
                </div>
              </Card>
            </div>
          </Container>
        </Section>
        
        <Section bgColor="var(--primary)" style={{ color: 'white', margin: '-5rem -2rem 0', padding: '5rem 2rem' }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <h2>Join the Conversation</h2>
              <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                Connect with other IFN members in our online forums and social channels. Share your experiences, ask questions, and stay up-to-date on the latest community news.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Button as="a" href="#" style={{ background: 'white', color: 'var(--primary)' }}>
                  <FaComments style={{ marginRight: '0.5rem' }} /> Discussion Forums
                </Button>
                <Button as="a" href="#" style={{ borderColor: 'white', color: 'white' }}>
                  Join Discord
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </Container>
    </Section>
  );
};

export default CommunityPage;