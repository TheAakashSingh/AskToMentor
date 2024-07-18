import React from 'react';
import { FilterOutlined } from '@ant-design/icons';

const Filters = ({ selectedSkill, setSelectedSkill }) => {
  const skills = [
    'All',
    'Admin Support',
    'Graphic Designer',
    'Data Scientist',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Design',
    'Full Stack Developer',
    'Software Engineer',
    'Cloud Engineer',
    'Project Manager',
    
  ];

  return (
    <div className="filters-container">
      <div className="filter-item">
        <FilterOutlined className="filter-icon" />
        <select
          className="filter-select"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        >
          {skills.map((skill, index) => (
            <option key={index} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
