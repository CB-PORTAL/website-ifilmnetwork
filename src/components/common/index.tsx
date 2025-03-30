import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Section component
interface SectionProps {
  bgColor?: string;
  children: React.ReactNode;
  id?: string;
}

export const Section = styled.section<{ bgColor?: string }>`
  padding: 5rem 0;
  background-color: ${props => props.bgColor || 'var(--background)'};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

// Page Header component
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 1.5rem auto 0;
`;

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </Title>
      {subtitle && (
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </Subtitle>
      )}
    </HeaderContainer>
  );
};

// Card component
interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Card = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

// Button components
interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = styled.button<{ primary?: boolean }>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary)'};
  border: ${props => props.primary ? 'none' : '2px solid var(--primary)'};
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-dark)' : 'var(--primary)'};
    color: ${props => !props.primary ? 'white' : ''};
  }
`;

// Grid layout components
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

// Two Column layout
export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Form components
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;