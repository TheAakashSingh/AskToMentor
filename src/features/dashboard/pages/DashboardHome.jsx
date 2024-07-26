import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import Results from '../components/Results'; // Ensure Results component is correctly implemented or remove if not used
import AdditionalContent from '../components/AdditionalContent';
import Logo from '../components/Logo';
import ProfileMenu from '../components/ProfileMenu';
import '../../../styles/DashboardHome.css';
import MentorProfile from '../components/MentorProfile';
import OnlineProfiles from '../components/OnlineProfiles';

const DashboardHome = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState('All');
    const [mentors, setMentors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/mentors');
                setMentors(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching mentors:', error);
                setLoading(false);
            }
        };

        fetchMentors();
    }, []);

    useEffect(() => {
        if (query !== '' || selectedSkill !== 'All') {
            handleSearch();
        }
    }, [query, selectedSkill]);

    const handleSearch = () => {
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

    const onlineProfiles = mentors.slice(0, 5);

    if (loading) return <p>Loading...</p>;

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

            <div className="dashboard_section">
                <div className="main-content-dashboard">
                    <div className="skillheaderDash">
                        <span>{selectedSkill !== 'All' ? selectedSkill : 'Our Mentors'}</span>
                    </div>
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
                <div className="right_section_dashboard">
                    <OnlineProfiles profiles={onlineProfiles} />
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
