import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

const SearchBar = ({ query, onSearch, setQuery }) => {
    return (
        <div className="search-container">
            <form onSubmit={onSearch} style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search..."
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <SearchOutlined style={{ marginRight: "8px" }} />

                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
