
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

interface HomeScreenProps {
  onStartCourse: () => void;
  onTakeExam: () => void;
  isExamUnlocked?: boolean;
}

const HomeScreen = ({ onStartCourse, onTakeExam, isExamUnlocked = false }: HomeScreenProps) => {
  const { signOut, user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header with user info and logout */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-gray-600">Welcome back, {user?.email}</p>
          </div>
          <Button 
            onClick={signOut}
            variant="outline"
            className="flex items-center gap-2"
          >
            <LogOut size={16} />
            Logout
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Your Learning Journey
          </h1>
          <p className="text-lg text-gray-600">
            Choose your next step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Start Course Button */}
          <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">🧠</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Start the Course
              </h2>
              <p className="text-gray-600 mb-6">
                Begin your learning journey with interactive lessons
              </p>
              <Button 
                onClick={onStartCourse}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-colors"
                size="lg"
              >
                Start Learning
              </Button>
            </CardContent>
          </Card>

          {/* Course Exam Button */}
          <Card className={`transition-all duration-300 ${
            isExamUnlocked ? 'hover:scale-105 hover:shadow-lg cursor-pointer' : 'opacity-50'
          }`}>
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Take the Course Exam
              </h2>
              <p className="text-gray-600 mb-6">
                {isExamUnlocked 
                  ? 'Test your knowledge with the final exam'
                  : 'Complete course to unlock'
                }
              </p>
              <Button 
                onClick={isExamUnlocked ? onTakeExam : undefined}
                disabled={!isExamUnlocked}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                size="lg"
              >
                {isExamUnlocked ? 'Start Exam' : 'Locked'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
