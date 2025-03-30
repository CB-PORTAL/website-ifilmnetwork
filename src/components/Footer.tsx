import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a202c;
  color: white;
  padding: 4rem 0 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 40px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const FooterLink = styled(Link)`
  color: #cbd5e0;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
`;

const FooterText = styled.p`
  color: #cbd5e0;
  margin-bottom: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.25rem;
  margin-right: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border-top: 1px solid #2d3748;
  margin-top: 3rem;
  text-align: center;
  
  p {
    color: #cbd5e0;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Indie Film Network</FooterTitle>
          <FooterText>
            Connecting filmmakers through our innovative Human/AI/Hybrid framework. Founded in Atlanta & expanding nationwide.
          </FooterText>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" aria-label="YouTube">
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/resources">Resources</FooterLink>
          <FooterLink to="/community">Community</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/resources/ai-filmmaking">AI in Filmmaking</FooterLink>
          <FooterLink to="/resources/funding">Funding Resources</FooterLink>
          <FooterLink to="/resources/distribution">Distribution Strategies</FooterLink>
          <FooterLink to="/resources/tech-innovation">Technology Innovation</FooterLink>
          <FooterLink to="/resources/community">Community Spotlight</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            Atlanta, GA
          </FooterText>
          <FooterText>
            Email: info@ifilmnetwork.com
          </FooterText>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Indie Film Network. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;