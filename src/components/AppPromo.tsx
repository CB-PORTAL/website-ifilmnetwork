import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMobile, FaQrcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from './common';
import { QRCodeSVG } from 'qrcode.react'; // Import QR code component

// Styled components for the App Promo section
const PromoContainer = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 1rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
 
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
 
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/textures/film-grain.png');
    opacity: 0.05;
    pointer-events: none;
    z-index: 1;
  }
`;

const PromoContent = styled.div`
  color: white;
  flex: 1;
  position: relative;
  z-index: 2;
 
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const PromoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PromoDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  max-width: 600px;
`;

const PromoQR = styled.div`
  background: white;
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
 
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const QRPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--primary);
`;

const EmailForm = styled.form`
  display: flex;
  max-width: 500px;
 
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const EmailInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 100%;
  font-size: 1rem;
 
  &:focus {
    outline: none;
  }
 
  @media (max-width: 768px) {
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const SubmitButton = styled(Button)`
  border-radius: 0 0.5rem 0.5rem 0;
  margin: 0;
  padding: 0.75rem 1.5rem;
  background-color: var(--hybrid);
 
  &:hover {
    background-color: var(--accent);
    color: var(--text);
  }
 
  @media (max-width: 768px) {
    border-radius: 0.5rem;
    width: 100%;
  }
`;

const ThankYouMessage = styled(motion.div)`
  background-color: var(--accent);
  color: var(--text);
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-align: center;
`;

const AppPromo: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Get the current domain for the QR code
  const appUrl = `${window.location.origin}/app`;
 
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
    <PromoContainer>
      <PromoContent>
        <PromoTitle>Try IFN: Create, Collaborate & Innovate.</PromoTitle>
        <PromoDescription> 
          We're building tools that connect you with other creators and opportunities nearby.
          Whether you're looking for collaborators or just want to find local events,
          we want to make these connections easier.
        </PromoDescription>
       
        {!submitted ? (
          <>
            <EmailForm onSubmit={handleSubmit}>
              <EmailInput
                type="email"
                placeholder="Your email to join our early access community"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> 
              <SubmitButton primary type="submit">Be Part of It</SubmitButton>
            </EmailForm>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: '0.8' }}>
              Or scan the QR code to learn more about what we're building
            </p>
          </>
        ) : (
          <ThankYouMessage
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Thanks for joining! We'll let you know when community resources are ready.
          </ThankYouMessage>
        )}
      </PromoContent>
     
      <Link to="/app">
        <PromoQR>
          <QRCodeSVG 
            value={appUrl}
            size={118}
            bgColor={"#ffffff"}
            fgColor={"#333333"}
            level={"L"}
            includeMargin={false}
          />
        </PromoQR>
      </Link>
    </PromoContainer>
  );
};

export default AppPromo;