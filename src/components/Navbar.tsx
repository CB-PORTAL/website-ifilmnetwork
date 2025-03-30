import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  display: flex;
  align-items: center;
  
  span {
    color: var(--primary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

interface NavMenuProps {
  isOpen: boolean;
}

const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 2rem;
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
    visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

interface NavItemProps {
  active: boolean;
}

const NavItem = styled.li<NavItemProps>`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  
  a {
    color: ${({ active }) => active ? 'var(--primary)' : 'var(--text)'};
    font-weight: ${({ active }) => active ? '600' : '400'};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: ${({ active }) => active ? '100%' : '0'};
      height: 2px;
      background-color: var(--primary);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
`;

const CTAButton = styled(Link)`
  padding: 0.5rem 1.25rem;
  background-color: var(--primary);
  color: white !important;
  border-radius: 0.375rem;
  font-weight: 600;
  margin-left: 1rem;
  
  &:hover {
    background-color: var(--primary-dark);
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    display: inline-block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  return (
    <NavbarContainer style={{ boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <Nav>
        <Logo to="/">
          <span>IFN</span> Indie Film Network
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        
        <NavMenu isOpen={isOpen}>
          <NavItem active={location.pathname === '/'}>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem active={location.pathname === '/about'}>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem active={location.pathname === '/resources'}>
            <Link to="/resources">Resources</Link>
          </NavItem>
          <NavItem active={location.pathname === '/community'}>
            <Link to="/community">Community</Link>
          </NavItem>
          <NavItem active={location.pathname === '/contact'}>
            <Link to="/contact">Contact</Link>
          </NavItem>
          <CTAButton to="/community">Join IFN</CTAButton>
        </NavMenu>
      </Nav>
    </NavbarContainer>
  );
};

export default Navbar;