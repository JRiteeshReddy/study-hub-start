
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginScreen from '@/components/LoginScreen';
import HomeScreen from '@/components/HomeScreen';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCourseCompleted, setIsCourseCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if course is completed
    const courseCompleted = localStorage.getItem('courseCompleted') === 'true';
    setIsCourseCompleted(courseCompleted);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleStartCourse = () => {
    console.log('Starting course...');
    navigate('/course');
  };

  const handleTakeExam = () => {
    if (isCourseCompleted) {
      console.log('Taking exam...');
      // TODO: Navigate to exam page when created
    }
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <HomeScreen 
      onStartCourse={handleStartCourse}
      onTakeExam={handleTakeExam}
      isExamUnlocked={isCourseCompleted}
    />
  );
};

export default Index;
