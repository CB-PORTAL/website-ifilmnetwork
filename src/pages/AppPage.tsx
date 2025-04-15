import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { 
  FaMobile, FaFilm, FaUsers, FaLightbulb, FaMapMarkerAlt, 
  FaCalendarAlt, FaRobot, FaCube, FaUserFriends, 
  FaBell, FaMusic, FaPencilAlt, FaPalette, FaCamera, FaSearch
} from 'react-icons/fa';
import { Section, Container, Button, Form, FormGroup, Label, Input } from '../components/common';

// Styled components for the App Page
const AppHero = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 8rem 0 5rem;
  color: white;
  position: relative;
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
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--primary) 25%, var(--secondary) 50%, var(--primary) 75%, var(--accent) 100%);
  }
`;

const AppContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const AppTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  
  span {
    display: inline-block;
  }
  
  .connecting {
    background: linear-gradient(to right, var(--accent), #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const AppSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  opacity: 0.9;
  text-align: center;
  line-height: 1.7;
`;

const MockupContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  margin: 0 auto;
  z-index: 10;
`;

const PhoneMockup = styled.div`
  width: 300px;
  height: 600px;
  background-color: white;
  border-radius: 2rem;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
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
    z-index: 10;
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
  
  .app-title {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  
  .icon {
    margin-right: 0.5rem;
  }
`;

const PhoneContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
`;

const WelcomeCard = styled(motion.div)`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    margin: 0;
    opacity: 0.9;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ActionButton = styled(motion.div)`
  background-color: var(--accent);
  border-radius: 0.5rem;
  padding: 0.75rem 0.5rem;
  width: 48%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary);
  }
  
  p {
    font-size: 0.8rem;
    margin: 0;
    font-weight: 600;
    color: var(--text);
  }
`;

const EventsSection = styled.div`
  background: rgba(0, 0, 0, 0.05);
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  
  h5 {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
  }
`;

const EventItem = styled(motion.div)`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 0.3rem;
  color: var(--text);
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FloatingCircles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
`;

// Creative silhouettes in the background
const SilhouettesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 250px;
  z-index: 1;
  overflow: hidden;
  opacity: 0.15;
`;

const CreatorSilhouette = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 60px;
  height: 120px;
  background: rgba(255, 255, 255, 0.8);
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: bottom;
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background: var(--background);
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(192, 58, 40, 0.1) 0%, rgba(37, 150, 190, 0.1) 100%);
  color: var(--primary);
  font-size: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
`;

const FeatureDescription = styled.p`
  color: var(--text-light);
  line-height: 1.7;
`;

const ComingSoonSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--accent) 0%, var(--background) 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const ComingSoonBadge = styled(motion.div)`
  display: inline-block;
  background: var(--primary);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(192, 58, 40, 0.3);
`;

const ComingSoonTitle = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ComingSoonText = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const EmailSignupForm = styled(motion.div)`
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const EmailInput = styled(Input)`
  margin-bottom: 1rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background-color: #e6f7e6;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;

// Animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const mockupVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15, 
      delay: 0.5 
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
  }
};

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      delay: 0.1 * i
    }
  })
};

// Creator silhouette data for animation
const creatorTypes = [
  {
    icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath d='M352 96V99.56C352 115.3 339.3 128 323.6 128H304V169.1C358.2 179.1 400 228.5 400 288V448C400 483.3 371.3 512 336 512H112C76.65 512 48 483.3 48 448V288C48 228.5 89.8 179.1 144 169.1V128H124.4C108.7 128 96 115.3 96 99.56V96C96 42.98 149 0 224 0C299 0 352 42.98 352 96zM216 140.9C218.7 140.3 221.3 140.3 224 140.9C226.7 141.4 229.3 141.4 232 140.9V128H216V140.9zM144 288V448C144 448 144 464 176 464H272C304 464 304 448 304 448V288C304 252.7 275.3 224 240 224H208C172.7 224 144 252.7 144 288zM256 384C256 366.3 241.7 352 224 352C206.3 352 192 366.3 192 384C192 401.7 206.3 416 224 416C241.7 416 256 401.7 256 384z'/%3E%3C/svg%3E\")",
    delay: 0,
    duration: 30,
    direction: 1
  },
  {
    icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z'/%3E%3C/svg%3E\")",
    delay: 5,
    duration: 25,
    direction: -1
  },
  {
    icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM48 368v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H416zM48 240v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16H416zM48 112v32c0 8.8 7.2 16 16 16H96c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H416zM160 128v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H192c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H192z'/%3E%3C/svg%3E\")",
    delay: 8,
    duration: 28,
    direction: 1
  },
  {
    icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath d='M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 113.2 448 134.8 448H320c0-44.8 20.2-84.7 51.3-111.1c-18.8-2.6-36.3-9.3-51.6-19.2z'/%3E%3C/svg%3E\")",
    delay: 3,
    duration: 26,
    direction: -1
  },
  {
    icon: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z'/%3E%3C/svg%3E\")",
    delay: 10,
    duration: 32,
    direction: 1
  }
];

const AppPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted for app notification:', email);
    setSubmitted(true);
    setEmail('');
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  // Split the title into individual letters for animation
  const titleText = "The Future of Creating is Connecting";
  const titleLetters = titleText.split(" ").map(word => {
    return {
      word,
      letters: word.split("")
    };
  });
  
  const featureItems = [
    {
      icon: <FaUserFriends />,
      title: "Discover Creative Partners",
      description: "Find directors, cinematographers, writers, artists, musicians and other creative professionals who share your vision. Build your dream team locally or connect virtually."
    },
    {
      icon: <FaCalendarAlt />,
      title: "Local & Virtual Events",
      description: "Never miss another workshop, meetup, or creative festival. Get personalized notifications for events that match your interests and location."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location-Based Networking",
      description: "Connect with nearby creators for in-person collaboration, equipment sharing, and local support networks across all creative disciplines."
    },
    {
      icon: <FaRobot />,
      title: "AI-Enhanced Creativity",
      description: "Access cutting-edge AI tools designed for all types of creators, with ethical guidelines that respect your unique creative vision and artistic integrity."
    },
    {
      icon: <FaLightbulb />,
      title: "Resource Sharing",
      description: "Discover, share, and save articles, tutorials, and inspiration for your next project. Build a personalized library of creative resources across multiple disciplines."
    },
    {
      icon: <FaCube />,
      title: "Human/AI/Hybrid Framework",
      description: "Explore our innovative approach that blends traditional creativity with new technology, preserving what makes storytelling and artistic expression meaningful."
    }
  ];
  
  // Random positions for floating circles
  const circles = Array.from({ length: 15 }, (_, i) => ({
    size: Math.random() * 200 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));
  
  return (
    <>
      <AppHero>
        <FloatingCircles>
          {circles.map((circle, index) => (
            <Circle
              key={index}
              style={{
                width: circle.size,
                height: circle.size,
                left: `${circle.x}%`,
                top: `${circle.y}%`
              }}
              animate={{
                x: [0, -20, 20, -10, 10, 0],
                y: [0, 20, -20, 10, -10, 0]
              }}
              transition={{
                duration: circle.duration,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </FloatingCircles>
        
        <SilhouettesContainer>
          {creatorTypes.map((creator, index) => (
            <CreatorSilhouette
              key={index}
              style={{ 
                maskImage: creator.icon,
                left: `${(index * 20) + 5}%`,
              }}
              animate={{
                x: [0, creator.direction * 100, 0],
                y: [0, -10, 0],
              }}
              transition={{
                x: {
                  duration: creator.duration,
                  repeat: Infinity,
                  delay: creator.delay,
                  ease: "linear"
                },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: creator.delay,
                }
              }}
            />
          ))}
        </SilhouettesContainer>
        
        <AppContent>
          <AppTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {titleLetters.map((word, wordIndex) => (
              <React.Fragment key={`word-${wordIndex}`}>
                {wordIndex > 0 && " "}
                <span className={wordIndex === 3 ? "connecting" : ""}>
                  {word.letters.map((letter, letterIndex) => (
                    <motion.span
                      key={`letter-${wordIndex}-${letterIndex}`}
                      variants={letterVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </React.Fragment>
            ))}
          </AppTitle>
          
          <AppSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Introducing a revolutionary app that bridges traditional artistic methods with AI innovation. 
            Build your network, discover opportunities, and bring your creative vision to life—all in one place.
          </AppSubtitle>
          
          <MockupContainer
            variants={mockupVariants}
            initial="hidden"
            animate="visible"
          >
            <PhoneMockup>
              <PhoneScreen>
                <PhoneHeader>
                  <div className="app-title">
                    <FaMobile className="icon" />
                    <span>IFN Connect</span>
                  </div>
                  <FaBell />
                </PhoneHeader>
                <PhoneContent>
                  <WelcomeCard
                    animate={{
                      boxShadow: ["0px 4px 12px rgba(0,0,0,0.15)", "0px 10px 25px rgba(0,0,0,0.25)", "0px 4px 12px rgba(0,0,0,0.15)"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  >
                    <h4>What are you looking for today?</h4>
                    <div style={{
                      display: 'flex',
                      marginTop: '0.75rem',
                      background: 'rgba(255,255,255,0.2)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem'
                    }}>
                      <FaSearch style={{ color: 'white', marginRight: '0.5rem' }} />
                      <p style={{ opacity: 0.8, margin: 0 }}>Search for resources, people, events...</p>
                    </div>
                  </WelcomeCard>
                  
                  <div style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    color: 'var(--text)', 
                    margin: '1rem 0 0.5rem' 
                  }}>
                    SUGGESTED FOR YOU
                  </div>
                  
                  <ActionButtons>
                    <ActionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPalette />
                      <p>Visual Artists</p>
                    </ActionButton>
                    <ActionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaFilm />
                      <p>Film Projects</p>
                    </ActionButton>
                  </ActionButtons>
                  
                  <EventsSection>
                    <h5>Personalized For You</h5>
                    <EventItem
                      animate={{ backgroundColor: ["#ffffff", "#fff8f0", "#ffffff"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div style={{ fontWeight: 600 }}>AI in Storytelling Workshop</div>
                      <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Perfect match for your interests</div>
                    </EventItem>
                    <EventItem>
                      <div style={{ fontWeight: 600 }}>Find a Composer Near You</div>
                      <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>3 new matches this week</div>
                    </EventItem>
                  </EventsSection>
                  
                  <EventsSection>
                    <h5>Resources You'll Love</h5>
                    <EventItem>
                      <div style={{ fontWeight: 600 }}>Hybrid Creation Models Guide</div>
                      <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>Trending in your network</div>
                    </EventItem>
                  </EventsSection>
                </PhoneContent>
              </PhoneScreen>
            </PhoneMockup>
          </MockupContainer>
        </AppContent>
      </AppHero>
      
      <FeaturesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powered by Manifest <span style={{ position: 'relative', display: 'inline-block' }}>
              Engine
              <sup style={{ 
                position: 'absolute',
                top: '-0.4em',
                right: '-0.15em',
                fontSize: '0.55em',
                lineHeight: 1,
                fontWeight: 'bold',
                transform: 'none',
                color: '#333333',
                textShadow: '0px 0px 1px rgba(0,0,0,0.5)',
               }}>™</sup>
            </span>
          </SectionTitle>
          
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.7' }}>
              IFN Connect is more than a platform—it's your intelligent guide to the creation industry, bringing 
              you exactly what you need, when you need it. From collaborators to resources, opportunities to insights, 
              it's the powerhouse that accelerates your creative journey.
            </p>
          </div>
          
          <FeaturesGrid>
            {featureItems.map((feature, index) => (
              <FeatureCard
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>
      
      <ComingSoonSection>
        <Container>
          <ComingSoonBadge
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Coming Soon
          </ComingSoonBadge>
          
          <ComingSoonTitle
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            Be Among the First to Experience It
          </ComingSoonTitle>
          
          <ComingSoonText
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            The IFN App is currently in development, bringing together creators of all disciplines—filmmakers, 
            writers, artists, musicians, designers, and more—in a revolutionary platform that celebrates both 
            artistic tradition and technological innovation. Sign up now to join our exclusive beta and help 
            shape the future of creative collaboration.
          </ComingSoonText>
          
          <EmailSignupForm
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="email">Get Early Access</Label>
                  <EmailInput
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                </FormGroup>
                <SubmitButton primary type="submit">
                  Join the Waitlist
                </SubmitButton>
              </Form>
            ) : (
              <ThankYouMessage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>You're in!</h3>
                <p>We'll notify you when the IFN App is ready. Get ready to revolutionize your creative journey!</p>
              </ThankYouMessage>
            )}
          </EmailSignupForm>
        </Container>
      </ComingSoonSection>
    </>
  );
};

export default AppPage;