
import React from 'react';
import CourseCard from './CourseCard';

interface HomeScreenProps {
  onStartCourse: () => void;
  onTakeExam: () => void;
}

const HomeScreen = ({ onStartCourse, onTakeExam }: HomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Your Course
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your learning path. Start with the course content or test your knowledge with the exam.
          </p>
        </div>

        {/* Course Options */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CourseCard
              title="Start the Course"
              emoji="🧠"
              onClick={onStartCourse}
            />
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CourseCard
              title="Take the Course Exam"
              emoji="📚"
              disabled={true}
              disabledMessage="Complete course to unlock"
              onClick={onTakeExam}
            />
          </div>
        </div>

        {/* Progress indicator placeholder */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md">
            <p className="text-sm text-gray-600">
              Progress: <span className="font-semibold">0% Complete</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
