import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Results from '../components/Results';
import AdditionalContent from '../components/AdditionalContent';
import Logo from '../components/Logo';
import ProfileMenu from '../components/ProfileMenu';
import '../../../styles/DashboardHome.css';
import MentorProfile from '../components/MentorProfile';

const DashboardHome = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('All');

  const mentors = [
    {
      id: 1,
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      location: 'New York, USA',
      description: 'Experienced developer passionate about web technologies.',
      rating: 4.5,
      skills: ['Frontend Developer', 'JavaScript', 'React', 'Node.js'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      location: 'London, UK',
      description: 'Creative designer with a focus on user experience.',
      rating: 5,
      skills: ['UI/UX Design', 'Graphic Designer', 'Adobe Creative Suite'],
    },
    {
      id: 3,
      name: 'Michael Johnson',
      profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      location: 'San Francisco, USA',
      description: 'Full-stack developer specializing in modern web technologies.',
      rating: 4.2,
      skills: ['Full Stack Developer', 'JavaScript', 'Angular', 'Express.js'],
    },
    {
      id: 4,
      name: 'Emily Brown',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
      location: 'Sydney, Australia',
      description: 'Frontend developer with a passion for responsive design.',
      rating: 4.8,
      skills: ['Frontend Developer', 'HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      id: 5,
      name: 'Daniel Lee',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      location: 'Toronto, Canada',
      description: 'UX/UI designer creating intuitive and elegant user interfaces.',
      rating: 4.7,
      skills: ['UI/UX Design', 'Graphic Designer', 'Adobe XD', 'Sketch'],
    },
    {
      id: 6,
      name: 'Sarah Johnson',
      profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
      location: 'Berlin, Germany',
      description: 'Backend developer passionate about scalable solutions.',
      rating: 4.4,
      skills: ['Backend Developer', 'Python', 'Django', 'REST API'],
    },
    {
      id: 7,
      name: 'Alexandra Green',
      profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
      location: 'Paris, France',
      description: 'Graphic designer with a flair for minimalist designs.',
      rating: 4.9,
      skills: ['Graphic Designer', 'Illustrator', 'Photoshop'],
    },
    {
      id: 8,
      name: 'Chris Roberts',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
      location: 'Austin, USA',
      description: 'Frontend developer specializing in modern JavaScript frameworks.',
      rating: 4.6,
      skills: ['Frontend Developer', 'JavaScript', 'React', 'Vue.js'],
    },
    {
      id: 9,
      name: 'Eva Martinez',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      location: 'Madrid, Spain',
      description: 'Software engineer with expertise in cloud computing.',
      rating: 4.3,
      skills: ['Software Engineer', 'Cloud Engineer', 'Java', 'Spring Boot', 'AWS'],
    },
    {
      id: 10,
      name: 'Ryan Clark',
      profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg',
      location: 'Vancouver, Canada',
      description: 'Full-stack developer passionate about building scalable web applications.',
      rating: 4.8,
      skills: ['Full Stack Developer', 'JavaScript', 'Node.js', 'MongoDB'],
    },
    {
      id: 11,
      name: 'Sophia Walker',
      profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg',
      location: 'Seattle, USA',
      description: 'Project manager with a knack for delivering projects on time and within budget.',
      rating: 4.6,
      skills: ['Project Manager', 'Agile', 'Scrum', 'Kanban'],
    },
    {
      id: 12,
      name: 'David Thompson',
      profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg',
      location: 'Melbourne, Australia',
      description: 'Data scientist with a passion for uncovering insights from data.',
      rating: 4.7,
      skills: ['Data Scientist', 'Python', 'R', 'Machine Learning', 'Data Visualization'],
    },
    {
      id: 13,
      name: 'Olivia Harris',
      profilePicture: 'https://randomuser.me/api/portraits/women/7.jpg',
      location: 'Dubai, UAE',
      description: 'Admin support specialist with years of experience in office management.',
      rating: 4.5,
      skills: ['Admin Support', 'Office Management', 'Scheduling', 'Data Entry'],
    },
    {
      id: 14,
      name: 'Liam White',
      profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg',
      location: 'Tokyo, Japan',
      description: 'Cloud engineer with expertise in cloud infrastructure and services.',
      rating: 4.8,
      skills: ['Cloud Engineer', 'AWS', 'Azure', 'Google Cloud'],
    },
    {
      id: 15,
      name: 'Mia Scott',
      profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg',
      location: 'São Paulo, Brazil',
      description: 'Backend developer with extensive experience in database management.',
      rating: 4.7,
      skills: ['Backend Developer', 'SQL', 'PostgreSQL', 'MySQL'],
    }
  ];
  
  
  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = query.toLowerCase();
    const filteredResults = mentors.filter(mentor =>
      mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery))
    );
    setResults(filteredResults);
  };

  const filteredMentors = mentors.filter(mentor =>
    (selectedSkill === 'All' || mentor.skills.some(skill => skill.toLowerCase() === selectedSkill.toLowerCase())) &&
    (query === '' || mentor.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase())))
  );

  return (
    <div className="dashboard-home-container">
      <header className="header">
        <Logo />
        <div className='header_mid1'>
          <SearchBar query={query} onSearch={handleSearch} setQuery={setQuery} />
          <Filters selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
        </div>
        <ProfileMenu />
      </header>

      <div className="main-content">
        <div className="mentors-list">
          {filteredMentors.length > 0 ? (
            filteredMentors.map(mentor => (
              <MentorProfile key={mentor.id} mentor={mentor} />
            ))
          ) : (
            <p>No mentors found matching your criteria.</p>
          )}
        </div>
        <AdditionalContent />
      </div>
    </div>
  );
};

export default DashboardHome;
