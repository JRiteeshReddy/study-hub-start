
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/hooks/useProgress';
import AuthScreen from '@/components/AuthScreen';
import HomeScreen from '@/components/HomeScreen';

const Index = () => {
  const { user, loading } = useAuth();
  const { isCourseCompleted } = useProgress();
  const navigate = useNavigate();

  const handleStartCourse = () => {
    console.log('Starting course...');
    navigate('/course');
  };

  const handleTakeExam = () => {
    if (isCourseCompleted()) {
      console.log('Taking exam...');
      // TODO: Navigate to exam page when created
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <HomeScreen 
      onStartCourse={handleStartCourse}
      onTakeExam={handleTakeExam}
      isExamUnlocked={isCourseCompleted()}
    />
  );
};

export default Index;
