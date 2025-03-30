import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch, FaFilm, FaRobot, FaChartLine, FaUsers, FaCoins } from 'react-icons/fa';
import { Section, Container, PageHeader, Card, Button } from '../components/common';

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 4rem;
`;

const SearchForm = styled.form`
  display: flex;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.25rem;
  cursor: pointer;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

interface TabButtonProps {
  active: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'var(--primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-dark)' : 'var(--background-alt)'};
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ResourceTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ResourceTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: var(--background-alt);
  color: var(--text-light);
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ResourceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ResourceDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const LoadMoreButton = styled(Button)`
  margin: 3rem auto 0;
  display: block;
`;

// Resource data - in a real app, this would come from an API
const resourcesData = [
  {
    id: 1,
    title: "5 AI Tools Revolutionizing Indie Film Pre-Production",
    description: "Discover how AI-powered tools are transforming script analysis, storyboarding, and casting processes for independent filmmakers.",
    category: "ai-filmmaking",
    tags: ["AI", "Pre-Production", "Scriptwriting"],
    date: "March 15, 2025"
  },
  {
    id: 2,
    title: "How to Secure Indie Film Funding in 2025",
    description: "A comprehensive guide to the latest funding opportunities for independent filmmakers, including grants, crowdfunding, and investor strategies.",
    category: "funding",
    tags: ["Funding", "Finance", "Production"],
    date: "March 10, 2025"
  },
  {
    id: 3,
    title: "Hybrid Distribution Models for Independent Cinema",
    description: "Explore innovative approaches combining theatrical, streaming, and direct-to-audience distribution strategies for indie films.",
    category: "distribution",
    tags: ["Distribution", "Streaming", "Marketing"],
    date: "March 5, 2025"
  },
  {
    id: 4,
    title: "Virtual Production Techniques for Low-Budget Films",
    description: "Learn how indie filmmakers are leveraging accessible virtual production tools to create stunning visuals on limited budgets.",
    category: "tech-innovation",
    tags: ["Virtual Production", "VFX", "Technology"],
    date: "February 28, 2025"
  },
  {
    id: 5,
    title: "Spotlight: 'Resonance' - AI-Assisted Documentary",
    description: "Case study of how director Maya Chen used our Human/AI/Hybrid framework to create her award-winning documentary.",
    category: "spotlight",
    tags: ["Documentary", "Case Study", "Success Story"],
    date: "February 20, 2025"
  },
  {
    id: 6,
    title: "AI-Powered Post-Production Workflows",
    description: "Step-by-step guide to implementing AI tools for efficient editing, color grading, and sound design in your indie projects.",
    category: "ai-filmmaking",
    tags: ["Post-Production", "Editing", "Workflow"],
    date: "February 15, 2025"
  },
  {
    id: 7,
    title: "Blockchain Financing for Independent Films",
    description: "How innovative filmmakers are using blockchain technology to secure funding and build community ownership around their projects.",
    category: "funding",
    tags: ["Blockchain", "Crypto", "Financing"],
    date: "February 10, 2025"
  },
  {
    id: 8,
    title: "Building an Audience Before Your Film's Release",
    description: "Strategic approaches to community building and audience development throughout your production process.",
    category: "distribution",
    tags: ["Marketing", "Audience", "Social Media"],
    date: "February 5, 2025"
  }
];

const ResourcesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count when changing category
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would trigger a search API call here
    console.log("Searching for:", searchQuery);
  };
  
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 3);
  };
  
  // Filter resources based on category and search query
  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Only show the number of resources specified by visibleCount
  const visibleResources = filteredResources.slice(0, visibleCount);
  
  return (
    <Section style={{ paddingTop: '8rem' }}>
      <Container>
        <PageHeader
          title="Resources"
          subtitle="Explore our collection of articles, guides, and case studies for independent filmmakers"
        />
        
        <SearchContainer>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton type="submit" aria-label="Search">
              <FaSearch />
            </SearchButton>
          </SearchForm>
        </SearchContainer>
        
        <CategoryTabs>
          <TabButton
            active={activeCategory === "all"}
            onClick={() => handleCategoryChange("all")}
          >
            All Categories
          </TabButton>
          <TabButton
            active={activeCategory === "ai-filmmaking"}
            onClick={() => handleCategoryChange("ai-filmmaking")}
          >
            <FaRobot /> AI in Filmmaking
          </TabButton>
          <TabButton
            active={activeCategory === "funding"}
            onClick={() => handleCategoryChange("funding")}
          >
            <FaCoins /> Funding Resources
          </TabButton>
          <TabButton
            active={activeCategory === "distribution"}
            onClick={() => handleCategoryChange("distribution")}
          >
            <FaChartLine /> Distribution
          </TabButton>
          <TabButton
            active={activeCategory === "tech-innovation"}
            onClick={() => handleCategoryChange("tech-innovation")}
          >
            <FaFilm /> Tech Innovation
          </TabButton>
          <TabButton
            active={activeCategory === "spotlight"}
            onClick={() => handleCategoryChange("spotlight")}
          >
            <FaUsers /> Community Spotlight
          </TabButton>
        </CategoryTabs>
        
        <ResourcesGrid>
          {visibleResources.map(resource => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResourceCard>
                <ResourceTags>
                  {resource.tags.map((tag, index) => (
                    <ResourceTag key={index}>{tag}</ResourceTag>
                  ))}
                </ResourceTags>
                <ResourceTitle>{resource.title}</ResourceTitle>
                <ResourceDescription>{resource.description}</ResourceDescription>
                <div>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                    {resource.date}
                  </p>
                  <Button primary>Read More</Button>
                </div>
              </ResourceCard>
            </motion.div>
          ))}
        </ResourcesGrid>
        
        {visibleCount < filteredResources.length && (
          <LoadMoreButton onClick={handleLoadMore}>
            Load More Resources
          </LoadMoreButton>
        )}
      </Container>
    </Section>
  );
};

export default ResourcesPage;