import React from 'react';
import Banner from '../components/Banner';
import Charts from '../components/Charts';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import StatsCards from '../components/StatsCards';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <div className="container mx-auto px-4 py-6">
        <Banner />
        <StatsCards />
        <Charts />
      </div>
    </div>
  );
};

export default HomePage;