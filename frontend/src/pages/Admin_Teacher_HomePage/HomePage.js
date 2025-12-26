import React from 'react';
import Banner from '../../components/ui/Banner';
import Charts from '../../components/ui/Charts';
import Header from '../../components/ui/Header';
import Navigation from '../../components/ui/Navigation';
import StatsCards from '../../components/ui/StatsCards';

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