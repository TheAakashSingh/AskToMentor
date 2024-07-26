import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Import your footer styles

const App = () => {
  return (
    <div className="a">
      <footer>
        <p>&copy; {new Date().getFullYear()} AskToMentor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
