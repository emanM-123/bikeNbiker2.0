import React from 'react';
import { useParams } from '@remix-run/react';

const allBikes = [
  { id: 1, brandId: 1, title: 'Bike 1', imageUrl: '/Brands/bike1.png' },
  { id: 2, brandId: 1, title: 'Bike 2', imageUrl: '/Brands/bike2.png' },
  { id: 3, brandId: 1, title: 'Bike 3', imageUrl: '/Brands/bike1.png' },
  { id: 4, brandId: 1, title: 'Bike 4', imageUrl: '/Brands/bike1.png' },
  { id: 5, brandId: 1, title: 'Bike 5', imageUrl: '/Brands/bike2.png' },
  { id: 6, brandId: 1, title: 'Bike 6', imageUrl: '/Brands/bike1.png' },
  { id: 7, brandId: 1, title: 'Bike 7', imageUrl: '/Brands/bike2.png' },
  { id: 8, brandId: 1, title: 'Bike 8', imageUrl: '/Brands/bike1.png' },
];

const BrandBikes = () => {
  const { brandId } = useParams();
  const numericBrandId = parseInt(brandId.split('-')[0], 10);
  const bikes = allBikes.filter(bike => bike.brandId === numericBrandId);

  return (
    <div className="bike-grid-container">
      <div className="each-bike-container">
        {bikes.map((bike) => (
          <div key={bike.id} className="each-bike-item">
            <div className="each-bike-card">
              <img src={bike.imageUrl} alt={bike.title} className="each-bike-image" />
              <div className="each-bike-title">{bike.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandBikes;
