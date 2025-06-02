
import React, { useState } from 'react';
import LoginScreen from '@/components/LoginScreen';
import HomeScreen from '@/components/HomeScreen';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleStartCourse = () => {
    console.log('Starting course...');
    // TODO: Navigate to course content
  };

  const handleTakeExam = () => {
    console.log('Taking exam...');
    // TODO: Navigate to exam (when unlocked)
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <HomeScreen 
      onStartCourse={handleStartCourse}
      onTakeExam={handleTakeExam}
    />
  );
};

export default Index;
