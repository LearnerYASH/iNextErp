import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';



const SaleROIReportd = ({ reportData }) => {
  

  // Handle no data scenario
  if (!reportData || reportData.length === 0) {
    return <div>No data available for this report.</div>;
  }

  return (
   


          
    <div className="row g-3">
    {reportData.map((item, index) => (
      <div key={index} className="col-12 col-md-6 col-lg-4">
        <Card
          className="text-center h-100 shadow"
          style={{
            background: 'linear-gradient(135deg, #6495ed, #4169e1)', // Gradient effect
            color: '#fff',
            borderRadius: '15px', // Rounded corners
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Profit Icon */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',

              fontSize: '2rem',
              color: '#00ff7f', // Green for profit
            }}
          >
            <i className="fas fa-dollar-sign"></i> {/* FontAwesome dollar icon */}
          </div>
  
          <Card.Body>
            {/* Title */}
            <h5
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              ROI Sale Profit
            </h5>
  
            {/* Profit Amount */}
            <h2
              style={{
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                margin: '20px 0',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              ₹ {(item.Profit && !isNaN(item.Profit)) ? item.Profit.toFixed(0) : '0.00'}
            </h2>
  
            {/* Optional additional details */}
            <p
              style={{
                color: '#fff',
                fontSize: '1.2rem',
                textAlign: 'right',
                margin: '10px 0',
                fontWeight: 'bold',
              }}
            >
              {/* Add details if required */}
            </p>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
  
          
  );
};

export default SaleROIReportd;
