import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const JewelryDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [bidAmount, setBidAmount] = useState("");

  useEffect(() => {
    const mockItems = [
      {
        id: 1,
        name: "Diamond Engagement Ring",
        description:
          "Beautiful platinum ring featuring a brilliant 1-carat diamond in a classic solitaire setting. The diamond is VS1 clarity and F color, making it an excellent choice for an engagement ring.",
        price: 2500,
        image:
          "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
        metalType: "Platinum",
        gemstone: "Diamond",
        condition: "Excellent",
        weight: "3.2g",
        dimensions: "6mm x 6mm",
        auctionEnd: "2024-12-31T23:59:59",
      },
      {
        id: 2,
        name: "Sapphire Bracelet",
        description:
          "Elegant 18k gold bracelet adorned with natural blue sapphires. The bracelet features a secure clasp and is adjustable for perfect fit.",
        price: 1800,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ad5e5?w=600",
        metalType: "Gold",
        gemstone: "Sapphire",
        condition: "Good",
        weight: "15.5g",
        dimensions: "7 inches",
        auctionEnd: "2024-12-25T23:59:59",
      },
      {
        id: 3,
        name: "Pearl Necklace",
        description:
          "Classic cultured pearl necklace with sterling silver clasp. Features perfectly matched pearls with excellent luster.",
        price: 950,
        image:
          "https://images.unsplash.com/photo-1596944948024-92c9bad2b0c3?w=600",
        metalType: "Silver",
        gemstone: "Pearl",
        condition: "Very Good",
        weight: "22g",
        dimensions: "18 inches",
        auctionEnd: "2024-12-20T23:59:59",
      },
    ];

    const foundItem = mockItems.find((i) => i.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  const handleBid = (e) => {
    e.preventDefault();
    if (bidAmount > item.price) {
      alert(`Bid placed successfully: $${bidAmount}`);
    } else {
      alert("Bid must be higher than current price");
    }
  };

  if (!item) {
    return (
      <div className="loading-container">
        <style>
          {`
            .loading-container {
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 50vh;
            }
          `}
        </style>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="jewelry-details">
      <style>
        {`
          .jewelry-details {
            padding: 100px 0 50px;
            min-height: 100vh;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          
          .back-button {
            display: inline-flex;
            align-items: center;
            margin-bottom: 2rem;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }
          
          .back-button:hover {
            color: #764ba2;
          }
          
          .details-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
          
          .jewelry-image-large {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
          }
          
          .details-info h1 {
            margin-bottom: 1rem;
            color: #2c3e50;
            font-size: 2.5rem;
          }
          
          .price {
            font-size: 2rem;
            color: #e74c3c;
            font-weight: 700;
            margin: 1rem 0;
          }
          
          .description {
            margin: 1.5rem 0;
            line-height: 1.6;
            color: #666;
            font-size: 1.1rem;
          }
          
          .specs {
            margin: 2rem 0;
          }
          
          .specs h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
          }
          
          .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.75rem 0;
            border-bottom: 1px solid #eee;
          }
          
          .bid-form {
            margin-top: 2rem;
            padding: 2rem;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border-radius: 12px;
          }
          
          .bid-form h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
          }
          
          .bid-input {
            width: 100%;
            padding: 1rem;
            margin: 0.5rem 0;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 1.1rem;
            transition: border-color 0.3s ease;
          }
          
          .bid-input:focus {
            outline: none;
            border-color: #667eea;
          }
          
          .bid-button {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(45deg, #28a745, #20c997);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 600;
            transition: transform 0.3s ease;
          }
          
          .bid-button:hover {
            transform: translateY(-2px);
          }
          
          .auction-info {
            background: #fff3cd;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid #ffc107;
          }
          
          @media (max-width: 768px) {
            .details-container {
              grid-template-columns: 1fr;
            }
            
            .details-info h1 {
              font-size: 2rem;
            }
            
            .price {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <div className="container">
        <Link to="/jewelry" className="back-button">
          ← Back to Jewelry
        </Link>

        <div className="details-container">
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="jewelry-image-large"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x500?text=Jewelry+Image";
              }}
            />
          </div>

          <div className="details-info">
            <h1>{item.name}</h1>
            <div className="price">${item.price.toLocaleString()}</div>

            <div className="auction-info">
              <p>
                ⏰ Auction ends:{" "}
                {new Date(item.auctionEnd).toLocaleDateString()}
              </p>
            </div>

            <p className="description">{item.description}</p>

            <div className="specs">
              <h3>Specifications</h3>
              <div className="spec-item">
                <span>Metal Type:</span>
                <span>{item.metalType}</span>
              </div>
              <div className="spec-item">
                <span>Gemstone:</span>
                <span>{item.gemstone}</span>
              </div>
              <div className="spec-item">
                <span>Condition:</span>
                <span>{item.condition}</span>
              </div>
              <div className="spec-item">
                <span>Weight:</span>
                <span>{item.weight}</span>
              </div>
              <div className="spec-item">
                <span>Dimensions:</span>
                <span>{item.dimensions}</span>
              </div>
            </div>

            <div className="bid-form">
              <h3>Place a Bid</h3>
              <form onSubmit={handleBid}>
                <input
                  type="number"
                  className="bid-input"
                  placeholder={`Minimum bid: $${item.price + 100}`}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  min={item.price + 100}
                  required
                />
                <button type="submit" className="bid-button">
                  Place Bid
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryDetails;
