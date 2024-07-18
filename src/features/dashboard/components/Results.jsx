import React from 'react';

const Results = ({ results }) => {
  return (
    <div className="results-container">
      {results.length > 0 ? (
        results.map((result) => (
          <div key={result.id} className="result-item">
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default Results;
