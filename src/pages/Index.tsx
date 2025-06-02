
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginScreen from '@/components/LoginScreen';
import HomeScreen from '@/components/HomeScreen';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleStartCourse = () => {
    console.log('Starting course...');
    navigate('/course');
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
