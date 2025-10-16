import React, { useState, useEffect } from "react";
import JewelryCard from "../components/JewelryCard";
import JewelryFilters from "../components/JewelryFilters";
import JewelrySearch from "../components/JewelrySearch";

const JewelryListPage = () => {
  const [jewelryItems, setJewelryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({
    metalType: "",
    gemstone: "",
    minPrice: 0,
    maxPrice: 10000,
    condition: "",
    category: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockJewelry = [
        {
          id: 1,
          name: "Diamond Engagement Ring",
          description: "Beautiful platinum ring with 1ct diamond",
          price: 2500,
          image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
          metalType: "Platinum",
          gemstone: "Diamond",
          condition: "Excellent",
          category: "rings",
        },
        {
          id: 2,
          name: "Sapphire Bracelet",
          description: "Elegant gold bracelet with blue sapphires",
          price: 1800,
          image:
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?w=400",
          metalType: "Gold",
          gemstone: "Sapphire",
          condition: "Good",
          category: "bracelets",
        },
        {
          id: 3,
          name: "Pearl Necklace",
          description: "Classic pearl necklace with silver clasp",
          price: 950,
          image:
            "https://images.unsplash.com/photo-1596944948024-92c9bad2b0c3?w=400",
          metalType: "Silver",
          gemstone: "Pearl",
          condition: "Very Good",
          category: "necklaces",
        },
      ];
      setJewelryItems(mockJewelry);
      setFilteredItems(mockJewelry);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = jewelryItems.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    const filtered = jewelryItems.filter((item) => {
      return (
        (newFilters.metalType === "" ||
          item.metalType === newFilters.metalType) &&
        (newFilters.gemstone === "" || item.gemstone === newFilters.gemstone) &&
        item.price >= newFilters.minPrice &&
        item.price <= newFilters.maxPrice &&
        (newFilters.condition === "" ||
          item.condition === newFilters.condition) &&
        (newFilters.category === "" || item.category === newFilters.category)
      );
    });
    setFilteredItems(filtered);
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    const sorted = [...filteredItems].sort((a, b) => {
      if (sortType === "price-low") return a.price - b.price;
      if (sortType === "price-high") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });
    setFilteredItems(sorted);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <style>
          {`
            .loading-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 50vh;
              gap: 1rem;
            }
            
            .loading-spinner {
              width: 50px;
              height: 50px;
              border: 3px solid #f3f3f3;
              border-top: 3px solid #667eea;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div className="loading-spinner"></div>
        <p>Loading exquisite jewelry...</p>
      </div>
    );
  }

  return (
    <div className="jewelry-list-page">
      <style>
        {`
          .jewelry-list-page {
            padding: 100px 0 50px;
            min-height: 100vh;
          }
          
          .page-header {
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .page-header h1 {
            font-size: 2.5rem;
            color: #2c3e50;
            margin-bottom: 1rem;
          }
          
          .controls-container {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
          }
          
          .search-sort-section {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          
          .sort-controls {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          
          .sort-controls select {
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          
          .results-info {
            margin-bottom: 1rem;
            color: #666;
          }
          
          .jewelry-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .no-items {
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            color: #666;
          }
          
          .no-items h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
          }
          
          @media (max-width: 968px) {
            .controls-container {
              grid-template-columns: 1fr;
            }
            
            .jewelry-grid {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            }
          }
          
          @media (max-width: 768px) {
            .jewelry-list-page {
              padding: 80px 0 30px;
            }
            
            .page-header h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div className="container">
        <div className="page-header">
          <h1>Exquisite Jewelry Collection</h1>
          <p>Discover our curated selection of premium jewelry pieces</p>
        </div>

        <div className="controls-container">
          <div className="filters-section">
            <JewelryFilters
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          <div className="search-sort-section">
            <JewelrySearch onSearch={handleSearch} />

            <div className="sort-controls">
              <label>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="results-info">
          <p>
            Showing {filteredItems.length} of {jewelryItems.length} items
          </p>
        </div>

        <div className="jewelry-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <JewelryCard key={item.id} item={item} />
            ))
          ) : (
            <div className="no-items">
              <h3>No jewelry items match your criteria</h3>
              <p>Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JewelryListPage;
