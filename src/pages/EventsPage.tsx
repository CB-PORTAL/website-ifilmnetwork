// Create a new file: src/pages/EventsPage.tsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Section, Container, PageHeader } from '../components/common';
import EventsFeed from '../components/EventsFeed';

const EventsSection = styled.div`
  margin: 2rem 0;
`;

const EventsPage: React.FC = () => {
  return (
    <Section style={{ paddingTop: '8rem' }}>
      <Container>
        <PageHeader
          title="Find Local Events & Opportunities"
          subtitle="Connect with fellow creators and learn new skills in your area"
        />
        
        <EventsSection>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
              We've all been there - finding out about that perfect workshop or meetup a day too late. 
              Use the location filter to discover opportunities near you, whether you're interested 
              in traditional film events, new technology, or both.
            </p>
          </motion.div>
          
          <EventsFeed showFilters={true} limit={9} />
        </EventsSection>
      </Container>
    </Section>
  );
};

export default EventsPage;