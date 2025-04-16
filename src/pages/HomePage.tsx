import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence, AnimationControls } from 'framer-motion';
import { FaFilm, FaRobot, FaLightbulb, FaMagic, FaUserAlt } from 'react-icons/fa';
import { Section, Container, TwoColumns, Button, Grid } from '../components/common';
import AppPromo from '../components/AppPromo';
import EventsFeed from '../components/EventsFeed';

// Define proper types for data structures
interface BubblePosition {
  x: string;
  y: string;
}

interface BubblePositions {
  [key: string]: BubblePosition;
}

interface DecorativeBubble {
  id: string;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface FrameworkItem {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  color: string;
  type: 'large' | 'medium';
}

interface CreatorType {
  text: string;
  class: string;
}

// Particle animation for hero background
const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  
  .particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    pointer-events: none;
    animation: float 8s infinite ease-in-out;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      transform: translateY(-20px) translateX(10px);
      opacity: 0.3;
    }
    75% {
      opacity: 0.1;
    }
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
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
    opacity: 0.2;
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
    opacity: 0.6;
    pointer-events: none;
    z-index: 1;
  }
 
  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const FrameworkBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border-radius: 30px;
  padding: 0.5rem 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
 
  .human {
    color: #C03A28;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(192, 58, 40, 0.5);
  }
 
  .ai {
    color: #2596BE;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(37, 150, 190, 0.5);
  }
 
  .hybrid {
    color: #8D99AE;
    font-weight: 600;
    text-shadow: 0 0 8px rgba(141, 153, 174, 0.5);
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
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
 
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CreatorWord = styled(motion.span)`
  display: inline-block;
  position: relative;
  
  &.filmmaker {
    color: #C03A28;
  }
  
  &.artist {
    color: #2596BE;
  }
  
  &.writer {
    color: #8D99AE;
  }
  
  &.musician {
    color: #e67e22;
  }
  
  &.designer {
    color: #9b59b6;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
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
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%);
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.5s, transform 0.5s;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`;

// Floating Bubbles Framework Section
const FrameworkSection = styled(Section)`
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
  min-height: 800px;
  background: linear-gradient(to bottom, #f8f4e8, #f0ead6);
  
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
`;

const FrameworkTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #192231;
  position: relative;
  z-index: 5;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Container for the bubbles
const BubbleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px; // Increased height for better spacing
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    height: 900px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

// Improve the Base Bubble styling for better visibility
const Bubble = styled(motion.div)`
  position: relative; // Changed from absolute to relative for grid layout
  border-radius: 50%; // Changed back to circle
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow: hidden;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: #192231;
    z-index: 1;
  }
  
  &.human::before {
    background: #C03A28;
  }
  
  &.ai::before {
    background: #2596BE;
  }
  
  &.hybrid::before {
    background: #8D99AE;
  }
  
  &.manifest::before {
    background: #8e44ad;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

// Adjust the different sized bubbles for consistent sizing
const LargeBubble = styled(Bubble)`
  width: 100%;
  height: 100%;
  max-width: 280px;
  max-height: 280px;
  justify-self: center;
  align-self: center;
  
  @media (max-width: 768px) {
    max-width: 250px;
    max-height: 200px;
  }
`;

const MediumBubble = styled(Bubble)`
  width: 100%;
  height: 100%;
  max-width: 260px;
  max-height: 260px;
  justify-self: center;
  align-self: center;
  
  @media (max-width: 768px) {
    max-width: 230px;
    max-height: 180px;
  }
`;

// Update the IconWrapper for better visibility
const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  position: relative;
  z-index: 2;
  
  &.human {
    color: #C03A28;
    background: rgba(192, 58, 40, 0.1);
  }
  
  &.ai {
    color: #2596BE;
    background: rgba(37, 150, 190, 0.1);
  }
  
  &.hybrid {
    color: #8D99AE;
    background: rgba(141, 153, 174, 0.1);
  }
  
  &.manifest {
    color: #8e44ad;
    background: rgba(142, 68, 173, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

// Improve the title and description styling
const BubbleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  text-align: center;
  position: relative;
  z-index: 2;
  color: #192231;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

// Fixed BubbleDescription as motion.div to keep animations
const BubbleDescription = styled(motion.div)`
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
  position: relative;
  z-index: 2;
  color: rgba(0, 0, 0, 0.8); // Darker text for better visibility
  padding: 0 0.5rem;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

// Background decorative bubbles
const DecorativeBubble = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  pointer-events: none;
  z-index: 1;
`;

// Enlarged Bubble component
const EnlargedBubbleOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const EnlargedBubbleContent = styled(motion.div)`
  width: 90%;
  max-width: 500px;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: #192231;
  }
  
  &.human::before {
    background: #C03A28;
  }
  
  &.ai::before {
    background: #2596BE;
  }
  
  &.hybrid::before {
    background: #8D99AE;
  }
  
  &.manifest::before {
    background: #8e44ad;
  }
`;

const EnlargedIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  
  &.human {
    color: #C03A28;
  }
  
  &.ai {
    color: #2596BE;
  }
  
  &.hybrid {
    color: #8D99AE;
  }
  
  &.manifest {
    color: #8e44ad;
  }
`;

const EnlargedBubbleTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
  color: #192231;
`;

const EnlargedBubbleDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

// Reimagined Testimonial Section
const TestimonialSection = styled.div`
  position: relative;
  overflow: hidden;
`;

const TestimonialHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  
  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 5rem;
    font-family: Georgia, serif;
    color: #192231;
    opacity: 0.1;
    line-height: 1;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuoteIcon = styled.div`
  font-size: 2rem;
  color: #192231;
  opacity: 0.3;
  margin-bottom: 1rem;
`;

const Quote = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  line-height: 1.6;
  flex-grow: 1;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 1.2rem;
  margin-top: auto;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f5f5f5;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  &.this-could-be-you {
    background: linear-gradient(135deg, #e0e0e0, #f5f5f5);
    font-size: 0.6rem;
    text-align: center;
    padding: 5px;
  }
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const Author = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
`;

const Role = styled.div`
  color: var(--text-light);
  font-size: 0.85rem;
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
    color: #192231;
    margin-right: 0.5rem;
  }
 
  .plus {
    margin: 0 0.5rem;
    color: #8D99AE;
  }
 
  .future {
    color: #2596BE;
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

// Event section styles
const EventTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  > span {
    margin-left: 8px; /* Add margin to create space after "for" */
  }
`;

// Updated App Promo Section with darker text and better highlights
const EnhancedPromoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #333333; // Darker text color
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  
  strong {
    color: #C03A28;
    font-weight: 700;
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
  }
  
  .highlight {
    background-color: rgba(192, 58, 40, 0.1);
    padding: 0 4px;
    border-radius: 3px;
  }
`;

// Bottom CTA section
const CtaSection = styled(Section)`
  position: relative;
  overflow: hidden;
  
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
  }
`;

// Animation variants
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

// Define the framework bubble data
const frameworkData: FrameworkItem[] = [
  {
    id: 'human',
    title: 'Human Creativity',
    icon: <FaFilm />,
    description: 'We honor the timeless craft of artistic expression across all mediums. Human creativity remains the foundation of all meaningful work, and we celebrate creators who maintain traditional approaches.',
    color: '#C03A28',
    type: 'large'
  },
  {
    id: 'ai',
    title: 'AI Innovation',
    icon: <FaRobot />,
    description: 'We embrace cutting-edge AI tools that enhance the creative process, streamline production, and open new possibilities for independent creators across all disciplines and mediums.',
    color: '#2596BE',
    type: 'medium'
  },
  {
    id: 'hybrid',
    title: 'Hybrid Collaboration',
    icon: <FaLightbulb />,
    description: 'Our unique approach combines human ingenuity with technological advancement, creating a framework that respects artistic vision while amplifying creative capabilities through thoughtful integration.',
    color: '#8D99AE',
    type: 'large'
  },
  {
    id: 'manifest',
    title: 'Manifest Engine',
    icon: <FaMagic />,
    description: 'Our proprietary technology operates on the principle "Ask and it shall be given to you." Simply express what you need—talent, equipment, locations, funding, distribution—and our engine connects you to the perfect resources in real-time.',
    color: '#8e44ad',
    type: 'medium'
  }
];

// FrameworkBubblesSection component
const FrameworkBubblesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [selectedBubble, setSelectedBubble] = useState<FrameworkItem | null>(null);
  const [decorativeBubbles, setDecorativeBubbles] = useState<DecorativeBubble[]>([]);
  const [hoveredBubble, setHoveredBubble] = useState<string | null>(null);
  
  // Generate positions for main bubbles - use fixed grid positions
  const bubblePositions: BubblePositions = {
    human: { x: '25%', y: '25%' },
    ai: { x: '75%', y: '25%' },
    hybrid: { x: '25%', y: '75%' },
    manifest: { x: '75%', y: '75%' }
  };
  
  // Get random position function for bubble animations
  const getRandomPosition = (id: string): BubblePosition => {
    // Use fixed positions instead of random ones to reduce CPU usage
    return bubblePositions[id];
  };
  
  // Animation controls for bubbles
  const controls: {[key: string]: AnimationControls} = {
    human: useAnimation(),
    ai: useAnimation(),
    hybrid: useAnimation(),
    manifest: useAnimation()
  };
  
  // Generate fewer decorative bubbles
  useEffect(() => {
    const generateDecorativeBubbles = () => {
      const bubbles: DecorativeBubble[] = [];
      // Generate only 5 decorative bubbles instead of 15
      for (let i = 0; i < 5; i++) {
        bubbles.push({
          id: `bubble-${i}`,
          size: Math.random() * 40 + 10, // 10px to 50px
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: Math.random() * 5 + 10 // 10s to 15s
        });
      }
      setDecorativeBubbles(bubbles);
    };
    
    generateDecorativeBubbles();
  }, []);
  
  // Measure container size
  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        if (containerRef.current) {
          setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight
          });
        }
      };
      
      updateSize();
      window.addEventListener('resize', updateSize);
      
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);
  
  // Position bubbles in their grid positions once, no continuous animation
  useEffect(() => {
    // Position bubbles in their grid positions once, no continuous animation
    Object.keys(controls).forEach(id => {
      controls[id].start({
        x: bubblePositions[id].x,
        y: bubblePositions[id].y,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      });
    });
  }, []);
  
  // Bubble click handler
  const handleBubbleClick = (bubble: FrameworkItem) => {
    setSelectedBubble(bubble);
  };
  
  // Close enlarged bubble
  const handleClose = () => {
    setSelectedBubble(null);
  };
  
  // Hover handlers
  const handleBubbleHover = (id: string) => {
    setHoveredBubble(id);
  };
  
  const handleBubbleHoverEnd = () => {
    setHoveredBubble(null);
  };
  
  // Get bubble component based on type
  const getBubbleComponent = (item: FrameworkItem) => {
    return item.type === 'large' ? LargeBubble : MediumBubble;
  };
  
  // Render the bubbles
  const renderBubbles = () => {
    return frameworkData.map((item) => {
      const BubbleComponent = getBubbleComponent(item);
      
      return (
        <BubbleComponent
          key={item.id}
          className={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          drag // Enable dragging for interactive movement
          dragConstraints={containerRef} // Keep bubbles within container
          onClick={() => handleBubbleClick(item)}
          style={{ zIndex: 10 }}
        >
          <IconWrapper className={item.id}>
            {item.icon}
          </IconWrapper>
          <BubbleTitle>{item.title}</BubbleTitle>
          <BubbleDescription
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            {item.description.split(' ').slice(0, 15).join(' ')}...
          </BubbleDescription>
        </BubbleComponent>
      );
    });
  };
  
  // Reduce or remove decorative bubbles to improve performance
  const renderDecorativeBubbles = () => {
    // Return fewer decorative bubbles or none at all to improve performance
    return decorativeBubbles.slice(0, 5).map(bubble => (
      <DecorativeBubble
        key={bubble.id}
        style={{
          width: `${bubble.size}px`,
          height: `${bubble.size}px`,
          opacity: 0.2
        }}
        initial={{ x: `${bubble.x}%`, y: `${bubble.y}%`, opacity: 0 }}
        animate={{
          x: [`${bubble.x}%`, `${(bubble.x + 10) % 100}%`],
          y: [`${bubble.y}%`, `${(bubble.y - 10 + 100) % 100}%`],
          opacity: [0.1, 0.2]
        }}
        transition={{
          duration: bubble.duration * 1.5, // Slow down the animation
          delay: bubble.delay,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    ));
  };
  
  // Update the return statement to use grid layout
  return (
    <FrameworkSection>
      <Container>
        <FrameworkTitle>Our Human/AI/Hybrid Framework</FrameworkTitle>
        <BubbleContainer ref={containerRef}>
          {renderDecorativeBubbles()}
          {renderBubbles()}
        </BubbleContainer>
      </Container>
      
      {/* Enlarged bubble overlay */}
      <AnimatePresence>
        {selectedBubble && (
          <EnlargedBubbleOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <EnlargedBubbleContent
              className={selectedBubble.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={handleClose}>×</CloseButton>
              <EnlargedIconWrapper className={selectedBubble.id}>
                {selectedBubble.icon}
              </EnlargedIconWrapper>
              <EnlargedBubbleTitle>{selectedBubble.title}</EnlargedBubbleTitle>
              <EnlargedBubbleDescription>
                {selectedBubble.description}
              </EnlargedBubbleDescription>
            </EnlargedBubbleContent>
          </EnlargedBubbleOverlay>
        )}
      </AnimatePresence>
    </FrameworkSection>
  );
};

const HomePage: React.FC = () => {
  // Create state for cycling through different creator types
  const [creatorIndex, setCreatorIndex] = useState(0);
  const creatorTypes: CreatorType[] = [
    { text: "Creators", class: "" },
    { text: "Filmmakers", class: "filmmaker" },
    { text: "Artists", class: "artist" },
    { text: "Writers", class: "writer" },
    { text: "Musicians", class: "musician" },
    { text: "Designers", class: "designer" }
  ];
  
  // Generate particles for the hero background
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    // Change creator type every 3 seconds
    const interval = setInterval(() => {
      setCreatorIndex((prevIndex) => (prevIndex + 1) % creatorTypes.length);
    }, 3000);
    
    // Generate random particles
    const newParticles: JSX.Element[] = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 10 + 5;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      newParticles.push(
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    setParticles(newParticles);
    
    return () => clearInterval(interval);
  }, [creatorTypes.length]);

  return (
    <>
      <HeroSection>
        <ParticleBackground>
          {particles}
        </ParticleBackground>
        
        <HeroContent>
          <FrameworkBadge
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="human"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Human
            </motion.span>
            <span className="separator">/</span>
            <motion.span 
              className="ai"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              AI
            </motion.span>
            <span className="separator">/</span>
            <motion.span 
              className="hybrid"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Hybrid
            </motion.span>
          </FrameworkBadge>
         
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Where <AnimatePresence mode="wait">
              <CreatorWord
                key={creatorIndex}
                className={creatorTypes[creatorIndex].class}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {creatorTypes[creatorIndex].text}
              </CreatorWord>
            </AnimatePresence> Find What They Need, When They Need It
          </HeroTitle> 
         
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            IFN is your creative resource hub where opportunities{" "}
            <motion.span
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{ 
                opacity: [0.9, 1, 0.9],
                scale: [1, 1.08, 1],
                textShadow: [
                  "0px 0px 0px rgba(192, 58, 40, 0)",
                  "0px 0px 8px rgba(192, 58, 40, 0.5)",
                  "0px 0px 0px rgba(192, 58, 40, 0)"
                ],
                color: ["#C03A28", "#ff5a45", "#C03A28"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                times: [0, 0.5, 1]
              }}
              style={{ 
                fontWeight: "bold", 
                position: "relative", 
                display: "inline-block",
                padding: "0 4px"
              }}
            >
              find you
            </motion.span>. Our platform connects filmmakers, writers, artists, musicians,
            and visionaries with the exact resources they need—whether people,
            tools, spaces, or opportunities—through our Manifest Engine technology.
            Simply ask, and it shall be given to you.
          </HeroSubtitle>
         
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/app" style={{ textDecoration: 'none' }}>
              <StyledButton as={motion.button} variants={ctaVariants} whileHover="hover" primary>
                Connect With IFN
              </StyledButton>
            </Link>
            <Link to="/about" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <StyledButton as={motion.button} variants={ctaVariants} whileHover="hover">
                Learn More
              </StyledButton>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection> 

      {/* Replace Camera Lens Framework with Floating Bubbles */}
      <FrameworkBubblesSection />
     
      <Section bgColor="var(--background-alt)">
        <Container>
          <BrandStatement>
            <StatementTitle>
              <span className="traditional">Resource Connection</span>
              <span className="plus">+</span>
              <span className="future">Creative Empowerment</span>
            </StatementTitle>
           
            <StatementText>
              At IFN, we believe that creativity thrives when resources flow freely. Our platform doesn't just connect you with tools and talents—it <motion.span
                initial={{ fontWeight: "normal" }}
                animate={{ fontWeight: "bold" }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              >anticipates your needs</motion.span> and brings opportunities directly to you. The Manifest Engine powers this ecosystem, ensuring that every creator can access exactly what they need at the perfect moment in their journey, when they need it.
            </StatementText>
           
            <StatementCTA>
              <Link to="/about" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button primary>Our Approach</Button>
              </Link>
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
                Founded at the intersection of traditional creative practices and cutting-edge AI technology, Indie Film Network is revolutionizing how independent projects are conceived, resourced, and brought to life.
              </p>
              <p>
                In 2025, we're building a comprehensive ecosystem where filmmakers, writers, musicians, visual artists, and creators of all kinds can seamlessly access the exact resources they need—when they need them—through our Manifest Engine technology.
              </p> 
              <Link to="/about" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button primary style={{ marginTop: '1rem' }}>
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
           
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src="/images/branding/human-ai-filmmaker.png" alt="Human-AI hybrid filmmaker representing IFN's approach" />
            </motion.div>
          </TwoColumns>
        </Container>
      </Section>
     
      <Section>
        <Container>
          <TestimonialSection>
            <TestimonialHeader>
              <h2 style={{ marginBottom: '0.5rem' }}>
                What <AnimatePresence mode="wait">
                  <CreatorWord
                    key={creatorIndex}
                    className={creatorTypes[creatorIndex].class}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {creatorTypes[creatorIndex].text}
                  </CreatorWord>
                </AnimatePresence> Are Saying
              </h2>
              <p style={{ opacity: 0.7, marginBottom: '3rem' }}>
                See how IFN could work for you - these examples show how our platform connects resources to those who need them
              </p>
            </TestimonialHeader>
           
            <Grid>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TestimonialCard>
                  <Quote>
                    IFN Connect transformed my documentary project. I asked for post-production help and within hours was connected with an amazing editor who shared my vision. The platform understood exactly what I needed before I fully knew myself.
                  </Quote>
                  <AuthorSection>
                    <AuthorAvatar className="this-could-be-you">
                      Find yourself here
                    </AuthorAvatar>
                    <AuthorInfo>
                      <Author>Documentary Director</Author>
                      <Role>Your story matters</Role>
                    </AuthorInfo>
                  </AuthorSection>
                </TestimonialCard>
              </motion.div>
             
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TestimonialCard>
                  <Quote>
                    As a musician looking to score indie films, IFN connected me with three directors seeking original compositions. The resource-matching is uncanny—it's like the platform reads your mind and delivers exactly what you're looking for.
                  </Quote>
                  <AuthorSection>
                    <AuthorAvatar className="this-could-be-you">
                    Your story is next
                    </AuthorAvatar>
                    <AuthorInfo>
                      <Author>Composer</Author>
                      <Role>This could be you</Role>
                    </AuthorInfo>
                  </AuthorSection>
                </TestimonialCard>
              </motion.div>
             
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TestimonialCard>
                  <Quote>
                    I needed a rare vintage camera lens on short notice with zero budget. I put the request into the IFN app and was connected with another filmmaker willing to loan it for credit. This platform makes impossible projects possible.
                  </Quote>
                  <AuthorSection>
                    <AuthorAvatar className="this-could-be-you">
                      Step into this role
                    </AuthorAvatar>
                    <AuthorInfo>
                      <Author>Independent Filmmaker</Author>
                      <Role>Your vision realized</Role>
                    </AuthorInfo>
                  </AuthorSection>
                </TestimonialCard>
              </motion.div>
            </Grid>
          </TestimonialSection>
        </Container>
      </Section>
     
      <Section bgColor="var(--background)">
        <Container>
          <AppPromo />
          <EnhancedPromoText>
            Opportunities <motion.span
              initial={{ textShadow: "0 0 0px rgba(192, 58, 40, 0)" }}
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(192, 58, 40, 0)",
                  "0 0 10px rgba(192, 58, 40, 0.7)",
                  "0 0 0px rgba(192, 58, 40, 0)"
                ],
                color: ["#C03A28", "#ff5a45", "#C03A28"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                times: [0, 0.5, 1]
              }}
              style={{ 
                fontWeight: "700", 
                position: "relative",
                display: "inline-block"
              }}
            >
              find you faster
            </motion.span> than you can find them. Our system works tirelessly to connect you with exactly what you need, often <motion.span
              initial={{ textShadow: "0 0 0px rgba(192, 58, 40, 0)" }}
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(192, 58, 40, 0)",
                  "0 0 10px rgba(192, 58, 40, 0.7)",
                  "0 0 0px rgba(192, 58, 40, 0)"
                ],
                color: ["#C03A28", "#ff5a45", "#C03A28"]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2.5,
                times: [0, 0.5, 1],
                delay: 1.2
              }}
              style={{ 
                fontWeight: "700", 
                position: "relative",
                display: "inline-block"
              }}
            >
              before you even ask
            </motion.span>. Stay ahead of the curve as resources, collaborators, and opportunities constantly flow to your creative projects.
          </EnhancedPromoText>
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
            <EventTitle>
              Events Near You for
              <AnimatePresence mode="wait">
                <CreatorWord
                  key={creatorIndex}
                  className={creatorTypes[creatorIndex].class}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {creatorTypes[creatorIndex].text}
                </CreatorWord>
              </AnimatePresence>
            </EventTitle>
            <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Discover opportunities to connect, learn, and share with other creative minds in your area.
            </p>
          </motion.div>
         
          <EventsFeed limit={3} showFilters={false} />
         
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/events" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button>
                See All Events
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      <CtaSection bgColor="var(--primary)" style={{ color: 'white' }}>
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
              Connect with resources that <motion.span
                animate={{ 
                  fontWeight: [400, 700, 400],
                  color: ["#ffffff", "#e0e0e0", "#ffffff"],
                  textShadow: [
                    "0 0 0px rgba(255, 255, 255, 0)",
                    "0 0 12px rgba(220, 220, 220, 0.8)",
                    "0 0 0px rgba(255, 255, 255, 0)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              >actively find you</motion.span>. Access our Manifest Engine to get exactly what you need for your creative projects. Join thousands of creators who are manifesting their visions through the power of our Human/AI/Hybrid ecosystem.
            </p>
            <Link to="/community" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Button as={motion.button} variants={ctaVariants} whileHover="hover" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 2rem' }}>
                Join Our Community
              </Button>
            </Link>
          </motion.div>
        </Container>
      </CtaSection>
    </>
  );
};

export default HomePage;