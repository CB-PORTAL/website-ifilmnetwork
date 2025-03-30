import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import { Section, Container, PageHeader, Form, FormGroup, Label, Input, Textarea, Button } from '../components/common';

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--primary);
  color: white;
  padding: 3rem;
  border-radius: 0.5rem;
`;

const ContactInfoTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.75rem;
    width: 50px;
    height: 2px;
    background-color: white;
  }
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const InfoIconWrapper = styled.div`
  margin-right: 1rem;
  font-size: 1.25rem;
  min-width: 24px;
`;

const InfoContent = styled.div``;

const InfoText = styled.p`
  margin-bottom: 0.25rem;
`;

const InfoLabel = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  margin-right: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: var(--primary);
  }
`;

const FormSubmitButton = styled(Button)`
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

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    console.log('Form submitted:', formData);
    
    // Show thank you message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide thank you message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <Section style={{ paddingTop: '8rem' }}>
      <Container>
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with the Indie Film Network team"
        />
        
        <ContactContainer>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo>
              <ContactInfoTitle>Contact Information</ContactInfoTitle>
              
              <InfoItem>
                <InfoIconWrapper>
                  <FaMapMarkerAlt />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoText>Atlanta, Georgia</InfoText>
                  <InfoLabel>Our Headquarters</InfoLabel>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIconWrapper>
                  <FaEnvelope />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoText>info@ifilmnetwork.com</InfoText>
                  <InfoLabel>Email Us</InfoLabel>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIconWrapper>
                  <FaPhone />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoText>(404) 555-1234</InfoText>
                  <InfoLabel>Call Us</InfoLabel>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIconWrapper>
                  <FaClock />
                </InfoIconWrapper>
                <InfoContent>
                  <InfoText>Mon-Fri: 9am to 5pm EST</InfoText>
                  <InfoLabel>Business Hours</InfoLabel>
                </InfoContent>
              </InfoItem>
              
              <SocialIcons>
                <SocialIcon href="#" target="_blank" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </SocialIcon>
                <SocialIcon href="#" target="_blank" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </SocialIcon>
                <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </SocialIcon>
                <SocialIcon href="#" target="_blank" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </SocialIcon>
              </SocialIcons>
            </ContactInfo>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Send Us a Message</h3>
            <p style={{ marginBottom: '2rem' }}>
              Have questions about joining IFN? Want to learn more about our Human/AI/Hybrid framework? 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
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
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormSubmitButton primary type="submit">
                Send Message
              </FormSubmitButton>
            </Form>
            
            {isSubmitted && (
              <ThankYouMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Thank You!</h3>
                <p>Your message has been received. We'll get back to you shortly.</p>
              </ThankYouMessage>
            )}
          </motion.div>
        </ContactContainer>
      </Container>
    </Section>
  );
};

export default ContactPage;