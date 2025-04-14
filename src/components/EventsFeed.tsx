// Create a new file: src/components/EventsFeed.tsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaFilm, FaMicrochip } from 'react-icons/fa';
import { Card, Button } from './common';

// Styled components for the Events Feed
const EventsFeedContainer = styled.div`
  margin: 3rem 0;
`;

const EventsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const EventFilters = styled.div`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

interface FilterButtonProps {
  active: boolean;
}

const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'var(--background-alt)'};
  }
`;

const LocationSearch = styled.div`
  position: relative;
  width: 250px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LocationInput = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  padding-left: 2.5rem;
  border: 1px solid var(--border);
  border-radius: 2rem;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const LocationIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
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
  overflow: hidden;
`;

const EventImage = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
  margin: -2rem -2rem 1.5rem;
`;

const EventType = styled.div<{ type: 'film' | 'tech' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.8rem;
  background-color: ${props => props.type === 'film' ? 'var(--primary)' : 'var(--secondary)'};
  color: white;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
  gap: 0.3rem;
`;

const EventTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const EventInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
  color: var(--text-light);
  margin: 1rem 0;
  flex-grow: 1;
`;

const EventActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--text);
  font-size: 0.9rem;
  text-decoration: none;
  
  &:hover {
    color: var(--primary);
  }
`;

const LoadMoreButton = styled(Button)`
  margin: 3rem auto 0;
  display: block;
`;

// Mock event data - in a real implementation, this would come from an API
const mockEvents = [
  {
    id: 1,
    title: "AI in Storytelling Workshop",
    type: "tech" as "tech", // Type assertion to match the EventData interface
    date: "April 15, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Atlanta, GA",
    description: "Explore how AI tools can enhance your creative process with hands-on demonstrations for creators at all experience levels.",
    image: "/images/events/ai-workshop.jpg",
    url: "https://example.com/event1",
    distance: 0.5
  },
  {
    id: 2,
    title: "Atlanta Indie Film Festival",
    type: "film" as "film", // Type assertion to match the EventData interface
    date: "April 18-20, 2025",
    time: "Various Times",
    location: "Plaza Theatre, Atlanta, GA",
    description: "A welcoming three-day celebration featuring films from creators of all backgrounds - with plenty of opportunities to connect with like-minded people.",
    image: "/images/events/film-festival.jpg",
    url: "https://example.com/event2",
    distance: 1.2
  },
  {
    id: 3,
    title: "Virtual Production for Beginners",
    type: "tech" as "tech",
    date: "April 25, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Georgia World Congress Center, Atlanta, GA",
    description: "Learn how accessible virtual production has become for independent creators. No experience necessary - just bring your creativity!",
    image: "/images/events/virtual-production.jpg",
    url: "https://example.com/event3",
    distance: 2.5
  },
  {
    id: 4,
    title: "Documentary Storytelling Workshop",
    type: "film" as "film",
    date: "April 30, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Creative Media Center, Atlanta, GA",
    description: "Discover approachable techniques for telling compelling true stories, whether you are using a smartphone or professional equipment.",
    image: "/images/events/documentary.jpg",
    url: "https://example.com/event4",
    distance: 3.1
  },
  {
    id: 5,
    title: "AI Tools for Creative Projects",
    type: "tech" as "tech",
    date: "May 5, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "Tech Hub, Atlanta, GA",
    description: "A hands-on exploration of how AI can help with editing, color grading, and other post-production tasks - perfect for solo creators.",
    image: "/images/events/post-production.jpg",
    url: "https://example.com/event5",
    distance: 4.2
  },
  {
    id: 6,
    title: "Creative Community Mixer",
    type: "film" as "film",
    date: "May 10, 2025",
    time: "7:00 PM - 10:00 PM",
    location: "Artisan Loft, Atlanta, GA", // Removed apostrophe
    description: "Connect with fellow creators in a relaxed setting. Whether you are just starting out or have been creating for years, all are welcome.",
    image: "/images/events/networking.jpg",
    url: "https://example.com/event6",
    distance: 0.8
  }
];

// Interface for event data
interface EventData {
  id: number;
  title: string;
  type: "film" | "tech"; // Strict union type
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  url: string;
  distance: number;
}

interface EventsFeedProps {
  limit?: number;
  showFilters?: boolean;
  defaultLocation?: string;
}

const EventsFeed: React.FC<EventsFeedProps> = ({ 
  limit = 6, 
  showFilters = true,
  defaultLocation = ''
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'film' | 'tech'>('all');
  const [location, setLocation] = useState(defaultLocation);
  const [visibleCount, setVisibleCount] = useState(limit);
  const [events, setEvents] = useState<EventData[]>([]);
  
  // In a real implementation, this would fetch data from an API
  useEffect(() => {
    // Simulating an API call with a setTimeout
    setTimeout(() => {
      // Apply filters
      let filteredEvents = [...mockEvents] as EventData[];
      
      if (activeFilter !== 'all') {
        filteredEvents = filteredEvents.filter(event => event.type === activeFilter);
      }
      
      if (location) {
        // In a real implementation, you would use geocoding to filter by location
        // For this example, we'll just use the mock distance property
        filteredEvents = filteredEvents.sort((a, b) => a.distance - b.distance);
      }
      
      setEvents(filteredEvents);
    }, 300); // Simulate API delay
  }, [activeFilter, location]);
  
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };
  
  // Only show the number of events specified by visibleCount
  const visibleEvents = events.slice(0, visibleCount);
  
  return (
    <EventsFeedContainer>
      {showFilters && (
        <EventsHeader>
          <EventFilters>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              All Events
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'film'} 
              onClick={() => setActiveFilter('film')}
            >
              <FaFilm size={12} /> Film Events
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'tech'} 
              onClick={() => setActiveFilter('tech')}
            >
              <FaMicrochip size={12} /> Tech Events
            </FilterButton>
          </EventFilters>
          
          <LocationSearch>
            <LocationIcon>
              <FaMapMarkerAlt />
            </LocationIcon>
            <LocationInput 
              type="text" 
              placeholder="Find events near you"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </LocationSearch>
        </EventsHeader>
      )}
      
      <EventsGrid>
        {visibleEvents.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <EventCard>
              <EventImage style={{ backgroundImage: `url(${event.image})` }} />
              <EventType type={event.type}>
                {event.type === 'film' ? (
                  <>
                    <FaFilm size={12} /> Film Event
                  </>
                ) : (
                  <>
                    <FaMicrochip size={12} /> Tech Event
                  </>
                )}
              </EventType>
              <EventTitle>{event.title}</EventTitle>
              
              <EventInfo>
                <FaCalendarAlt />
                <span>{event.date} • {event.time}</span>
              </EventInfo>
              
              <EventInfo>
                <FaMapMarkerAlt />
                <span>{event.location}</span>
              </EventInfo>
              
              <EventDescription>{event.description}</EventDescription>
              
              <EventActions>
                <ExternalLink href={event.url} target="_blank" rel="noopener noreferrer">
                  Event Details <FaExternalLinkAlt size={12} />
                </ExternalLink>
                <Button primary>Join In</Button>
              </EventActions>
            </EventCard>
          </motion.div>
        ))}
      </EventsGrid>
      
      {visibleCount < events.length && (
        <LoadMoreButton onClick={handleLoadMore}>
          Show More Events
        </LoadMoreButton>
      )}
    </EventsFeedContainer>
  );
};

export default EventsFeed;